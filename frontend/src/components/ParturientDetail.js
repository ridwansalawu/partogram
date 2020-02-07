import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import "../index.css";
import LabourWard from './LabourWard';
import Visualize from './Visualize';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from 'axios';
import CustomData from '../testData/CustomData';
// import { baseUrl } from '../testData/baseUrl';
   
    
class ParturientDetail extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         show: false,
         customDataSet: []
      };
      const parturient = this.props.parturient;
    };

    componentDidMount() {
        Axios("http://localhost:3001/parturients/cervicogram/5e36cf73e7179a2f01170c41")
        .then(response => {
            this.setState({ customDataSet: response.data})
            console.log(this.state.customDataSet)
        })
       
    }




    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

   

    handleGetCervicogram = (props) => {
        let dataset = this.props.parturient;
         Axios("http://localhost:3001/parturients/cervicogram/5e36cf73e7179a2f01170c41")
             .then(response => {
                 console.log(response.data)
                 
             })
     }


    
    render() {
        if (this.props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if (this.props.errMsg) {
            return (
                <div className="container">
                    <div className="row">
                      <h4>{this.props.errMsg}</h4>
                    </div>
                </div>
            )
            
        }
        else if (this.props.parturient != null)
            return (
            <div className="container">
               
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/parturients">Parturients</Link>  </BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.parturient.firstName}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <div className="container">
                            <h3 className="text-capitalize  col-md-4 ">{this.props.parturient.firstName + "," + " " + this.props.parturient.lastName}</h3>
                            <div className="col-12 col-md m-1">
            <Card style={{ width: '40rem' }}>
                
                    <Card.Header className="text-danger font-weight-bolder font-italic ">{this.props.parturient.firstName + " " + this.props.parturient.lastName}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Hospital ID: {this.props.parturient.medId}</ListGroup.Item>
                        <ListGroup.Item>Middle Name: {this.props.parturient.middleName}</ListGroup.Item>
                        <ListGroup.Item>Hospital ID: {this.props.parturient.medId}</ListGroup.Item>
                        <ListGroup.Item>Date of Birth:  {this.props.parturient.dob}  </ListGroup.Item>
                        <ListGroup.Item>Last Delivery:  </ListGroup.Item>
                        <ListGroup.Item>Last Menstrual Period: {this.props.parturient.lmp} </ListGroup.Item>
                        <ListGroup.Item>Cervicogram: </ListGroup.Item>
                        <ListGroup.Item>Bishop Scores: </ListGroup.Item>
                        <ListGroup.Item>Fetal Heart Rate: </ListGroup.Item>
                        <ListGroup.Item>Maternal Heart Rate: </ListGroup.Item>
                        <ListGroup.Item>Contractions: </ListGroup.Item>
                        <ListGroup.Item>Significant Intrapartum Events: </ListGroup.Item>
                    </ListGroup>
               
            </Card>
            </div>
                        </div>
                        <hr/>

                    </div>
                </div>
                <div className="row">
                        {/* <RenderParturient parturient={this.props.parturient} /> */}
                       
                       
                </div>
                <div>
                    <h3 className=" col-md-4"><button onClick={this.handleShow}>to labour ward</button></h3>
                    <h3 className="  col-md-4"><button>Update Details</button></h3>
                    <button onClick={this.handleGetCervicogram}>get cervicogram</button>
                </div>
                <div>
                    {  
                        this.state.show  
                        ?
                        <div>
                        <LabourWard parturient={this.props.parturient}/> 
                        <Visualize parturient={this.props.parturient}
                                   customDataSet={this.state.customDataSet}/>
                        </div>

                        :
                        null
                    }
                    
                </div>

               
                    
            </div>
            
        )
        else
            return(
                <div></div>
            );
        


        
        
    }
    }
    

export default ParturientDetail;
