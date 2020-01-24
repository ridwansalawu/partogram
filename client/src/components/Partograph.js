import React, { Component } from 'react';
import * as d3 from 'd3';
import './partograph.css';
import _ from "lodash";
import Header from './Header';
import CustomDataSet from './CustomDataSet';
import AlertLine from './AlertLine';



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
          descent: 0,
          setOpen: false,
          open: false,
          age: "",
          anchorEl: null,
          setAnchorEl: null,
          customD:"",
          customH:"",
          customData:[]


         
      };
      this.margin = {
        top:10,
        right: 20,
        bottom: 30,
        left: 30
       };

      this.width = 600 - this.margin.left - this.margin.right;
      this.height = 300 - this.margin.top - this.margin.bottom;

      this.customDilatation = this.state.customDilatation;
      this.customTime = this.state.customTime;
      this.setInitialGraphData = this.setInitialGraphData.bind(this);

    };

    setInitialGraphData() {
      const labourTime = _.range(0, 13);
      let dilatation = _.range(0, 11);
    //   const alertDataset =  [[...labourTime], [...dilatation]];
      const dataset = labourTime.map((item, index) => {
          return {"labourTime": item, "dilatation": dilatation[index]}
      })
      return dataset
    }

    setAlertLineData() {
        let labourTime = [0,1,2,3,4,5,6]
        let dilatation = [4,5,6,7,8,9,10]
        // const alertDataset =  [[...labourTime], [...dilatation]];
        const dataset = labourTime.map((item, index) => {
            return {"labourTime": item, "dilatation": dilatation[index]}
            })
        return dataset
            }

   setActionLineData() {
       let labourTime = [4,5,6,7,8,9,10]
       let dilatation = [4,5,6,7,8,9,10]
    //    const alertDataset =  [[...labourTime], [...dilatation]];
       const dataset = labourTime.map((item, index) => {
       return {"labourTime": item, "dilatation": dilatation[index]}
            })
       return dataset
        }

//    drawAlertLine = () => d3.line()
//             .x(d => xScale(d.labourTime))
//             .y(d => yScale(d.dilatation))

   setCustomLineData() {
       let labourTime = [0,1,2,3,5,7,9]
       let dilatation = [0,2,4,6,6,9,10]
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

    handleCustomChange = (e) => {
       
        
        this.setState({...this.state, [e.target.name]: e.target.value })

    }

    handleSubmitExamination = (e) => {
        e.preventDefault()
        this.setState({...this.state.customData, customData: {  labourTime: this.state.custH, dilatation: this.state.custD}})
       
    }

    calcBishopScore = () => {
    }

  
    componentWillMount(){
       
    }

    

    componentDidMount() {
   
      this.mountChart() 
      console.log("=======" + this.state.customData)
    }

    // componentDidUpdate() {
    //    this.mountChart()
    // }

    mountChart() {

        const drawingBoardWidth = this.width;
        const drawingBoardHeight = this.height;
        const mains = d3.select(".main-page")
        const initialGraphData = this.setInitialGraphData();
        const alertDataSet = this.setAlertLineData();
        const actionDataSet = this.setActionLineData();
        const customDataSet = this.setCustomLineData()

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



// Y-AXIS ------------------------------------------------------------------------------- 
        const yAxisGroup = drawingBoard.append("g").call(d3.axisLeft(yScale).ticks(10).tickSize(-550));
        yAxisGroup.append("text")
        .attr("y", 20)
        .attr("x", this.height/2)
        .attr("transform", "rotate(90)")
        .text("Cervical Dilatation")
        .attr("class", "y-axis-group-text")

        .attr("fill", "black")
        

// Y-AXIS ------------------------------------------------------------------------------- 


        const xAxisTickFormater = num => {
            
            let refined = d3.format("")(num).replace(/^\d+\.\d/, "")

            // let exp = /^1\d$/;
            // if (!exp.test(refined)){
            //     return "00:" + refined + "0"
            // }else{
                
            // }
            // refined = refined.replace(/^00\:$/, "")


            // console.log(exp.test(refined) )
            // // console.log(typeof exp)

            

            return refined
        }
            // let x = +d3.format("")(num)
            // // x = Math.round(x)

            // console.log(typeof x)
            // return x

            

            

        
            

        const xAxis = d3.axisBottom(xScale)
            .tickFormat(xAxisTickFormater)
            .ticks(24)
            .tickSize(-260)

       


// X-AXIS----------------------------------------------------------------------
        const xAxisGroup = drawingBoard.append("g")
            .attr("transform", `translate(0, ${this.height})`)
            .call(xAxis); 

        xAxisGroup.append("text")
            .attr("y", 20)
            .attr("x", this.width/2)
            .text("Hours")

            .attr("fill", "black")

// X-AXIS----------------------------------------------------------------------

        const drawAlertLine = d3.line()
            .x(d => xScale(d.labourTime))
            .y(d => yScale(d.dilatation))

        drawingBoard.append("path")
            .attr("class", "line")
            .attr("id", "alert-line")
            .datum(alertDataSet)
            .attr("d", drawAlertLine)

        const drawActionLine = d3.line()
            .x(d => xScale(d.labourTime))
            .y(d => yScale(d.dilatation))

        drawingBoard.append("path")
            .attr("class", "action-line")
            .datum(actionDataSet)
            .attr("d", drawActionLine)

        const drawCustomLine = d3.line()
            .x(d => xScale(d.labourTime))
            .y(d => yScale(d.dilatation))

        drawingBoard.append("path")
        .attr("class", "custom-line")
        .datum(customDataSet)
        .attr("d", drawCustomLine)
        .attr("id", "custom-line")

        drawingBoard.append("text")
            .attr("y", 1)
            .attr("x", 150)
            .text(`hospital Number: Time of Delivery:`)


       
       
        
            
        

        



        function responsivefy(drawingBoard) {
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

    handleClickOpen = () => {
        this.setState({setOpen: true});
      };

    handleClose = () => {
        this.setState({setOpen: false});
        
      };

    handleChange = event => {
        this.setState(Number(event.target.value) || '');
      };


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
                            <CustomDataSet  custD={this.state.custD}
                                            custH={this.state.custH}
                                            custDH= {this.state.customData}

                                            mountChart={this.mountChart} 
                                            handleCustChange= {this.handleCustomChange}
                                            handleSubmitE = {this.handleSubmitExamination}
                            />
                           
                                                       
                            
                            
                    </div>
                    
                    </div>
                    <div className="right-sidebar">
                        <h2>Right Side Bar</h2>
                    </div>
                    <div className="display-zone"><h2>display zone</h2> <span id="display-toggle"><button>edit</button></span></div>
                    <div className="footer"><h2>footer</h2></div>
                </div>   

               
            </div>
        )
    }
}


export default Partograph;
