import React, { Component } from 'react';
import {drawTemplate} from "../testData/partographTemplate"
import { Card, CardBody, CardHeader } from 'reactstrap';

class Visualize extends Component {

    componentDidMount () {
        drawTemplate(this.props.customDataSet)

    }



    render() {
        return (
            <React.Fragment>
                <Card>
                    <CardHeader></CardHeader>
                    <CardBody>
                    <div className="main-graph">
                     </div>
                        
                    </CardBody>

                    
                </Card>
                
                
            </React.Fragment>
        )
    }
}

export default Visualize;
