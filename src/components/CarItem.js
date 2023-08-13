import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import "../styles/car-item.css";
import Button from "react-bootstrap/Button";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ColorizeIcon from '@mui/icons-material/Colorize';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
const CarItem = (props) => {
  const { id, color, capacity, isAvailable, imgUrl, model, carName, automatic, speed, price } = props.item;


  return (
    <div className="car__item">
      <Row lg="10">


        <Col lg="3"><div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
        </Col>
        <Col lg="3"><br />
          <h4 className="section__title text-center">{carName}</h4>
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
        </Col>
        <Col lg="2">

          <br />
          <br />
          <h6 className="rent__price text-center mt-">
            Rent per day  :

            <CurrencyRupeeIcon /> {price}


          </h6>

        </Col>

        <Col lg="4">
          <br />
          {isAvailable ? <Button variant="secondary" style={{ margin: "20px" }} className=" w-25 car__item-btn car__btn-rent " >
            <Link to={`/form/${id}`}>Book Now</Link>
          </Button> :
            <Button variant="secondary" style={{ margin: "20px" }} className=" w-25 car__item-btn car__btn-rent" disabled={true}>
              <Link to={`/form/${id}`}>Book Now</Link>
            </Button>
          }


          <Button variant="light" style={{ margin: "5px" }} className=" w-25 car__item-btn car__btn-details">
            <Link to={`/cars/${id}`}>Details</Link>
          </Button>
        </Col>

      </Row>
    </div>
  );

};

export default CarItem;
