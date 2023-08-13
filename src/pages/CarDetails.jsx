import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productsActions";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ColorizeIcon from '@mui/icons-material/Colorize';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import carData from "../assets/carData.js";
import { Container, Row, Col } from 'react-bootstrap';
import Table from "react-bootstrap/Table";

const ProductDetails = () => {
  const { productId } = useParams();
  const products = useSelector((state) => state.allProducts.products);

  const dispatch = useDispatch();
  const fetchProductDetail = (id) => {
    const result = products[id - 1];

    dispatch(selectedProduct(result));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const { id, color, capacity, vehNum, pd, isAvailable, imgUrl, carName, price, brand, description, rating, model, gps, automatic, details, speed, seatType } = products[productId - 1];
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

  return (
    <Helmet title={carName}>
      <CommonSection title="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{carName}</h2>
                <hr
                  style={{
                    margin: "6px",
                    background: "#000000",
                    height: "2px",

                  }}
                />
                <br />
                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ color: "grey", columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    <ColorizeIcon />
                    {color}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    <AirlineSeatReclineNormalIcon />
                    {capacity}
                  </span>


                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "1rem" }}
                >
                  <h4 className="rent__price fw fs-4">Rent per day  :</h4>
                  <h5 >
                    <CurrencyRupeeIcon /> {price}
                  </h5>

                </div>
              </div>
              <div
                className=" d-flex align-items-center gap-5 mb-4 mt-3"
                style={{ margin: "5px", columnGap: "4rem" }}
              >

                {isAvailable ?
                  <Button variant="secondary" type="submit" className=" w-25">
                    <Link to={`/form/${id}`}>Book Now</Link>
                  </Button> : <>
                    <Button variant="dark" type="submit" disabled={true}>
                      <Link to={`/form/${id}`}>Book Now</Link>
                    </Button> <p style={{ color: "red" }}>Currently unavailable</p>
                  </>
                }


              </div>
            </Col>



          </Row>
          <Row>
            <div>
              <span className=" d-flex align-items-center gap-1 ">
                <h3 className="section__title"> Car Details</h3>

              </span>
            </div>
            <hr
              style={{
                margin: "6px",
                background: "#000000",
                height: "2px",

              }}
            />
            <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
              <span style={{ margin: "10px", }}>
                <h6>Vehicle number : {vehNum}</h6>

                <br></br>
                <h6>{pd}</h6>
                <br></br>
                <h6>{speed}</h6>
                <br />
                {description}
              </span>

            </div>
          </Row>
          {!isAvailable && <>
            <div>
              <span className=" d-flex align-items-center gap-1 ">
                <h3 className="section__title"> Current Booking</h3>

              </span>
            </div>
            <hr
              style={{
                margin: "6px",
                background: "#000000",
                height: "2px",

              }}
            />
            <div
              className=" d-flex align-items-center gap-5 mb-4 mt-3"
              style={{ columnGap: "4rem" }}
            >
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Issue Date</th>
                    <th>Return Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{details[0]}</td>
                    <td>{details[1]}</td>
                    <td>{details[2]}</td>
                    <td>{details[3]}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </>

          }

        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
