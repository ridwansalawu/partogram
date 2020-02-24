import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import Loading from "./Loading";
import "../index.css";
import LabourWard from "./LabourWard";
import Visualize from "./Visualize";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Axios from "axios";
import { Alert, Carousel } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./parturients.css"
import {saveAs} from "file-saver";
import "./parturients.css";


import {
  Container,
  Row,
  Col,
  Button
} from "react-bootstrap";
import Bishop from "../forms/Bishop";
import Chat from "./Chat/Chat";
import MaternalHeartViz from "./MaternalHeartViz";
import VizFetal from "./VizFetal";
import VizMatBp from "./VizMatBp";

class ParturientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {

      show: false,
      customDataSet: [],
      showDelete: false,
      room: "",
      name: "",
      fullPage: false
    };
  }

  componentDidMount() {
    if (this.props.parturient) {
      Axios(
       `parturients/cervicogram/${this.props.parturient._id}`
      ).then(response => {
        this.setState({ customDataSet: response.data });
        this.setState({ show: true });
      });
    }
  }

  componentDidUpdate() {

  }
 
  handleAssign = () => {
    this.setState({
      room: `${this.props.parturient.firstName}`,
      user: this.props.auth.user.username
    });
  };
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
    console.log("updated");
  };

  handleDelete = () => {
    Axios.delete(`parturients/${this.props.parturient._id}`).then(
      this.props.history.push(`/parturients`)
    );
  };

  handleToParturient = () => {
    this.setState({ show: false });
  };

  handleClearPartograph = () => {
    const token = `Bearer ${localStorage.getItem('token')}`;
    Axios.put(
      `parturients/clearcervicogram/${this.props.parturient._id}`, {}, {headers: {'Authorzation': token }}
    ).then(response => {
      console.log(response)
      let res = response.data.medId;
     this.props.history.push(`/parturients/${res}`)
      
    });
  };
  handleDownload = () => {
    Axios.post(`/downloadPartographPdf`)
  }

  backToDetails =()=> {
    this.setState({ fullPage: false })
  }

  handleFullPage = () => {
    this.setState({ fullPage: true })
  }

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
    } 
    else if (this.state.fullPage) {
      return (
        <div>
          <Button onClick={this.backToDetails}>Back</Button>
          <Visualize 
                parturient={this.props.parturient}
                customDataSet={this.state.customDataSet}
          />
          <MaternalHeartViz 
                parturient={this.props.parturient}
                customDataSet={this.state.customDataSet}
                />
          <VizFetal 
                parturient={this.props.parturient}
                customDataSet={this.state.customDataSet}
                />
          <VizMatBp 
                parturient={this.props.parturient}
                customDataSet={this.state.customDataSet}
                />
           <Button onClick={this.backToDetails}>Back</Button>
        </div>
      )
    } 
    
    
    
    
    else if (this.state.show) {
      return (
        <Col >
          <Carousel  controls={true} fade={true} interval={null} nextLabel>
          
          
          <Carousel.Item>
              <MaternalHeartViz 
                parturient={this.props.parturient}
                customDataSet={this.state.customDataSet}
                refresh={this.refresh}
              />
            </Carousel.Item>


            <Carousel.Item className="comp-container-graph">
              <Visualize
                parturient={this.props.parturient}
                customDataSet={this.state.customDataSet}
                refresh={this.refresh}
              />
            </Carousel.Item>
            <Carousel.Item>
              <VizFetal
                parturient={this.props.parturient}
                customDataSet={this.state.customDataSet}
                refresh={this.refresh}
              />
            </Carousel.Item>
            
           
          </Carousel>
          
          <Row>
            <Col>
              <LabourWard
                parturient={this.props.parturient}
                refresh={this.refresh}
              />
            </Col>
            <Col>
              <Bishop />
            </Col>

            <Col>
              <Button variant="dark" size="sm">
                Download
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                size="sm"
                onClick={this.handleClearPartograph}
              >
                Clear
              </Button>
            </Col>
            <Col>
              <Button variant="dark" size="sm" onClick={this.handleFullPage }>
                All Charts
              </Button>
            </Col>
            <Col>
              <Button
                variant="dark"
                size="sm"
                onClick={this.handleToParturient}
              >
                back
              </Button>
            </Col>
          </Row>
        </Col>
      );
    }

    //  ========================================================================================================================
    else if (this.props.parturient != null)
      return (
        <Container className="comp-container">
          <Row>
            <Col>
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/parturients">Parturients</Link>{" "}
              </BreadcrumbItem>
              <BreadcrumbItem active>
                {this.props.parturient.firstName}
              </BreadcrumbItem>
            </Breadcrumb>
            </Col>
          </Row>

          <Row>
            <Col>
              <h4 className="text-capitalize title-text">
                {this.props.parturient.firstName + "," +" " + this.props.parturient.lastName}
              </h4>
            </Col>
            <Col>
            <Col>
              {" "}
              <Link
                to={{
                  pathname: `/parturients/${this.props.parturient._id}/newParturient`,
                  state: {
                    id: this.props.parturient._id
                  }
                }}
              >
                <Button className="button-update">Update</Button>
              </Link>
            </Col>

            <Col>
              <Alert
                show={this.state.showDelete}
                onClose={() => this.setState({ showDelete: false })}
                variant="warning"
                dismissible
              >
                <Alert.Heading>
                  Do you really want to remove {this.props.parturient.firstName}{" "}
                  ?
                </Alert.Heading>
                <div className="d-flex justify-content-end">
                  <Button onClick={this.handleDelete} variant="danger">
                    Delete
                  </Button>{" "}
                </div>
              </Alert>
              {!this.state.showDelete && (
                <Button
                  onClick={() => this.setState({ showDelete: true })}
                  className="button-update"
                >
                  Delete
                </Button>
              )}
            </Col>

            </Col>
            
            
          </Row>

          <Row className="">
            <Col>
              <Card>
                <Card.Header className="text-danger font-weight-bolder font-italic ">
                  {this.props.parturient.firstName +
                    " " +
                    this.props.parturient.lastName}
                </Card.Header>
                <ListGroup variant="flush" className="title-text">
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
             
                  <Link
                    onClick={e =>
                      !this.state.name || !this.state.room
                        ? e.preventDefault()
                        : null
                    }
                    to={`/
                    
                    ?name=${this.state.name}&room=${this.state.room}`}
                  >
                    Management discussion: {this.state.room}
                  </Link>
               
{/* -------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------                 */}             
                    {this.state.user && this.state.room ? (
                      <Chat name={this.state.user} room={this.state.room} />
                    ) : null}
                <button onClick={this.handleAssign}>Start Conversation</button>
           
            </Col>
          </Row>


          <Row>
            <Col>
              <Button
                className="button-update"
                size="lg"
                block
                onClick={this.handleShow}
              >
                {" "}
                Transfer to Labour Ward{" "}
              </Button>
            </Col>
          </Row>

        
        </Container>
      );





    else return <div></div>;
  }
}

export default withRouter(ParturientDetail);
