import React, { Component } from 'react';
import * as d3 from 'd3';
import './partograph.css';
import _ from "lodash";
import Header from './Header'


class Partograph extends Component{

    constructor(props) {
      super(props)
      this.state = {
          time:"",
          cervix:"",
          labourTime: "",
          dilatation: "",
          user:null,
          dilatation: 0,
          effacement: 0,
          position: null,
          station: 0,
          descent: 0

         
      };
      this.margin = {
        top:10,
        right: 20,
        bottom: 30,
        left: 30
       };

      this.width = 600 - this.margin.left - this.margin.right;
      this.height = 300 - this.margin.top - this.margin.bottom;
     

    };

    setInitialGraphData () {
      const labourTime = _.range(0, 13);
      let dilatation = _.range(0, 11);
      const alertDataset =  [[...labourTime], [...dilatation]];
      const dataset = labourTime.map((item, index) => {
          return {"labourTime": item, "dilatation": dilatation[index]}
      })
      return dataset
    }

    setAlertLineData() {
        let labourTime = [0,1,2,3,4,5,6]
        let dilatation = [4,5,6,7,8,9,10]
        const alertDataset =  [[...labourTime], [...dilatation]];
        const dataset = labourTime.map((item, index) => {
            return {"labourTime": item, "dilatation": dilatation[index]}
            })
        return dataset
            }

   setActionLineData() {
       let labourTime = [4,5,6,7,8,9,10]
       let dilatation = [4,5,6,7,8,9,10]
       const alertDataset =  [[...labourTime], [...dilatation]];
       const dataset = labourTime.map((item, index) => {
       return {"labourTime": item, "dilatation": dilatation[index]}
            })
       return dataset
        }

    setData () {
      const labourTime = _.range(0, 25);
      let dilatation = _.range(4, 29);
      const alertDataset =  [[...labourTime], [...dilatation]];
      const dataset = labourTime.map((item, index) => {
          return {"labourTime": item, "dilatation": dilatation[index]}
      })
      return dataset
    }

    // handleChange =  (evt) => {
    //     const value = evt.target.value;
    //     this.setState({
    //       ...this.state.bishop,
    //       [evt.target.name]: value
    //     });
    //   }


    handleChange = (e) => {

        this.setState({...this.state, [e.target.name]: e.target.value})
       
    }

    calcBishopScore = () => {
        console.log("Bishop score = ")

    }

    

    

    componentDidMount() {
        this.mountChart()
     
    }

    mountChart() {

        const drawingBoardWidth = this.width;
        const drawingBoardHeight = this.height;
        let mains = d3.select(".main-page")
        let initialGraphData = this.setInitialGraphData();
        const alertDataSet = this.setAlertLineData();
        const actionDataSet = this.setActionLineData();

        const xScale = d3.scaleLinear()
            .domain(d3.extent(initialGraphData, d => d.labourTime))
            .range([0, drawingBoardWidth])

        const yScale = d3.scaleLinear()
            .domain(d3.extent(initialGraphData, d => d.dilatation))
            .range([drawingBoardHeight, 0])
            
        const drawingBoard = mains
            .insert("svg", ":first-child")
            .attr("width", this.width + this.margin.left + this.margin.right)
            .attr("height", this.height + this.margin.top + this.margin.bottom)
            .call(responsivefy)
            .append("g")
            .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`)
                            //  .style("border", "black 2px solid")
        drawingBoard.append("g").call(d3.axisLeft(yScale).ticks(10).tickSize(-550));

        drawingBoard.append("g")
            .attr("transform", `translate(0, ${this.height})`)
            .call(d3.axisBottom(xScale).ticks(24).tickSize(-260)); 

        const drawAlertLine = d3.line()
            .x(d => xScale(d.labourTime))
            .y(d => yScale(d.dilatation))

        drawingBoard.append("path")
            .attr("class", "line")
            .datum(alertDataSet)
            .attr("d", drawAlertLine)

        const drawActionLine = d3.line()
            .x(d => xScale(d.labourTime))
            .y(d => yScale(d.dilatation))

        drawingBoard.append("path")
            .attr("class", "action-line")
            .datum(actionDataSet)
            .attr("d", drawActionLine)
        
            
        

        



        function responsivefy(drawingBoard) {
            const container = d3.select(drawingBoard.node().parentNode),
            width = parseInt(drawingBoard.style('width'), 10),
            height = parseInt(drawingBoard.style('height'), 10),
            aspect = width / height;

            console.log(container)
            console.log(height)
            console.log(width)
            console.log(aspect)

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
    





    render() {
        return (
            <div className="main-content">

                <div className="container">
                    <div className="header"><Header /> </div>
                    <div className="navigation">
                        <nav className="nav1">nav1</nav>
                        <nav className="nav2">nav2</nav>
                        <nav className="nav3">nav3</nav>
                        <nav className="nav4">nav4</nav>
                        <nav className="nav5">nav5</nav>
                    </div>
                    <div className="left-sidebar sidebars"> <h2>left side bar</h2> </div>
                    <div className="main-page"><h2>Graph Area</h2>
                        <div id="custom-input">
                            <form onSubmit={this.calcBishopScore}>
                                <label>time</label>
                                <input
                                    type="number"
                                    id="Time"
                                    name="time"
                                    onChange={this.handleChange}
                                />

                                cervix
                                <input 
                                    type="number"
                                    id="Cervix"
                                    name="cervix"
                                    onChange={this.handleChange}
                                />
                                
                                <hr/>

                                Dilatation
                                <input 
                                    type="number" 
                                    id="Dilatation"
                                    name="dilatation"
                                    onChange={this.handleChange} 
                                />

                                Descent
                                <input 
                                    type="number" 
                                    id="Descent"
                                    name="descent"
                                    onChange={this.handleChange} 
                                />

                                Station
                                <input 
                                    type="number" 
                                    id="Station"
                                    name="station"
                                    onChange={this.handleChange} 
                                />

                                Effacement
                                <input 
                                    type="number" 
                                    id="Effacement"
                                    name="effacement"
                                    onChange={this.handleChange} 
                                />

                                Position
                                <select 
                                    name="position" 
                                    id="Position" 
                                    onChange={this.handleChange} 
                                    >
                                        <option value="anterior">Anterior</option>
                                        <option value="central">Central</option>
                                        <option value="posterior">Posterior</option>
                                </select>
                                <hr/>
                                <button>submit</button>
                            </form>
                            
                        </div>
                    
                    </div>
                    <div className="right-sidebar">
                    
                        
                        <h2>Right Side Bar</h2></div>
                    <div className="display-zone"><h2>display zone</h2> <span id="display-toggle"><button>edit</button></span></div>
                    <div className="footer"><h2>footer</h2></div>
                </div>   

               
            </div>
        )
    }
}


export default Partograph;
