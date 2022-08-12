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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col, Button
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Patients' Information</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="table sorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Gender</th>
                        <th className="text-center">Blood Group</th>
                        <th>Email Address</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>P001</td>
                        <td>Shanika Gamage</td>
                        <td>0701234567</td>
                        <td>Female</td>
                        <td className="text-center">O+</td>
                        <td>shani@email.com</td>
                        <td className="text-right">
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="info" size="sm">
                              <i className="fa fa-user"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="success" size="sm">
                              <i className="fa fa-edit"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="danger" size="sm">
                              <i className="fa fa-times" />
                            </Button>{` `}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>P002</td>
                        <td>Dilini Perera</td>
                        <td>0701234567</td>
                        <td>Female</td>
                        <td className="text-center">A+</td>
                        <td>dilini@email.com</td>
                        <td className="text-right">
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="info" size="sm">
                              <i className="fa fa-user"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="success" size="sm">
                              <i className="fa fa-edit"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="danger" size="sm">
                              <i className="fa fa-times" />
                            </Button>{` `}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>P003</td>
                        <td>Gimhani Silva</td>
                        <td>0701234567</td>
                        <td>Female</td>
                        <td className="text-center">B+</td>
                        <td>gim@email.com</td>
                        <td className="text-right">
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="info" size="sm">
                              <i className="fa fa-user"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="success" size="sm">
                              <i className="fa fa-edit"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="danger" size="sm">
                              <i className="fa fa-times" />
                            </Button>{` `}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>P004</td>
                        <td>Anura Perera</td>
                        <td>0701234567</td>
                        <td>Male</td>
                        <td className="text-center">O+</td>
                        <td>anura@email.com</td>
                        <td className="text-right">
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="info" size="sm">
                              <i className="fa fa-user"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="success" size="sm">
                              <i className="fa fa-edit"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="danger" size="sm">
                              <i className="fa fa-times" />
                            </Button>{` `}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>P005</td>
                        <td>Kamal Silva</td>
                        <td>0701234567</td>
                        <td>Male</td>
                        <td className="text-center">O-</td>
                        <td>kamal@email.com</td>
                        <td className="text-right">
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="info" size="sm">
                              <i className="fa fa-user"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="success" size="sm">
                              <i className="fa fa-edit"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="danger" size="sm">
                              <i className="fa fa-times" />
                            </Button>{` `}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>P006</td>
                        <td>Thilini Perera</td>
                        <td>0701234567</td>
                        <td>Female</td>
                        <td className="text-center">A+</td>
                        <td>thilini@email.com</td>
                        <td className="text-right">
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="info" size="sm">
                              <i className="fa fa-user"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="success" size="sm">
                              <i className="fa fa-edit"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="danger" size="sm">
                              <i className="fa fa-times" />
                            </Button>{` `}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>P007</td>
                        <td>Dulani Silva</td>
                        <td>0701234567</td>
                        <td>Female</td>
                        <td className="text-center">B+</td>
                        <td>dulani@email.com</td>
                        <td className="text-right">
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="info" size="sm">
                              <i className="fa fa-user"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="success" size="sm">
                              <i className="fa fa-edit"/>
                            </Button>{` `}
                          </a>
                          <a href="http://localhost:3000/admin/user-profile">
                            <Button className="btn-icon btn-simple" color="danger" size="sm">
                              <i className="fa fa-times" />
                            </Button>{` `}
                          </a>
                        </td>

                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
