/*!

=========================================================
* Black Dashboard React v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";

//import TableList from "./TableList";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col, Input, FormGroup, CardFooter,
} from "reactstrap";

class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id:'',
      name: '',
      phone: '',
      email:'',
      gender:'',
      dob: '',
      address: '',
      marital_status:'',
      gaurdian_name:'',
      gaurdian_phone: '',
      bloodgroup: '',
      illnesses:'',
      medications: '',
      allergy: '',
      physician_name: '',
      notes:'',
      last_physical_date: ''

    }

    this.changeId = this.changeId.bind(this);
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changePhoneHandler = this.changePhoneHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeGenderHandler = this.changeGenderHandler.bind(this);
    this.changeDobHandler = this.changeDobHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.changeMstatusHandler = this.changeMstatusHandler.bind(this);
    this.changeGnameHandler = this.changeGnameHandler.bind(this);
    this.changeGphoneHandler = this.changeGphoneHandler.bind(this);
    this.changeBloodHandler = this.changeBloodHandler.bind(this);
    this.changeIllHandler = this.changeIllHandler.bind(this);
    this.changeMedHandler = this.changeMedHandler.bind(this);
    this.changeAllergyHandler = this.changeAllergyHandler.bind(this);
    this.changePhysicianHandler = this.changePhysicianHandler.bind(this);
    this.changeNoteHandler = this.changeNoteHandler.bind(this);
    this.changeLpdateHandler = this.changeLpdateHandler.bind(this);
    this.createPatient = this.createPatient.bind(this);

  }

  createPatient= (a) => {
    a.preventDefault();
    let patient = {id: this.state.id,name: this.state.name,phone: this.state.phone,email: this.state.email,gender: this.state.gender,dob: this.state.dob,address: this.state.address,marital_status: this.state.marital_status,guardian_name: this.state.guardian_name,guardian_phone: this.state.guardian_phone,bloodgroup:this.state.bloodgroup,illnesses: this.state.illnesses,medications: this.state.medications,allergy: this.state.allergy,physician_name: this.state.physician_name,notes: this.state.notes,last_physical_date: this.state.last_physical_date };
    console.log('patient => ' + JSON.stringify(patient));

    patient.createPatient.then(res =>{
      this.state.history.push("/TableList");
    });
  }

  changeId= (event) => {
    this.setState({id :event.target.value});
  }

  changeNameHandler= (event) => {
    this.setState({name :event.target.value});
  }

  changePhoneHandler= (event) => {
    this.setState({phone :event.target.value});
  }

  changeEmailHandler= (event) => {
    this.setState({email : event.target.value});
  }

  changeGenderHandler= (event) => {
    this.setState({gender : event.target.value});
  }
  changeDobHandler= (event) => {
    this.setState({dob :event.target.value});
  }

  changeAddressHandler= (event) => {
    this.setState({address :event.target.value});
  }

  changeMstatusHandler= (event) => {
    this.setState({marital_status :event.target.value});
  }

  changeGnameHandler= (event) => {
    this.setState({guardian_name : event.target.value});
  }

  changeGphoneHandler= (event) => {
    this.setState({guardian_phone : event.target.value});
  }
  changeBloodHandler= (event) => {
    this.setState({bloodgroup :event.target.value});
  }

  changeIllHandler= (event) => {
    this.setState({illnesses :event.target.value});
  }

  changeMedHandler= (event) => {
    this.setState({medications :event.target.value});
  }

  changeAllergyHandler= (event) => {
    this.setState({allergy : event.target.value});
  }

  changePhysicianHandler= (event) => {
    this.setState({physician_name : event.target.value});
  }

  changeNoteHandler= (event) => {
    this.setState({notes : event.target.value});
  }

  changeLpdateHandler= (event) => {
    this.setState({last_physical_date : event.target.value});
  }

  render() {
    return (
        <>
          <div className="content">
            <div className="react-notification-alert-container">
              <NotificationAlert ref="notificationAlert" />
            </div>
            <Row>
              <Col md="6">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h3">Patient Information</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <form>
                      <label>Patient ID</label>
                      <Input type="text" placeholder="Patient ID" value={this.state.id}
                             onChange={this.changeId}/>

                      <label>Patient's Name</label>
                      <Input type="text" placeholder="Patient's Name" value={this.state.name}
                             onChange={this.changeNameHandler}/>

                      <label>Contact No</label>
                      <Input type="tel" placeholder="Contact No" pattern="[0-9]{3}-[0-9]{7}" value={this.state.phone}
                             onChange={this.changePhoneHandler}/>

                      <label>Email Address</label>
                      <Input type="email" placeholder="Email Address" value={this.state.email}
                             onChange={this.changeEmailHandler}/>

                      <Row>
                        <Col className="pr-md-1" md="2">
                          <label>Gender</label>
                        </Col>
                        <Col className="pr-md-1" md="2">

                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios11" value={this.state.gender}
                                   onChange={this.changeGenderHandler} defaultChecked/>
                            Male
                            <span className="form-check-sign"/>


                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="2">
                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios12" value={this.state.gender}
                                   onChange={this.changeGenderHandler}/>
                            Female
                            <span className="form-check-sign"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <br/>

                      <label>Date of Birth</label>
                      <Input type="text"  id="dob" placeholder="DD/MM/YY" value={this.state.dob}
                             onChange={this.changeDobHandler}/>

                      <label>Address</label>
                      <Input type="text"  id="inputAddress" placeholder="Address" value={this.state.address}
                             onChange={this.changeAddressHandler}/>

                      <Row>
                        <Col className="pr-md-1" md="3">
                          <label>Marital Status</label>
                        </Col>
                        <Col className="pr-md-1" md="2">

                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios11" value={this.state.marital_status}
                                   onChange={this.changeMstatusHandler} defaultChecked/>
                            Married
                            <span className="form-check-sign"/>

                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="2">
                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios12" value={this.state.marital_status}
                                   onChange={this.changeMstatusHandler}/>
                            Unmarried
                            <span className="form-check-sign"/>
                          </FormGroup>

                        </Col>
                        <Col className="pr-md-1" md="2">
                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios12" value={this.state.marital_status}
                                   onChange={this.changeMstatusHandler}/>
                            Other
                            <span className="form-check-sign"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <br/>

                      <label>Guardian's Name</label>
                      <Input type="text" placeholder="Guardian's Name" value={this.state.guardian_name}
                             onChange={this.changeGnameHandler}/>

                      <label>Guardian's Contact Number</label>
                      <Input type="text" placeholder="Guardian's Contact No" value={this.state.guardian_phone}
                             onChange={this.changeGphoneHandler}/>

                    </form>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h3">Medical Information</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <form>
                      <label>Blood Group</label>
                      <Input type="text" placeholder="Blood Group" value={this.state.bloodgroup}
                             onChange={this.changeBloodHandler}/>

                      <label>Illnesses</label>
                      <Input type="textarea" placeholder="Illnesses" value={this.state.illnesses}
                             onChange={this.changeIllHandler}/>

                      <label>Medications and Treatments</label>
                      <Input type="textarea" placeholder="Med & Treats" value={this.state.medications}
                             onChange={this.changeMedHandler}/>

                      <label>Allergies, If any</label>
                      <Input type="text" placeholder="Allergies" value={this.state.allergy}
                             onChange={this.changeAllergyHandler}/>

                      <label>Name of Physician</label>
                      <Input type="text" placeholder="Contact No" value={this.state.physician_name}
                             onChange={this.changePhysicianHandler}/>

                      <label>Physician's Note</label>
                      <Input type="textarea" placeholder="Notes" value={this.state.notes}
                             onChange={this.changeNoteHandler}/>

                      <label>Last Physical Date</label>
                      <Input type="text" placeholder="DD/MM/YY" value={this.state.last_physical_date}
                             onChange={this.changeLpdateHandler}/>
                      <br/>


                    </form>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col className="text-right">
                        <br/>

                        <Button className="btn-fill,animation-on-hover,btn-round" color="info" type="submit" onClick={this.createPatient} >
                          Add Patient
                        </Button>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </div>
        </>
    );
  }
}

export default Notifications;