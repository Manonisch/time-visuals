import * as d3 from "d3"

(window as any).startApp = function startApp() {
  console.log('hello typescript');

  d3.create("svg");
}

/*import d3 from "d3"

function startApp() {
  console.log("startApp")

  const data = [{ x: 1, y: 5 }, { x: 2, y: 1 }];

  d3.select("body")
    .selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    .enter().append("p")
      .text(function(d) { return "I’m number " + d + "!"; });

  const width = 400;
  const height = 400;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  const svg = d3.create("svg")
    .attr("viewBox", [0, 0, width, height]);
  
  const x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.x)) // nice()
    .range([margin.left, width - margin.right])

  const y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.y))
    .range([height - margin.bottom, margin.top])

  svg.append("g")
      .attr("fill", "white")
      .attr("stroke", "black")
      .attr("stroke-width", 2)
      .selectAll("circle")
      .data(data)
      .join("circle")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 3);

  document.body.appendChild(svg.node());
}
*/