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

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Row,
  Col, CardHeader, CardTitle
} from "reactstrap";
import NotificationAlert from "react-notification-alert";

class Icons extends React.Component {
np
  render() {
    return (
        <>
          <div className="content">


                <Card style={{width: '75rem'}}>

                  <br/><br/><br/>

                  <CardBody>

                    <br/><br/><br/><br/><br/><br/>
                    <Row>
                      <Col>
                        <a href="http://localhost:3000/admin/notifications">
                          <Button variant="primary" size="lg" block color="info" className="animation-on-hover, btn-simple" >Add Patient</Button>
                        </a>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row>
                      <Col>
                        <a href="http://localhost:3000/admin/tables">
                        <Button variant="primary" size="lg" block color="info" className="animation-on-hover, btn-simple" >View Patients</Button>
                        </a>
                        </Col>
                    </Row>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                  </CardBody>

                </Card>

          </div>
        </>
    );
  }
}

export default Icons;
