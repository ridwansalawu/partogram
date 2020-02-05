import "./template.css";
const d3 = require("d3");
// const _ = require("lodash")

const graphData = require("../testData/graphData");

const initData = graphData.setInitialGraphData();
const alertDataSet = graphData.setAlertLineData();



 const draw = () => {

    const margin = {
        top:10,
        right: 20,
        bottom: 30,
        left: 30
       };

    const width = 600 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const drawingBoardWidth = width;
    const drawingBoardHeight = height;
    const mains = d3.select(".main-page")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
          

    const xScale = d3.scaleLinear()
          .domain(d3.extent(initData, d => d.labourTime))
          .range([0, drawingBoardWidth])

    const yScale = d3.scaleLinear()
          .domain(d3.extent(initData, d => d.dilatation))
          .range([drawingBoardHeight, 0])

    

    const drawingBoard = mains
            .insert("svg", ":first-child")
            // .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)

            // .call(makeResponsive)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

    const yAxisGroup = drawingBoard.append("g").call(d3.axisLeft(yScale).ticks(10).tickSize(-550));
            yAxisGroup.append("text")
            .attr("y", 20)
            .attr("x", height/2)
            .attr("transform", "rotate(90)")
            .text("Cervical Dilatation")
            .attr("class", "y-axis-group-text")
            .attr("fill", "black")

    const xAxisTickFormater = num => {
            let refined = d3.format("")(num).replace(/^\d+\.\d/, "")
            return refined
    }

    const xAxis = d3.axisBottom(xScale)
            .tickFormat(xAxisTickFormater)
            .ticks(24)
            .tickSize(-260)

    const xAxisGroup = drawingBoard.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(xAxis); 
            xAxisGroup.append("text")
                .attr("y", 20)
                .attr("x", width/2)
                .text("Hours")
                .attr("fill", "black")

    const drawAlertLine = d3.line()
            .x(d => xScale(d.labourTime))
            .y(d => yScale(d.dilatation))
    
            drawingBoard.append("path")
                .attr("class", "line")
                .attr("id", "alert-line")
                .datum(alertDataSet)
                .attr("d", drawAlertLine)

    return drawAlertLine;
}



export const drawTemplate = draw;
// console.log(graphData.setActionLineData())
// console.log(graphData.setAlertLineData())
// console.log(graphData.setInitialGraphData())