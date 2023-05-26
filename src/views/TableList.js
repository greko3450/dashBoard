/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
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
  Col,
} from "reactstrap";

function Tables() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Record de Compras</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Usuario</th>
                      <th>Producto</th>
                      <th>Cantidad</th>
                      <th className="text-center">Precio</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Manuel</td>
                      <td>Manzana</td>
                      <td>3</td>
                      <td className="text-center">$7,500</td>
                    </tr>
                   
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>
                <CardTitle tag="h4">Record de pedidos</CardTitle>
                <p className="category">O'hana</p>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Producto</th>
                      <th>Precio Unitario</th>
                      <th>Precio total</th>
                      <th className="text-center">Acumulado Ventas</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Frutilla</td>
                      <td>2,500</td>
                      <td>10,000</td>
                      <td className="text-center">$20,000</td>
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

export default Tables;
