import React from 'react';
import { Card,  CardText, CardTitle, Breadcrumb, BreadcrumbItem, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "./Loading"
// import {col, Row, Button} from "reactstrap"
// import {Control, LocalForm, Errors } from 'react-redux-form';
import "../index.css"



const RenderParturients = ({parturient}) => {
    return(
        <Card >
            <Link to={`/parturients/${parturient.medId}`}>
                <CardBody className="bg-light">
                    <CardTitle className="text-bolder"> {parturient.firstName + " " + parturient.lastName}</CardTitle>
                    <CardText className="card-body2">Hospital Id:{parturient.medId} </CardText>
                </CardBody>
            </Link>       
        </Card>

    )
}

const Parturients = (props) => {
    
    const parturients = props.parturients.parturients.map((parturient, index) => {
            
        return (
            <div  key={index} className="col-12 col-md-10 m-1"> 
                <RenderParturients parturient= {parturient} />
            </div>
        );
    });
   if (props.parturients.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.parturients.errMsg) {
        return (
            <div className="container">
                <div className="row">
                  <h4>{props.parturients.errMsg}</h4>
                </div>
            </div>
        )
        
    }
    else

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link>  </BreadcrumbItem>
                        <BreadcrumbItem active>Parturients</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <div>
                        <input type="text" placeholder="Medical ID"/>
                        <button>search</button>
                    </div>
                        <h3>Parturients</h3>
                        <hr/>

                    </div>
                </div>
                <div className="row">
                        {parturients}
                      
                </div>
                
            
            </div>
        )

}
    
    
   

       
       

       
    



export default Parturients;
