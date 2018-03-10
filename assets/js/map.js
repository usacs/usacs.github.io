/*
 * Map for where RU students/alumni currently are working/interning.
 *
 * Much thanks to these resources:
 * http://techslides.com/demos/d3/d3-worldmap-boilerplate.html
 * https://medium.com/@mbostock/command-line-cartography-part-1-897aa8f8ca2c
 * https://bl.ocks.org/mbostock/c1c0426d50ca8a9f4c97
 * http://alignedleft.com/tutorials/d3/
 *
 */

// url for Google Sheet containing everyones' responses.
const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1HgouuYpc9auDTOLhinS-RWxULmJhb0tcnzHaQ-8W3xQ/edit#gid=1052913673";

// url for map.
const MAP_JSON_URL = "assets/map/us-states-quantized-topo.json";

// The width that the map was initially projected to. A ratio of this
// to the current window width defines the scale at which the map should be
// drawn,
const MAP_BASE_WIDTH = 750;

// Minimum time (in ms) required before map is redrawn.
const REDRAW_THROTTLE_TIME = 300;

// A list of geoJSON feautures for each state.
var states = null;

// d3 selection for svg element of map.
var svg = null;

/*
 * Returns the path attribute for the map's <path> elements.
 */
function getMapPath(width, height) {
    const scale = width / MAP_BASE_WIDTH;
    const area = 1;

    var simplify = d3.geo.transform({
        point: function(x, y, z) {
            if (z >= area) this.stream.point(x * scale, y * scale);
        }
    });

    var clip = d3.geo.clipExtent()
        .extent([[0, 0], [width, height]]);

    return d3.geo.path()
        .projection({stream: function(s) {
            return simplify.stream(clip.stream(s)); 
        }});
}

/*
 * Draws the map.
 */
function draw(width, height) {
    const tooltip = d3.select(".tooltip");
    const path = getMapPath(width, height);
    const statesGroup = svg.select("g");

    // set map width/height and define pan/zoom behavior
    svg.attr("width", width)
        .attr("height", height)
        .call(d3.behavior.zoom().scaleExtent([1, 8]).on("zoom", move));

    // update state elements in map
    const statesUpdate = statesGroup.selectAll(".state").data(states);
    statesUpdate.attr("d", path);

    // add new state elements to map
    let statesEnter = statesGroup.selectAll(".state").data(states).enter();
    statesEnter = statesEnter.append("a").attr("href", "#map-listing")
        .append("path")
        .attr("class", "state")
        .attr("d", path);

    // define interactivity for new state elements in map
    statesEnter
        .on("click", function(state, i) { 
            // toggle selected state
            statesGroup.select(".selected-state").classed("selected-state", false);
            d3.select(this).classed("selected-state", true);

            // update state name on page
            d3.select("#state-name").html(state.properties['NAME10']);

            // bind peoples' data to list
            var people = d3.select("#map-listing")
                .selectAll("li")
                .data(state.properties.people);

            // update existing list elements
            people.text(function(person, i) {return person.name});

            // add new list elements
            people.enter()
                .append("li")
                .text(function(person, i) {return person.name});

            // remove any excess list elements
            people.exit().remove();

            // add placeholder text to list, if noone is working in that state
            if (!d3.select("#map-listing").html()) {
                d3.select("#map-listing").append("li").html("Looks like noone is working here yet!");
            }
        })
        .on("mousemove", function(state,i) {
            // get mouse position
            var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );

            // offsets for tooltip relative to mouse position
            const offsetL = $('#map-entry-point').offset()['left'] + (width/30);
            const offsetT = $('#map-entry-point').offset()['top'] + (height/30);

            tooltip
                .classed("hidden", false)
                .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
                .html(state.properties['NAME10'])
        })
        .on("mouseout",  function(d,i) {
            tooltip.classed("hidden", true)
        }); 
}

/*
 * Find current dimensions of window and redraw the map
 */
function redraw() {
    const width = $('#map-entry-point').outerWidth() - 370;
    const height = (width / 2) + 50;

    draw(width, height);
}

/*
 * Called when a map pan/zoom occurs. Translates and scales map accordingly.
 */
function move() {
    const translate = d3.event.translate;
    const scale = d3.event.scale;  

    svg.select("g").style("stroke-width", 1 / scale)
        .attr("transform", "translate(" + translate + ")scale(" + scale + ")");
}

/*
 * Throttle the amount of times the map is redrawn when the window is resized.
 */
function throttleRedraw() {
    if (typeof  throttleRedraw.timer === 'undefined') {
        throttleRedraw.timer = window.setTimeout(() => redraw(), REDRAW_THROTTLE_TIME);
    }

    window.clearTimeout(throttleRedraw.timer);
    throttleRedraw.timer = window.setTimeout(() => redraw(), REDRAW_THROTTLE_TIME);
}

/* 
 * Returns a list of geoJSON features, one per state.
 */
function getStates() {
    return new Promise((resolve, reject) => {
        d3.json(MAP_JSON_URL, (err, mapJSON) => {
            if (err) reject(err);

            topojson.presimplify(mapJSON);
            resolve(topojson.feature(mapJSON, mapJSON.objects.countries)
                .features);
        });
    });
}

/*
 * Grab everyones' info from a Google Sheet and add them to the proper state.
 */
function populateStates(states) {
    return new Promise((resolve, reject) => {
        const query = new google.visualization.Query(SPREADSHEET_URL);
        query.setQuery("SELECT *");
        query.send((resp) => {
            if (resp.isError()) reject(resp.getDetailedMessage());

            // make map from "state name" to [people in that state]
            // this will make it easy to quickly add a person to a state
            const stateMap = {};
            for (let state of states) {
                state['properties']['people'] = [];
                const peopleList = state['properties']['people'];
                stateMap[state['properties']['NAME10'].toLowerCase()] = peopleList;
            }

            // populate lists of people per state
            var table = resp.getDataTable();
            for (let i = 0; i < table.getNumberOfRows(); i++) {
                const state = table.getValue(i, 5).toLowerCase();
                const name = table.getValue(i, 2);
                const company = table.getValue(i, 1);
                const location = table.getValue(i, 4);
                const person = { name, company, location };

                stateMap[state].push(person);
            }

            resolve();
        });
    });
}

/* 
 * Init map
 */
$(document).ready(() => {
    // reduce the amount of times we have to redraw the map
    d3.select(window).on("resize", throttleRedraw);

    // selection for map element
    svg = d3.select("#map");

    getStates().then((val) => {
        states = val;
        populateStates(states).then(() => redraw());
    });
});

