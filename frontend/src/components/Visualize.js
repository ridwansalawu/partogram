import React, { Component } from 'react';
import {drawTemplate} from "../testData/partographTemplate"
import { Card, Col } from 'react-bootstrap';
// import { Card, CardBody, CardHeader } from 'reactstrap';
import Axios from "axios";
import{ baseUrl} from "../testData/baseUrl"

class Visualize extends Component {

    componentDidMount () {

        Axios(baseUrl + `parturients/cervicogram/${this.props.parturient._id}`)
        .then( response => {
            this.setState({ customDataSet: response.data})
            console.log(this.state.customDataSet)
        })

       
        drawTemplate(this.props.customDataSet)
    }



    render() {
        return (
            <React.Fragment>
                <Card bg="light" style={{ }}>
                    <Card.Header>Name:{this.props.parturient.firstName.toUpperCase()}, {this.props.parturient.lastName} {""} {""} Medical ID:{this.props.parturient.medId} </Card.Header>
                    <Card.Body>
                        <div className="main-graph">
                        </div>
                    </Card.Body>
                </Card>   
            </React.Fragment>
        )
    }
}

export default Visualize;







// import React, { Component } from 'react';
// import {drawTemplate} from "../testData/partographTemplate"
// import { Card, CardBody, CardHeader } from 'reactstrap';

// class Visualize extends Component {

//     componentDidMount () {
//         this.props.refresh()
//         drawTemplate(this.props.customDataSet)

//     }



//     render() {
//         return (
//             <React.Fragment>
//                 <Card>
//                     <CardHeader></CardHeader>
//                     <CardBody>
//                     <div className="main-graph">
//                      </div>
                        
//                     </CardBody>

                    
//                 </Card>
                
                
//             </React.Fragment>
//         )
//     }
// }

// export default Visualize;
