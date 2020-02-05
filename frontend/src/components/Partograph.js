import React, { Component } from 'react';


export default class Partograph extends Component {

    componentDidMount() {
        this.props.drawInitialPartograph()
    
    }
    render() {
        return (
            <div className="container">
                <h1> here is the graph section </h1>  
                <div className="main-page"></div>   
            </div>
        )
    }
}
