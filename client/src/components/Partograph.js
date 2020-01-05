import React, { Component } from 'react';
import * as d3 from 'd3';
import './partograph.css'

class Partograph extends Component{

    constructor(props) {
      super(props)
    
      this.state = {
         user:null
      };
    };

    componentDidMount() {
        console.log("i'v mounted")
        let mains = d3.select(".main-page")
        console.log(mains);
    }
    





    render() {
        return (
            <div className="main-content">

                <div className="container">
                    <div className="header"> <h2>header</h2> </div>
                    <div className="navigation">
                        <nav className="nav1">nav1</nav>
                        <nav className="nav2">nav2</nav>
                        <nav className="nav3">nav3</nav>
                        <nav className="nav4">nav4</nav>
                        <nav className="nav5">nav5</nav>
                    </div>
                    <div className="left-sidebar sidebars"> <h2>left side bar</h2> </div>
                    <div className="main-page"><h2>Graph Area</h2></div>
                    <div className="right-sidebar"><h2>Right Side Bar</h2></div>
                    <div className="display-zone"><h2>display zone</h2> <span id="display-toggle"><button>edit</button></span></div>
                    <div className="footer"><h2>footer</h2></div>
                </div>   

   
            </div>
        )
    }
}


export default Partograph;
