import * as d3 from "d3";
import * as _ from "lodash";
import { createPersonTestData } from "./TestData";

(window as any).startApp = function startApp() {
  console.log('hello typescript');
  console.log("startApp")

  const data = createPersonTestData('Mikkel');

  console.log('what is data', data);

  d3.select("body")
    .selectAll("p")
    .data(data.time)
    .enter().append("p")
    .text(function (d) { return "My Intervall starts at " + d.startTime.toDateString() + "!"; });


  const width = 400;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height])
    .attr("width", width)
    .attr("height", height);

  const x = d3.scaleLinear()
    .domain(d3.extent(data.time, d => +d.startTime)) // nice()
    .range([margin.left, width - margin.right])

  const y = d3.scaleLinear()
    .domain(d3.extent(data.time, d => +d.startRuntime))
    .range([height - margin.bottom, margin.top])

  var line = d3.line()
    .x(function(d) { return x(+d.startTime); })
    .y(function(d) { return y(+d.startRuntime); });

  svg.append("g")
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .selectAll("path")
    .data(data.time)
    .join("path")
    .attr("d", line(data.time));
  
  svg.append("g")
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .selectAll("circle")
    .data(data.time)
    .join("circle")
    .attr("cx", d => x(+d.startTime))
    .attr("cy", d => y(+d.startRuntime))
    .attr("r", 3);

  document.body.appendChild(svg.node());
}
