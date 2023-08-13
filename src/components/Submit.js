import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";
import {Row, Col} from "react-bootstrap";
function Submit(props) {
    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          
          <Modal.Body>
          <Row>
          <Col lg="4">
          <img src="https://img.freepik.com/free-vector/car-ownership-…n-with-sign-paper-agreement_1284-54551.jpg?w=2000" alt="" className="w-100" />
          </Col>
          <Col lg="8" md="8" sm="4">
          <div style={{margin:"50px"}}>
          <h1>Booking Confirmed !</h1>
          <br />
            <h5><span>You have booked  </span> &nbsp; : &nbsp; {props.name}</h5>   
            <h5><span>For the duration</span> &nbsp;:&nbsp; {props.issuedate} &nbsp; to &nbsp; {props.returndate} </h5>
            </div>
            </Col>
            </Row>
            
            <Row lg="8">
            <div class="col-md-12  text-end">
            <Button variant="light" onClick={props.onHide}><Link style={{color:"black"}}to={`/`}>Continue</Link></Button>
            </div>
            </Row>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="dark" onClick={props.onHide}><Link to={`/`}>Continue</Link></Button>
          </Modal.Footer> */}
        </Modal>
      );
  }


export default Submit;