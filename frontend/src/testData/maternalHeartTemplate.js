import "./template.css";
const d3 = require("d3");
const graphData = require("./graphData");
const initData = graphData.setInitialGraphDataMaternalHeart();
const highDataset = graphData.setHigherMaternalHeart();
const lowDataSet = graphData.setLowerMaternalHeart();


export const drawTemplate = (customDataSetMhr) => {
    d3.select(".main-graph-maternal > *").remove();

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
    const mains = d3.select(".main-graph-maternal")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
          
    const xScale = d3.scaleLinear()
          .domain([0, 12])
          .range([0, drawingBoardWidth])

    const yScale = d3.scaleLinear()
          .domain(d3.extent(initData, d => d.heartRate))
          .range([drawingBoardHeight, 0])

    const drawingBoard = mains
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .call(makeResponsive)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

    const yAxisGroup = drawingBoard.append("g").call(d3.axisLeft(yScale).ticks(10).tickSize(-550));
            yAxisGroup.append("text")
            .attr("y", 28)
            .attr("x", height/2)
            .attr("transform", "rotate(90)")
            .text("Maternal Heart Rate")
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

    const drawLowLine = d3.line()
            .x(d => xScale(d.time))
            .y(d => yScale(d.heartRate))
    
            drawingBoard.append("path")
                .attr("class", "line")
                .attr("id", "alert-line")
                .datum(lowDataSet)
                .attr("d", drawLowLine)

    const drawHighLine = d3.line()
        .x(d => xScale(d.time))
        .y(d => yScale(d.heartRate))
      

        drawingBoard.append("path")
            .attr("class", "action-line")
            .datum(highDataset)
            .attr("d", drawHighLine)

    const drawCustomLine = d3.line()    
        .x(d => xScale(d.time))
        .y(d => yScale(d.heartRate))
       

    drawingBoard.append("path")
        .attr("class", "custom-line")
        .datum(customDataSetMhr)
        .attr("d", drawCustomLine)
        .attr("stroke-linecap", "round")

    function makeResponsive(drawingBoard) {
        const container = d3.select(drawingBoard.node().parentNode),
        width = parseInt(drawingBoard.style('width'), 10),
        height = parseInt(drawingBoard.style('height'), 10),
        aspect = width / height;
        drawingBoard.attr("viewBox", `0 0 ${width} ${height}`)
            .attr("preserveAspectRatio", "xMinYMid")
            .call(resize);
        d3.select(window).on('resize.' + container.attr('id'), resize);

        function resize() {
            const targetWidth = parseInt(container.style('width'));
            drawingBoard.attr('width', targetWidth)
            drawingBoard.attr('height', Math.round(targetWidth / aspect));
        }
    }
   
}




