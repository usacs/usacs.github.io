const SPREADSHEET_URL = "https://docs.google.com/spreadsheets/d/1HgouuYpc9auDTOLhinS-RWxULmJhb0tcnzHaQ-8W3xQ/edit#gid=1052913673";
const MAP_JSON_URL = "assets/map/us-states-quantized-topo.json";
const MAP_WIDTH = 750;
const MAP_HEIGHT = 400;

var states = null;
var statesGroup = null;
var path = null;
var throttleTimer = null;
var translate = [0, 0];
var scale = 1;
var area = 1;
var tooltip = null;

const zoom = d3.behavior.zoom()
    .scaleExtent([1, 8])
    .on("zoom", move);

function setup(width, height) {
    d3.select(window).on("resize", throttle);

    scale = width / MAP_WIDTH;

    var simplify = d3.geo.transform({
        point: function(x, y, z) {
            if (z >= area) this.stream.point(x * scale + translate[0], y * scale + translate[1]);
        }
    });

    var clip = d3.geo.clipExtent()
        .extent([[0, 0], [width, height]]);

    path = d3.geo.path()
        .projection({stream: function(s) {
            return simplify.stream(clip.stream(s)); 
        }});

    svg = d3
        .select("#map")
        .attr("width", width)
        .attr("height", height)
        .call(zoom);

    tooltip = d3.select(".tooltip");

    statesGroup = svg.select("g");
}

function draw(width, height) {
    //offsets plus width/height of transform, plsu 20 px of padding, plus 20 extra for tooltip offset off mouse
    var offsetL = $('#map-entry-point').offset()['left'] + (width/30);
    var offsetT = $('#map-entry-point').offset()['top'] + (height/30);

    statesGroup.selectAll(".state").data(states).attr("d", path);
    statesGroup.selectAll(".state").data(states)
        .enter()
        .append("a")
        .attr("href", "#map-listing")
        .append("path")
        .attr("class", "state")
        .attr("d", path)
        .on("click", function(state, i) { 
            statesGroup.select(".selected-state").classed("selected-state", false);
            d3.select(this).classed("selected-state", true);

            d3.select("#state-name").html(state.properties['NAME10']);

            var people = d3.select("#map-listing")
                .selectAll("li")
                .data(state.properties.people);

            people.text(function(person, i) {return person.name});

            people.enter()
                .append("li")
                .text(function(person, i) {return person.name});

            people.exit().remove();

            if (!d3.select("#map-listing").html()) {
                d3.select("#map-listing").append("li").html("Looks like noone is working here yet!");
            }

        })
        .on("mousemove", function(state,i) {
            var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
            tooltip
                .classed("hidden", false)
                .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
                .html(state.properties['NAME10'])
        })
        .on("mouseout",  function(d,i) {
            tooltip.classed("hidden", true)
        }); 
}

function redraw() {
    width = $('#map-entry-point').outerWidth() - 370;
    height = (width / 2) + 50;
    setup(width, height);
    draw(width, height);
}

function move() {
    var t = d3.event.translate;
    var s = d3.event.scale;  
    var h = MAP_HEIGHT / 3;

    zoom.translate(t);
    statesGroup.style("stroke-width", 1 / s).attr("transform", "translate(" + t + ")scale(" + s + ")");
}

function throttle() {
    window.clearTimeout(throttleTimer);
    throttleTimer = window.setTimeout(function() {
        redraw();
    }, 200);
}

$(document).ready(() => {
    setup(MAP_WIDTH, MAP_HEIGHT);

    d3.json(MAP_JSON_URL, (err, mapJSON) => {
        if (err) throw err;

        topojson.presimplify(mapJSON);
        states = topojson.feature(mapJSON, mapJSON.objects.countries).features;

        // add people to list for appropriate state
        let query = new google.visualization.Query(SPREADSHEET_URL);
        query.setQuery("SELECT *");
        query.send((resp) => {
            // make map from "state name" to [people in that state]
            // this will make it easy to quickly find the state for a person
            var stateMap = {};
            for (let state of states) {
                state['properties']['people'] = [];
                var peopleList = state['properties']['people'];
                stateMap[state['properties']['NAME10'].toLowerCase()] = peopleList;
            }

            // populate lists of people per state
            var table = resp.getDataTable();
            for (var i = 0; i < table.getNumberOfRows(); i++) {
                var state = table.getValue(i, 5).toLowerCase();
                var name = table.getValue(i, 2);
                var company = table.getValue(i, 1);
                var location = table.getValue(i, 4);
                var person = { name, company, location };
                stateMap[state].push(person);
            }
        });

        draw(MAP_WIDTH, MAP_HEIGHT);
    });
});

