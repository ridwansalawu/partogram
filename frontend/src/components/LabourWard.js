import React, { Component } from 'react';
import { Button, Row, Col, Label, Modal, ModalHeader, ModalBody, FormGroup, Input, Card, CardBody, CardTitle } from "reactstrap";
import { Control, Form } from 'react-redux-form';
import { Formik } from "formik";

class LabourWard extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isModalOpen: false,
         isModalOpen2: false
      };
    };

    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })

    }
    toggleModal2 = () => {
        this.setState({
            isModalOpen2: !this.state.isModalOpen2
        })

    }
    
    handleSubmit = (values)=> {
        console.log("currennt state is : " + JSON.stringify(values) );
        alert("currennt state is : " + JSON.stringify(values));

        // this.props.resetFeedbackForm();
    }
    // handleSubmit2 = (values)=> {
    //     this.toggleModal2();
    //     this.props.postUser(values.username, values.password)
    //     console.log("currennt state is : " + JSON.stringify(values) );
    //     alert("currennt state is : " + JSON.stringify(values));


    //     // this.props.resetFeedbackForm();
    // }
    handleSubmit2 = (values)=> {
        this.toggleModal2();
        this.props.signupUser(values)
        console.log("currennt state is : " + JSON.stringify(values) );
        alert("currennt state is : " + JSON.stringify(values));


        // this.props.resetFeedbackForm();
    }

    handleSubmit3 = (e) => {
        e.preventDefault()


    }

  


render() {
    return (
        <div className="container">
            Welcome to the labour ward 
            <div className="row row-content">
                <img src="assets/images/cx_3d_delivery.jpg" width="50%" height="50%" alt=""/>

            </div>

            <div className="row row-content">


                <div className="container">
                    <div className="col-12 col-sm-3">
                    <Card>
                        <CardTitle>                   
                            <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg">Bishop's Scoring</span>
                            </Button>

                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                                <ModalHeader toggle={this.toggleModal}>Bishop Score</ModalHeader>
                                <ModalBody>

                                    <form onSubmit={this.handleSubmit3}>
                                        <input type="text"
                                        name="dilatation"
                                        value=""
                                        onChange={this.handleChange3}
                                        
                                        />
                                        <input type="text"
                                        name="effacement"
                                        onChange=""
                                        
                                        />
                                        <button>submit</button>
                                       
                                    </form>

                                    <Formik 
                                        initialValues = {{ dilatation: "", effacement: "", station: "", descent: "", position: "" }}
                                        validate = { values => {
                                            let errors = {};
                                            if (!values.dilatation) {
                                                errors.dilatation = "This is an important entry please👺";
                                            }
                                            if (!values.effacement) {
                                                errors.dilatation = "This is an required entry please👹";
                                            }
                                            return errors;

                                        }}
                                        onSubmit={(values, { setSubmitting }) => {
                                            setTimeout(()=> {
                                                alert(JSON.stringify(values, null, 2))
                                            }, 2000)
                                        }}
                                    >

                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting
                                    })=>(
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="dilatation">Dilatation</label>
                                                <input
                                                 type="dilatation"
                                                 name="dilatation"
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.dilatation}
                                                 />
                                                 {errors.dilatation && touched.dilatation && errors.dilatation}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="effacement">Effacement</label>
                                                <input
                                                 type="effacement"
                                                 name="effacement"
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.effacement}
                                                 />
                                                 {errors.effacement && touched.effacement && errors.effacement}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="descent">Descent</label>
                                                <input
                                                 type="descent"
                                                 name="descent"
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.descent}
                                                 />
                                                 {errors.descent && touched.descent && errors.descent}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="position">Position</label>
                                                <input
                                                 type="position"
                                                 name="position"
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.position}
                                                 />
                                                 {errors.position && touched.position && errors.position}
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="station ">Station </label>
                                                <input
                                                 type="station "
                                                 name="station "
                                                 onChange={handleChange}
                                                 onBlur={handleBlur}
                                                 value={values.station }
                                                 />
                                                 {errors.station  && touched.station  && errors.station }
                                            </div>
                                            <button type="submit" disabled={isSubmitting}>
                                                {isSubmitting ? "Submitting" : "Submit"}

                                            </button>



                                        </form>
                                    )
                                    }






                                    </Formik>



{/*                                     
                                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>

                                        <Row className="form-group">
                                            <Label htmlFor="dilatation" md={2}>Dilatation</Label>
                                            <Col md={10}>
                                            <Control.text model=".dilatation" id="dilatation" name="dilatation"
                                                placeholder="Dilatation"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="effacement" md={2}>Effacement</Label>
                                            <Col md={10}>
                                            <Control.text model=".effacement" id="effacement" name="effacement"
                                                placeholder="Effacement"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="position" md={2}>Position</Label>
                                            <Col md={10}>
                                            <Control.text model=".position" id="position" name="position"
                                                placeholder="Position"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                            <Row className="form-group">
                                            <Label htmlFor="descent" md={2}>Descent</Label>
                                            <Col md={10}>
                                            <Control.text model=".descent" id="descent" name="descent"
                                                placeholder="Descent"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="station" md={2}>Station</Label>
                                            <Col md={10}>
                                            <Control.text model=".station" id="station" name="station"
                                                placeholder="Station"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>

                                        <FormGroup check>
                                        <Label check> 
                                        <Input type="checkbox"  name="remember"
                                        innerRef={(input) => this.remember = input} />
                                        Remember me
                                        </Label>
                                        </FormGroup>
                                        <Button type="submit" value="submit" color="primary">Bishop Score</Button>

                                    </Form> */}
                                </ModalBody>
                            </Modal>

                        </CardTitle> 
                        <div className="col-12 col-sm-3">
                        <CardBody><img src="assets/images/cx_2cm.jpg"  height="100" width="100"    alt=""/> </CardBody> 
                        </div>
                    </Card>
                    </div>
                </div>
            </div>
{/* ================================================================================================================================= */}

            <div className="row row-content">

                


                <div className="container">
                    <div className="col-12 col-sm-3">
                    <Card>
                        <CardTitle>                   
                            <Button outline onClick={this.toggleModal2}>
                                <span className="fa fa-sign-in fa-lg">Sign Up</span>
                            </Button>

                            <Modal isOpen={this.state.isModalOpen2} toggle={this.toggleModal2}>
                                <ModalHeader toggle={this.toggleModal2}>SignUp</ModalHeader>
                                <ModalBody>
                                    <Form model="signUp" onSubmit={(values) => this.handleSubmit2(values)}>

                                        <Row className="form-group">
                                            <Label htmlFor="username" md={2}>Username</Label>
                                            <Col md={10}>
                                            <Control.text model=".username" id="username" name="username"
                                                placeholder="Username"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        <Row className="form-group">
                                            <Label htmlFor="password" md={2}>Password</Label>
                                            <Col md={10}>
                                            <Control.text model=".password" id="password" name="password"
                                                placeholder="Password"
                                                className="form-control"
                                                    />
                                            </Col>
                                        </Row>
                                        

                                        <FormGroup check>
                                        <Label check> 
                                        <Input type="checkbox"  name="remember"
                                        innerRef={(input) => this.remember = input} />
                                        Remember me
                                        </Label>
                                        </FormGroup>
                                        <Button type="submit" value="submit" color="primary">Register</Button>

                                    </Form>
                                </ModalBody>
                            </Modal>

                        </CardTitle> 
                       
                    </Card>
                    </div>
                </div> 
            </div>

        </div>
        )
        }
    }

export default LabourWard;
