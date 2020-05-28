import React, { Component } from "react";
import Loading from "./Loading";
import "../index.css";
import LabourWard from "./LabourWard";
import Visualize from "./Visualize";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Axios from "axios";
import { Alert, Carousel } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./parturients.css";
import { saveAs } from "file-saver";
import "./parturients.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Bishop from "../forms/Bishop";
import Chat from "./Chat/Chat";
import MaternalHeartViz from "./MaternalHeartViz";
import VizFetal from "./VizFetal";
import VizMatBp from "./VizMatBp";
import MaternalHR from "../forms/MaternalHR";

class ParturientDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // show: false,
      customDataSet: [],
      customDataSetMhr: [],
      customDataSetMbps: [],
      customDataSetMbpd: [],
      customDataSetFhr: [],
      showDelete: false,
      room: "",
      name: "",
      fullPage: true,
      examinations: false,
      maternalHR: false
    };
  }

  componentDidMount() {
    if (this.props.parturient) {
      Axios(`parturients/cervicogram/${this.props.parturient._id}`).then(
        response => {
          this.setState({ customDataSet: response.data });
        }
      );

      Axios(`parturients/maternalheartrate/${this.props.parturient._id}`).then(
        response => {
          this.setState({ customDataSetMhr: response.data });
          console.log(response.data);
        }
      );
      Axios(`parturients/maternalbpsystolic/${this.props.parturient._id}`).then(
        response => {
          this.setState({ customDataSetMbps: response.data });
          console.log(response.data);
        }
      );
      Axios(
        `parturients/maternalbpdiastolic/${this.props.parturient._id}`
      ).then(response => {
        this.setState({ customDataSetMbpd: response.data });
        console.log(response.data);
      });
      Axios(`parturients/fetalheartrate/${this.props.parturient._id}`).then(
        response => {
          this.setState({ customDataSetFhr: response.data });
          console.log(response.data);
        }
      );
    }
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
    const token = `Bearer ${localStorage.getItem("token")}`;
    Axios.put(
      `parturients/clearcervicogram/${this.props.parturient._id}`,
      {},
      { headers: { Authorzation: token } }
    ).then(response => {
      console.log(response);
      let res = response.data.medId;
      this.props.history.push(`/parturients/${res}`);
    });
  };

  handleClearMatHr = () => {
    const token = `Bearer ${localStorage.getItem("token")}`;
    Axios.put(
      `parturients/clearmaternalheartrate/${this.props.parturient._id}`,
      {},
      { headers: { Authorzation: token } }
    ).then(response => {
      console.log(response);
      let res = response.data.medId;
      this.props.history.push(`/parturients/${res}`);
    });
  };

  handleDownload = () => {
    Axios.post(`/downloadPartographPdf`);
  };

  backToDetails = () => {
    this.setState({ fullPage: false });
  };

  handleFullPage = () => {
    this.setState({ fullPage: true });
  };

  activateExaminations = () => {
    this.setState({ examinations: true });
  };
  activateMaternalHR = () => {
    this.setState({ maternalHR: true });
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
    } else if (this.props.parturient != null) {
      return (
        <Container>
          <Col xs={12} className="fixed-buttons">
            <Row>
              <Alert
                show={this.state.showDelete}
                onClose={() => this.setState({ showDelete: false })}
                variant="warning"
                dismissible
              >
                <Alert.Heading>delete</Alert.Heading>
                <div className="d-flex justify-content-start">
                  <Button onClick={this.handleDelete} variant="danger">
                    Y
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
            </Row>
            <Row>
              <Link
                to={{
                  pathname: `/parturients/${this.props.parturient._id}/newParturient`,
                  state: {
                    id: this.props.parturient._id
                  }
                }}
              >
                <Button className="button-update"> Update</Button>
              </Link>
            </Row>

            <Row>
              <Button className="button-update" onClick={this.handleAssign}>
                Join
              </Button>
            </Row>
            <Row>
              <Button
                onClick={this.activateExaminations}
                className="button-update"
              >
                VE
              </Button>
            </Row>
            <Row>
              <Button className="button-update" onClick={this.backToDetails}>
                Back
              </Button>
            </Row>
            <Row>
              <Button className="button-update" onClick={this.backToDetails}>
                Bishop
              </Button>
            </Row>
            <Row>
              <Button
                className="button-update"
                onClick={this.activateMaternalHR}
              >
                Maternal HR
              </Button>
            </Row>
            <Row>
              <Button className="button-update" onClick={this.backToDetails}>
                Maternal BP
              </Button>
            </Row>
            <Row>
              <Button className="button-update" onClick={this.backToDetails}>
                Fetal HR
              </Button>
            </Row>
            <Row>
              <Button className="button-update" onClick={this.backToDetails}>
                Contractions
              </Button>
            </Row>
            <Row>
              <Button
                className="button-update"
                onClick={this.handleClearPartograph}
              >
                Clear
              </Button>
            </Row>
          </Col>
          <Col xs={{ span: 10, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <Row>
              <Col>
                <Breadcrumb>
                  <Breadcrumb.Item>
                    <Link to="/parturients">Parturients</Link>{" "}
                  </Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {this.props.parturient.firstName}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
            </Row>

            <Row>
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

                {this.state.user && this.state.room ? (
                  <Chat name={this.state.user} room={this.state.room} />
                ) : null}
              </Col>
            </Row>

            <Row>
              <Col>
                <Visualize
                  parturient={this.props.parturient}
                  customDataSet={this.state.customDataSet}
                />

                <Row>
                  {this.state.examinations ? (
                    <LabourWard
                      parturient={this.props.parturient}
                      refresh={this.refresh}
                    />
                  ) : null}
                </Row>

                <MaternalHeartViz
                  parturient={this.props.parturient}
                  customDataSetMhr={this.state.customDataSetMhr}
                />

                <Row>
                  {this.state.maternalHR ? (
                    <Row>
                      <Col>
                        <MaternalHR
                          parturient={this.props.parturient}
                          refresh={this.refresh}
                        />
                      </Col>
                      <Col>
                        <Button
                          onClick={this.handleClearMatHr}
                          className="button-update"
                        >
                          Clear
                        </Button>
                      </Col>
                    </Row>
                  ) : null}
                </Row>

                <VizFetal parturient={this.props.parturient} />
                <VizMatBp parturient={this.props.parturient} />
              </Col>
            </Row>
          </Col>
        </Container>
      );
    } else return <div></div>;
  }
}

export default withRouter(ParturientDetail);
