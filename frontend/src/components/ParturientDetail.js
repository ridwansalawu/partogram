import React, {useState} from 'react';
import {CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import "../index.css";
import LabourWard from './LabourWard';
import Visualize from './Visualize';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Axios from 'axios';
import { baseUrl } from '../testData/baseUrl';


function RenderParturient ({parturient}){
   
        return(
            
            <div className="col-12 col-md m-1">
            <Card style={{ width: '40rem' }}>
                
                    <Card.Header className="text-danger font-weight-bolder font-italic ">{parturient.firstName + " " + parturient.lastName}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Hospital ID: {parturient.medId}</ListGroup.Item>
                        <ListGroup.Item>Middle Name: {parturient.middleName}</ListGroup.Item>
                        <ListGroup.Item>Hospital ID: {parturient.medId}</ListGroup.Item>
                        <ListGroup.Item>Date of Birth:  {parturient.dob}  </ListGroup.Item>
                        <ListGroup.Item>Last Delivery:  </ListGroup.Item>
                        <ListGroup.Item>Last Menstrual Period: {parturient.lmp} </ListGroup.Item>
                        <ListGroup.Item>Cervicogram: </ListGroup.Item>
                        <ListGroup.Item>Bishop Scores: </ListGroup.Item>
                        <ListGroup.Item>Fetal Heart Rate: </ListGroup.Item>
                        <ListGroup.Item>Maternal Heart Rate: </ListGroup.Item>
                        <ListGroup.Item>Contractions: </ListGroup.Item>
                        <ListGroup.Item>Significant Intrapartum Events: </ListGroup.Item>
                    </ListGroup>
               
            </Card>
            </div>
        )

    }
    const handleGetCervicogram = (props) => {
       let dataset = props.parturient;
        Axios("http://localhost:3001/parturients/cervicogram/5e36cf73e7179a2f01170c41")
            .then(response => {
                console.log(response.data)
                
            })
    }


    const ParturientDetail = (props) => {
        const [show, setShow] = useState(false);
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false)
        if (props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }
        else if (props.errMsg) {
            return (
                <div className="container">
                    <div className="row">
                      <h4>{props.errMsg}</h4>
                    </div>
                </div>
            )
            
        }
        else if (props.parturient != null)
            return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/parturients">Parturients</Link>  </BreadcrumbItem>
                        <BreadcrumbItem active>{props.parturient.firstName}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <div className="container">
                            <h3 className="text-capitalize  col-md-4 ">{props.parturient.firstName + "," + " " + props.parturient.lastName}</h3>
                        </div>
                        <hr/>

                    </div>
                </div>
                <div className="row">
                        <RenderParturient parturient={props.parturient} />
                        <handleGetCervicogram parturient={props.parturient}/>
                </div>
                <div>
                    <h3 className=" col-md-4"><button onClick={handleShow}>to labour ward</button></h3>
                    <h3 className="  col-md-4"><button>Update Details</button></h3>
                    <button onClick={handleGetCervicogram}>get cervicogram</button>
                </div>
                <div>
                    {  
                        show  
                        ?
                        <div>
                        <LabourWard parturient={props.parturient}/> 
                        <Visualize parturient={props.parturient}/>
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
   
        
    


export default ParturientDetail;
