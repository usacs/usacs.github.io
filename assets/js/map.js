/*
 *
 * Map for where RU students/alumni currently are working/interning.
 *
 * Much thanks to these resources:
 * http://techslides.com/demos/d3/d3-worldmap-boilerplate.html
 * https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c
 * https://bl.ocks.org/mbostock/c1c0426d50ca8a9f4c97
 * http://alignedleft.com/tutorials/d3/
 *
 */

// imports
const {d3, topojson, google, $} = window;

// url for Google Sheet containing everyones' responses.
const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1HgouuYpc9auDTOLhinS-RWxULmJhb0tcnzHaQ-8W3xQ/edit#gid=1052913673";

// url for map.
const MAP_JSON_URL = "/assets/map/us-states-quantized-topo.json";

// The dimensions that the map was initially projected to. A ratio of this
// to the current window dimensions defines the scale at which the
// map should be drawn.
const MAP_BASE_WIDTH = 750;
const MAP_BASE_HEIGHT = 400;

// Minimum time (in ms) required before map is redrawn.
const REDRAW_THROTTLE_TIME = 300;

// geojson objects for each state
var states = null;

/*
 * Resolves with a 'DataTable' for a given Google Sheet
 * or rejects with a string detailing the error
 */
function getGoogleSheet(spreadsheetUrl) {
    return new Promise((resolve, reject) => {
        const query = new google.visualization.Query(spreadsheetUrl);
        query.setQuery("SELECT *");

        query.send((resp) => {
            if (resp.isError()) {
                reject(new Error(resp.getDetailedMessage()));
            } else {
                resolve(resp.getDataTable());
            }
        });
    });
}

/*
 * Returns the path attribute for the map's <path> elements.
 */
function getMapPath(width, height) {
    const widthRatio = width / MAP_BASE_WIDTH;
    const heightRatio = height / MAP_BASE_HEIGHT;
    const scale = Math.min(widthRatio, heightRatio);
    const area = 1;

    const simplify = d3.geo.transform({
        point: function(x, y, z) {
            if (z >= area) this.stream.point(x * scale, y * scale);
        }
    });

    const clip = d3.geo.clipExtent()
        .extent([[0, 0], [width, height]]);

    return d3.geo.path()
        .projection({stream: function(s) {
            return simplify.stream(clip.stream(s)); 
        }});
}

/* 
 * Returns dimensions of map based on current window dimensions.
 */
function getNewMapDimensions() {
    let width = $('#map-container').width();
    let height = ($("#map-container").height() - $("#map-heading").height());
    const widthDelta = (width - MAP_BASE_WIDTH) / MAP_BASE_WIDTH;
    const heightDelta = (height - MAP_BASE_HEIGHT) / MAP_BASE_HEIGHT;

    // maintain aspect ratio
    if (widthDelta < heightDelta) {
        height = (width * MAP_BASE_HEIGHT) / MAP_BASE_WIDTH;
    } else {
        width = ((height * MAP_BASE_WIDTH) / MAP_BASE_HEIGHT);
    }

    return [width, height];
}

/*
 * Draws the map. Should only be called once on document.ready()
 */
function draw() {
    const [width, height] = getNewMapDimensions();
    const tooltip = d3.select(".tooltip");
    const path = getMapPath(width, height);
    const svg = d3.select("#map");
    const statesGroup = svg.select("g");
    const roughSvg = rough.svg(document.getElementById('map'),
        { options: { simplification: 0.2, roughness: .65 } });

    // something happened to Puerto Rico :(
    // TODO: investigate
    states = states.filter((state) => {return state.geometry !== null;});

    // reduce the amount of times we have to redraw the map
    d3.select(window).on("resize", throttleRedraw);

    // set map width/height and define pan/zoom behavior
    svg.attr("width", width).attr("height", height);

    // add new state elements to map
    statesGroup.html('');
    let statesEnter = statesGroup.selectAll(".state").data(states).enter();
    statesEnter = statesEnter.append("a").attr("href", "#map-listing")
        .append(function(state) {
            const options = {simplification: .7, roughness: .75,
                fill: state.properties['bgcolor'], fillStyle: 'solid'};
            return roughSvg.path(path(state), options);
        });

    // define interactivity for new state elements in map
    statesEnter
        .on("click", function(state) { 
            const stateName = state.properties['NAME10'];

            // toggle selected state
            statesGroup.select(".selected-state")
                .classed("selected-state", false);
            d3.select(this).
                classed("selected-state", true);

            // update state name on page
            d3.select("#state-name").html(stateName);

            // bind peoples' data to list
            const people = d3.select("#map-listing")
                .selectAll("li")
                .data(state.properties.people);

            // update existing list elements
            people.classed("list-group-item", true)
                .html(function(person) {
                    const tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
                    return `${person.name} ${tab}//${tab} ${person.company} ${tab}//${tab} ${person.location} ${tab}//${tab} ${person.jobtype}`;
                });

            // add new list elements
            people.enter()
                .append("li")
                .classed("list-group-item", true)
                .html(function(person) {
                    const tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
                    return `${person.name} ${tab}//${tab} ${person.company} ${tab}//${tab} ${person.location} ${tab}//${tab} ${person.jobtype}`;
                });

            // remove any excess list elements
            people.exit().remove();

            // add placeholder text to list, if no one is working in that state
            if (!d3.select("#map-listing").html()) {
                d3.select("#map-listing")
                    .append("li")
                    .classed("list-group-item", true)
                    .html("Looks like no one is working here yet!");
            }
        })
        .on("mousemove", function(state) {
            const stateName = state.properties['NAME10'];

            // get mouse position
            const mouse = d3.mouse(svg.node()).map((d) => parseInt(d));

            // offsets for tooltip relative to mouse position
            const offsetL = $('#map').offset()['left'];
            const offsetT = $('#map').offset()['top'];

            tooltip
                .classed("hidden", false)
                .attr("style", `left: ${mouse[0]}px; top: ${mouse[1] + offsetT}px;`)
                .html(stateName);
        })
        .on("mouseout",  function() {
            tooltip.classed("hidden", true);
        }); 

    // hide loading img
    d3.select("#map-loading").classed("hidden", true);

    // show map
    svg.classed("hidden", false);
    d3.select("#state-name").classed("hidden", false);
}

/*
 * Throttle the amount of times the map is redrawn when the window is resized.
 */
function throttleRedraw() {
    if (typeof  throttleRedraw.timer === 'undefined') {
        throttleRedraw.timer = window.setTimeout(draw, REDRAW_THROTTLE_TIME);
    }

    window.clearTimeout(throttleRedraw.timer);
    throttleRedraw.timer = window.setTimeout(draw, REDRAW_THROTTLE_TIME);
}

/* 
 * Returns a list of geoJSON features, one per state.
 */
function getStates() {
    return new Promise((resolve, reject) => {
        d3.json(MAP_JSON_URL, (err, mapJSON) => {
            if (err) reject(err);

            topojson.presimplify(mapJSON);
            states = topojson.feature(mapJSON, mapJSON.objects.states).features;
            resolve(states);
        });
    });
}

/*
 * Grab everyones' info from a Google Sheet and add them to the proper state.
 */
function populateStates([states, spreadsheet]) {
    const normalize = (val, [min, max]) => {
        return (val - min) / (max - min);
    };

    // returns [1, 2, 3, ..., n]
    const range = (n) => { 
        const arr = new Array(n);
        for (let i = 0; i < n; i++) {
            arr[i] = i;
        }

        return arr;
    };

    const stateMap = range(spreadsheet.getNumberOfRows())
        .map((rowIdx) => {
            return {
                name: spreadsheet.getValue(rowIdx, 2),
                company: spreadsheet.getValue(rowIdx, 1),
                location: spreadsheet.getValue(rowIdx, 4),
                state: spreadsheet.getValue(rowIdx, 5).toLowerCase(),
                jobtype: spreadsheet.getValue(rowIdx, 6)
            };
        })
        .reduce((stateMap, person) => {
            if (!stateMap.hasOwnProperty(person.state)) {
                stateMap[person.state] = [person];
            } else {
                stateMap[person.state].push(person);
            }

            return stateMap;
        }, {});
    for (let state of states) {
        state['properties']['people'] = stateMap[
            state['properties']['NAME10'].toLowerCase()
        ] || [];
    }

    // store color per state for heatmap
    const colors = states
    // get number of people per state
        .map((state) => {
            return state.properties['people'].length;
        })
    // normalize
        .map((numPeople, idx, arr) => {
            return normalize(numPeople, d3.extent(arr));
        })
    // we want the complement percentage since larger numbers
    // should yield a smaller 'G' value in the RGB
        .map((normalized) => {
            return 1 - normalized;
        })
    // calculate 'G' value
        .map((complement) => {
            return Math.round(230 * complement);
        })
    // states with no people should just be white
        .map((g) => {
            return (g === 230) ? 'rgb(255, 255, 255)' : `rgb(255, ${g}, 0)`;
        });
    for (let i = 0; i < colors.length; i++) {
        states[i].properties['bgcolor'] = colors[i];
    }

    return states;
}

/* 
 * Init map
 */
$(document).ready(() => {
    Promise.all([getStates(), getGoogleSheet(SPREADSHEET_URL)])
        .then(populateStates)
        .then(draw)
        .catch( ({message}) => console.log(message) );
});

