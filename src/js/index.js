import d3 from 'd3'

document.addEventListener('DOMContentLoaded', () => {
  var dataset = [11, 23, 4, 33, 93];

  var w = 500;
  var h = 200;
  var padding = 20;

  var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([padding, w - padding])
    .nice();


  var svg = d3.select("body").append("svg").attr({width: w, height: h});

  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

  svg.append("g")
    .attr({
      class: "axis",
      transform: "translate(0, 180)"
    })
    .call(xAxis);

  svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr({
      x: padding,
      y: function (d, i) {
        return i * 25 - padding;
      },
      width: function (d) {
        return xScale(d)
      },
      height: 20,
      fill: 'red'
    })
});


