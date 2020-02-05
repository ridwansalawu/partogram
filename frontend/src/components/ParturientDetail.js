import React from 'react';
import {Card, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb} from "reactstrap";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import "../index.css";






    function RenderParturient ({parturient}){
        
        return(
            
            <div className="col-12 col-md m-1">
            <Card>
                <CardBody className="bg-light">
                    <CardTitle className="text-danger font-weight-bolder font-italic ">{parturient.firstName + " " + parturient.lastName}</CardTitle>
                    <CardText className="card-body">Hospital ID: {parturient.medId}</CardText>
                    <CardText className="card-body">Middle Name: {parturient.middleName}</CardText>
                    <CardText className="card-body">Hospital ID: {parturient.medId}</CardText>
                    <CardText>Date of Birth:  {parturient.dob}  </CardText>
                    <CardText>Last Delivery  </CardText>
                    <CardText >Last Menstrual Period: {parturient.lmp} </CardText>
                    <CardText >Significant Intrapartum Events: </CardText>
                </CardBody>
            </Card>
            </div>
        )

    }


    const ParturientDetail = (props) => {
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
                    <h3>{props.parturient.firstName}</h3>
                    <hr/>

                </div>
            </div>
                <div className="row">
                        <RenderParturient parturient={props.parturient} />

                </div>
     
            </div>
        )
        else
            return(
                <div></div>
            );
        


    }
   
        
    


export default ParturientDetail;
