import React from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg} from "reactstrap";
import { PARTURIENTS } from "../testData/parturients";






    const RenderParturient = ({parturient}) => {
        return(
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardBody>
                    <CardTitle>{parturient.firstName}</CardTitle>
                    <CardText>{parturient.hospId}</CardText>
                </CardBody>
            </Card>
            </div>
        )

    }


    const RenderSummary = ({summary}) => {
       const parturient = parturient;
        if (summary != null) {
            summary.map(item => {
                return (
                    <div key ={parturient.hospId}>
                       Labour Duration: <li>{item.labourDuration}</li>
                       Baby Status: <li>{item.babyStatus}</li>

                    </div>
                )
            })

        }else {
            return (
                <div>

                </div>
            )
        }

    }
    

    const ParturientDetail = (props) => {
        if (props.parturient != null)
            return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">

                        <RenderParturient parturient={props.parturient}/>
                        <RenderSummary summary={props.parturient.summary}
                                       parturient={props.parturient}/>
                       

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
