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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col, Input, FormGroup, CardFooter
} from "reactstrap";

class UserProfile extends React.Component {

  render() {
    return (
        <>
          <div className="content">
            <div className="react-notification-alert-container">
              <NotificationAlert ref="notificationAlert" />
            </div>
            <br/>
            <Row>

              <Col className="text-right">
                <a href="http://localhost:3000/admin/tables">
                <Button className="btn-fill,animation-on-hover,btn-round" color="danger" type="submit" >
                  Delete Information
                </Button>
                </a>
              </Col>

            </Row>
            <br/>
            <Row>
              <Col md="6">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h3">Patient Information</CardTitle>

                  </CardHeader>
                  <CardBody>

                    <form>
                      <label>Patient ID</label>
                      <Input type="text" placeholder="Patient ID" default value="P001" disabled/>

                      <label>Patient's Name</label>
                      <Input type="text" placeholder="Patient's Name" default value="Shanika Gamage" />

                      <label>Contact No</label>
                      <Input type="tel" placeholder="Contact No" pattern="[0-9]{3}-[0-9]{7}" default value="0701234567"/>

                      <label>Email Address</label>
                      <Input type="email" placeholder="Email Address" default value="shani@email.com"/>

                      <Row>
                        <Col className="pr-md-1" md="2">
                          <label>Gender</label>
                        </Col>
                        <Col className="pr-md-1" md="2">

                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios11" value="option1" />
                            Male
                            <span className="form-check-sign"/>


                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="2">
                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios12" value="option2" defaultChecked/>
                            Female
                            <span className="form-check-sign"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <br/>

                      <label>Date of Birth</label>
                      <Input type="text"  id="dob" placeholder="DD/MM/YY" default value="1998-11-26"/>

                      <label>Address</label>
                      <Input type="text"  id="inputAddress" placeholder="Address" default value="Temple Road, Kandy"/>

                      <Row>
                        <Col className="pr-md-1" md="3">
                          <label>Marital Status</label>
                        </Col>
                        <Col className="pr-md-1" md="2">

                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios11" value="married" />
                            Married
                            <span className="form-check-sign"/>

                          </FormGroup>
                        </Col>
                        <Col className="pr-md-1" md="2">
                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios12" value="unmarried" defaultChecked/>
                            Unmarried
                            <span className="form-check-sign"/>
                          </FormGroup>

                        </Col>
                        <Col className="pr-md-1" md="2">
                          <FormGroup check inline className="form-check-radio">
                            <Input type="radio" id="Radios12" value="option2" />
                            Other
                            <span className="form-check-sign"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <br/>

                      <label>Guardian's Name</label>
                      <Input type="text" placeholder="Guardian's Name" default value="Saman Gamage"/>

                      <label>Guardian's Contact Number</label>
                      <Input type="text" placeholder="Guardian's Contact No" default value="0781234567"/>

                    </form>
                  </CardBody>
                  <br/>
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
                      <Input type="text" placeholder="Blood Group" default value="O+"/>

                      <label>Illnesses</label>
                      <Input type="textarea" placeholder="Illnesses" default value="Dengue Fever"/>

                      <label>Medications and Treatments</label>
                      <Input type="textarea" placeholder="Med & Treats" default value="acetaminophen & aspirin"/>

                      <label>Allergies, If any</label>
                      <Input type="text" placeholder="Allergies" default value="No"/>

                      <label>Name of Physician</label>
                      <Input type="text" placeholder="Contact No" default value="Dr. Anura Fernando"/>

                      <label>Physician's Note</label>
                      <Input type="textarea" placeholder="Notes" default value="No"/>

                      <label>Last Physical Date</label>
                      <Input type="text" placeholder="DD/MM/YY" default value="2020-07-01"/>
                      <br/><br/>

                    </form>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col className="text-right">
                        <a href="http://localhost:3000/admin/tables">
                        <Button className="btn-fill,animation-on-hover,btn-round" color="info" type="submit">
                          Update Information
                        </Button>
                        </a>
                      </Col>
                    </Row>
                  </CardFooter>

                  <br/>
                </Card>
              </Col>
            </Row>


          </div>
        </>
    );
  }
}


export default UserProfile;