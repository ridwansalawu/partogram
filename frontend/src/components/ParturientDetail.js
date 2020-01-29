import React from 'react';
import {Card, CardBody, CardTitle, CardText, BreadcrumbItem, Breadcrumb} from "reactstrap";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import "../index.css";






    function RenderParturient ({parturient, parturientId, calculateBishop}){
        console.log( "from details" + typeof parturient )
        return(
            
            <div className="col-12 col-md m-1">
            <Card>
                <CardBody>
                    <CardTitle>Title: {parturient}</CardTitle>
                    <CardText className="card-body">Body: {parturient}</CardText>
                </CardBody>
            </Card>
            </div>
        )

    }


    // const RenderSummary = ({summary}) => {
    //    const parturient = parturient;
    //     if (summary != null) {
    //         summary.map(item => {
    //             return (
    //                 <div key ={parturient.hospId}>
    //                    Labour Duration: <li>{item.labourDuration}</li>
    //                    Baby Status: <li>{item.babyStatus}</li>

    //                 </div>
    //             )
    //         })

    //     }else {
    //         return (
    //             <div>

    //             </div>
    //         )
    //     }

    // }
    

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
        else if (props.parturient !== null)
            return (
            <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link>  </BreadcrumbItem>
                    <BreadcrumbItem active>{props.parturient}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Parturients</h3>
                    <hr/>

                </div>
            </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">

                        <RenderParturient parturient={props.parturient} 
                                          calculateBishop= {props.calculateBishop}
                                          parturientId={props.parturientId}/>


                    </div>

                </div>

               

                
            </div>
        )
        else{
            return(
                <div></div>
            )
        }


    }
   
        
    


export default ParturientDetail;
