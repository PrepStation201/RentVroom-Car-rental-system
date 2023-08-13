import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import CarItem from "../components/CarItem";
import {Container, Row, Col} from 'react-bootstrap';
import carData from "../assets/carData";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts =  () => {
    dispatch(setProducts(carData));
  };
  console.log(products[1]);
  const Helmet = (props) => {
    document.title = "Rent Car Service - " + props.title;
    return <div className="w-100">{props.children}</div>;
  };
  const CommonSection = ({ title }) => {
    return (
      <section className="common__section mb-5">
        <Container className="text-center">
          <h1 className="text-light">{title}</h1>
        </Container>
      </section>
    );
  };
  
  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);

  return (
    <Helmet title="Cars">
      <CommonSection title="Car Listing" />

      <section>
        <Container>
          <Row>
          <br />
            <Col style={{
                margin: "10px",

              }} lg="12">
              
              <h2 className="section__title">Car Details</h2>
              <hr
              style={{
                margin: "6px",
                background: "#000000",
                height: "2px",
                
              }}
            />
              <br /><br /><br />
            </Col>
            <Col lg="12">
            
            {products.map((item) => (
              <CarItem item={item} key={item.id} num={item.id}/>
            ))}
            
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductPage;
