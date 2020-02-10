import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import "../index.css";
import LabourWard from "./LabourWard";
import Visualize from "./Visualize";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Axios from "axios";
import { Alert } from "react-bootstrap";
import {Redirect } from "react-router-dom"
import Join from "./Join"


import { baseUrl } from "../testData/baseUrl";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button
} from "react-bootstrap";
import Bishop from "../forms/Bishop";
import Chat from "./Chat";

class ParturientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      customDataSet: [],
      showDelete:false,
      room: "",
      user: ""
     
    };
    
   
  }

  componentDidMount() {

   
    console.log(this.props)
    if (this.props.parturient) {
        Axios(baseUrl + `parturients/cervicogram/${this.props.parturient._id}`)
        .then( response => {
            this.setState({ customDataSet: response.data})
           
        })
    }
    if(this.state.room) {
      console.log(this.state.room)
    }else console.log("yet to arrive")
  }

  




handleAssign =()=> {

  this.setState({room: `${this.props.parturient.firstName.toUpperCase()}, ${this.props.parturient.lastName}/${this.props.parturient.medId}`
                        })
  console.log(this.state.room)

}



  handleShow = () => {
    this.setState({
      show: true
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleUpdate = () => {
      console.log("updated")
  }

  handleDelete = async () => {
      Axios.delete(baseUrl + `parturients/${this.props.parturient._id}`)
        .then(response => {
        })
        await this.refresh()
  }

  refresh = (e) => {
   window.location.reload()
   this.handleShow()
   e.preventDefault()
  };


  render() {

    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMsg) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMsg}</h4>
          </div>
        </div>
      );
    } else if (this.props.parturient != null)
      return (
        <Container>
          <Row>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/parturients">Parturients</Link>{" "}
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {this.props.parturient.firstName}
              </BreadcrumbItem>
            </Breadcrumb>
          </Row>

          <Row>
            <h3 className="text-capitalize  col-md-4 ">
              {this.props.parturient.firstName +
                "," +
                " " +
                this.props.parturient.lastName}
            </h3>
          </Row>
          <Row>
                <Col md={1}><Button variant="primary" onClick={this.handleUpdate}>Update</Button></Col>
                <Col>
                <Alert show={this.state.showDelete} onClose={()=>this.setState({showDelete:false})} variant="warning" dismissible>
                  <Alert.Heading>Do you really want to remove {this.props.parturient.firstName} ?</Alert.Heading>
                  <div className="d-flex justify-content-end">
                  <Button onClick={this.handleDelete}  variant="danger">Delete</Button>{" "}
                  </div>
                </Alert>
                {!this.state.showDelete && <Button onClick={() => this.setState({showDelete:true})} variant="primary">Delete</Button>}  
                </Col>
          </Row>

          <Row className="details-section">
            <Col>
              <Card>
                <Card.Header className="text-danger font-weight-bolder font-italic ">
                  {this.props.parturient.firstName +
                    " " +
                    this.props.parturient.lastName}
                </Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Hospital ID: {this.props.parturient.medId}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Middle Name: {this.props.parturient.middleName}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Hospital ID: {this.props.parturient.medId}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Date of Birth: {this.props.parturient.dob}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>Last Delivery: </ListGroup.Item>
                  <ListGroup.Item>
                    Last Menstrual Period: {this.props.parturient.lmp}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item>Cervicogram: </ListGroup.Item>
                  <ListGroup.Item>Bishop Scores: </ListGroup.Item>
                  <ListGroup.Item>Fetal Heart Rate: </ListGroup.Item>
                  <ListGroup.Item>Maternal Heart Rate: </ListGroup.Item>
                  <ListGroup.Item>Contractions: </ListGroup.Item>
                  <ListGroup.Item>
                    Significant Intrapartum Events:{" "}
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Header className="text-danger font-weight-bolder font-italic ">
                Management discussion: {this.state.room} 
                </Card.Header>
                <Card.Body>
                  <Card.Text>
                    please offer some suggestion with regards to this patient's
                    management
                  </Card.Text>
                  

                 
                </Card.Body>
                <InputGroup>
                  <FormControl as="textarea"></FormControl>
                  <Button variant="primary" size="lg" block>
                    {" "}
                    Post{" "}
                  </Button>
                </InputGroup>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col>
              <Button
                variant="primary"
                size="lg"
                block
                onClick={this.handleShow}
              >
                {" "}
                Transfer to Labour Ward{" "}
              </Button>
            </Col>
            <Col>
              <button onClick={this.handleAssign}>
                Start Conversation
              </button>
            </Col>
          </Row>

          <Row>
            {this.state.show ? (
              <Col>
                <Visualize
                  parturient={this.props.parturient}
                  customDataSet={this.state.customDataSet}
                  refresh={this.refresh}
                />

                <Row>
                  <Col>
                    {" "}
                    <LabourWard parturient={this.props.parturient} />
                  </Col>
                  <Col>
                    {" "}
                    <Bishop />
                  </Col>
                  <Col>
                    <Button>Refer</Button>
                  </Col>
                  <Col>
                    <Button onClick={this.refresh}>Refresh</Button>
                  </Col>
                </Row>
              </Col>
            ) : null}
          </Row>
        </Container>
      );
    else return <div></div>;
  }
}

export default ParturientDetail;


