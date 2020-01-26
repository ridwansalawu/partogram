import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";
import "../index.css"


const RenderParturients = ({parturient, onClick, image}) => {
    return(
        <Card onClick={() => onClick(parturient.hospId)} className="card-body">
                        
                        <CardImg width="100%" src={image} />  
                        <CardImgOverlay className="ml-5">
                            <CardTitle> {parturient.firstName + parturient.lastName}</CardTitle>
                            <CardText>Date of Birth:  {parturient.dob}  </CardText>
                            <CardText>Last Delivery  </CardText>
                            <CardText >Last Menstrual Period: {parturient.lmp} </CardText>
                            <CardText >Significant Intrapartum Events: </CardText>
                            <CardText className="card-body2">Hospital Id:{parturient.hospId} </CardText>
                        </CardImgOverlay>
                </Card>

    )
}

const Parturients = (props) => {
    const image = "assets/images/cx_3d_delivery.jpg";
    const parturients = props.parturients.map((parturient ) => {
            
        return (
            <div  key={parturient.hospId} className="col-12 col-md-5 m-1"> 
                <RenderParturients parturient= {parturient} 
                                   onClick={props.onClick}
                                   image={image}
                                    />
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                    {parturients}
            </div>
          
        </div>
    )

}
    
    
   

       
       

       
    



export default Parturients;
