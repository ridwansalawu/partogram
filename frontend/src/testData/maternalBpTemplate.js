import "./template.css";
const d3 = require("d3");
const graphData = require("./graphData");
const initData = graphData.setInitialGraphDataMaternalBp();
const highDatasetSystolic = graphData.setHigherMaternalBpSystolic();
const lowDataSetSystolic = graphData.setLowerMaternalBpSystolic();
const customDataSetSystolic = graphData.setCustomMaternalBpSystolic();
const highDatasetDiastolic = graphData.setHigherMaternalBpDiastolic();
const lowDataSetDiastolic = graphData.setLowerMaternalBpDiastolic();
const customDataSetDiastolic = graphData.setCustomMaternalBpDiastolic();

export const drawTemplate = () => {
    d3.select(".main-graph-maternal-bp > *").remove();

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
    const mains = d3.select(".main-graph-maternal-bp")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
          
    const minTime = d3.extent(initData, d => d.time)
    const xScale = d3.scaleLinear()
        //   .domain(d3.extent(initData, d => d.time))
          .domain([0, 12])
          .range([0, drawingBoardWidth])

    const yScale = d3.scaleLinear()
          .domain(d3.extent(initData, d => d.bp))
          .range([drawingBoardHeight, 0])

    

    const drawingBoard = mains
            // .insert("svg", ":first-child")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .call(makeResponsive)
            .append("g")
            .attr("transform", `translate(${margin.left}, ${margin.top})`)

    const yAxisGroup = drawingBoard.append("g").call(d3.axisLeft(yScale).ticks(10).tickSize(-550));
            yAxisGroup.append("text")
            .attr("y", 20)
            .attr("x", height/2)
            .attr("transform", "rotate(90)")
            .text("Maternal Blood Pressure")
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

    const drawLowLineSystolic = d3.line()
            .x(d => xScale(d.time))
            .y(d => yScale(d.bp))
    
            drawingBoard.append("path")
                .attr("class", "line")
                .attr("id", "low-sys-line")
                .datum(lowDataSetSystolic)
                .attr("d", drawLowLineSystolic)

    const drawHighLineSystolic = d3.line()
        .x(d => xScale(d.time))
        .y(d => yScale(d.bp))
      

        drawingBoard.append("path")
            .attr("class", "line")
            .attr("id", "high-sys-line")
            .datum(highDatasetSystolic)
            .attr("d", drawHighLineSystolic)

    const drawCustomLineSystolic = d3.line()    
        .x(d => xScale(d.time))
        .y(d => yScale(d.bp))

        drawingBoard.append("path")
        .attr("class", "line")
        .attr("id", "custom-sys-line")
        .datum(customDataSetSystolic)
        .attr("d", drawCustomLineSystolic)
        .attr("stroke-linecap", "round")

// ==========================================================================================

    const drawLowLineDiastolic = d3.line()
            .x(d => xScale(d.time))
            .y(d => yScale(d.bp))
    
            drawingBoard.append("path")
                .attr("class", "line")
                .attr("id", "low-dias-line")
                .datum(lowDataSetDiastolic)
                .attr("d", drawLowLineDiastolic)

    const drawHighLineDiastolic = d3.line()
        .x(d => xScale(d.time))
        .y(d => yScale(d.bp))
      

        drawingBoard.append("path")
            .attr("class", "line")
            .attr("id", "high-dias-line")
            .datum(highDatasetDiastolic)
            .attr("d", drawHighLineDiastolic)

    const drawCustomLineDiastolic = d3.line()    
        .x(d => xScale(d.time))
        .y(d => yScale(d.bp))
       

    drawingBoard.append("path")
        .attr("class", "line")
        .attr("id", "custom-dias-line")
        .datum(customDataSetDiastolic)
        .attr("d", drawCustomLineDiastolic)
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




