import React, { useState, useEffect } from "react";
import "../styles/booking-form.css";
import { Form, FormGroup } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import carData from "../assets/carData.js";
import Submit from "../components/Submit.js";
import { useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import { setProducts } from "../redux/actions/productsActions";

const BookingForm = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.allProducts.products);
  let car = products[productId - 1];
  const {carName, imgUrl} = car;
  const [modalShow, setModalShow] = React.useState(false);

  const dispatch = useDispatch();

  const fetchProductDetail =  (id) => {
    const result = products[id - 1];

    dispatch(selectedProduct(result));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  
  const submitForm = (e) => {
    products[productId-1].isAvailable = false;
    products[productId-1].details[0] = nameVd[0];
    products[productId-1].details[1] = phoneVd[0];
    products[productId-1].details[2] = idateVd[0];
    products[productId-1].details[3] = rdateVd[0];
    console.log(products[productId-1]);
    dispatch(setProducts(products));
    
    setModalShow(true);
    e.preventDefault();
  }

  const [nameVd, setNameVd] = useState([]);
  const [phoneVd, setPhoneVd] = useState([]);
  const [idateVd, setIdateVd] = useState([]);
  const [rdateVd, setRdateVd] = useState([]);
  
  


  const CommonSection = ({ title }) => {
    return (
      <section className="common__section mb-5">
        <Container className="text-center">
          <h1 className="text-light">{title}</h1>
        </Container>
      </section>
    );
  };
  
  const reg = new RegExp(/^\+(91)[6-9][0-9]{9}$/);
  return (

    <section>
      <CommonSection title="Car Listing" />
      <Container>
      <Row>
      <Col lg="6">
              <img src={imgUrl} alt="" className="w-100" />
            </Col>
        <Col lg="6" >
          <div className="booking-info mt-5">
            <h5 className="mb-4 fw-bold ">Booking  Details</h5>
            <Form >
              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onChange={(e)=>{setNameVd([e.target.value, e.currentTarget.checkValidity])}}
                  required
                  type="text"
                  placeholder="john"

                />
              </FormGroup>

              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control
                  onChange={(e)=>{setPhoneVd([e.target.value, e.currentTarget.checkValidity])}}
                  required
                  type="text"
                  placeholder="+91"

                />
              </FormGroup>


              <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <Form.Label>Issue Date</Form.Label>
                <Form.Control
                  onChange={(e)=>{setIdateVd([e.target.value, e.currentTarget.checkValidity])}}
                  
                  required
                  type="date"
                  placeholder="Issue Date"

                />
              </FormGroup>
              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <Form.Label>Return Date</Form.Label>
                <Form.Control
                  onChange={(e)=>{setRdateVd([e.target.value, e.currentTarget.checkValidity])}}
                  
                  required
                  type="date"
                  placeholder="Return Date"

                />
                
              </FormGroup>

              <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                {/* { nameVd[1] && phoneVd[1] && idateVd[1] && rdateVd[1] && reg.test(phoneVd[0]) && Date.parse(rdateVd[0])>Date.parse(idateVd[0])? 
                  <>
                  <Button type="submit" variant="secondary" onClick={submitForm}>Book Car</Button>
                <Submit
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  issuedate={idateVd[0]}
                  returndate={rdateVd[0]}
                  name={carName}
                />
                </> :
                <>
                  <Button type="submit" variant="secondary" disabled ={true} onClick={submitForm}>Book Car</Button>
                <Submit
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  issuedate={idateVd[0]}
                  returndate={rdateVd[0]}
                  name={carName}
                />
                </>
                } */}
                <Button type="submit" variant="secondary" onClick={submitForm}>Book Car</Button>
                <Submit
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  issuedate={idateVd[0]}
                  returndate={rdateVd[0]}
                  name={carName}
                />
                
              </FormGroup>
                
                
             
            </Form>
          </div>
        </Col>
        </Row>
      </Container>
    </section>

  );
};

export default BookingForm;