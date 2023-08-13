import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <span className=" d-flex align-items-center mt-3 mb-4 gap-2">
            <h1>
              RENTVROOM
            </h1>
          </span>
        </Row>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="mb-4">
              <h5 className=" mb-4">Head Office</h5>
              <p className="">322 rh, wing-3, fishman island, west Blue</p>

            </div>
            
            <div
              className=" d-flex align-items-center mt-3"
              style={{ columnGap: "4rem" }}
            >
              <TwitterIcon color="primary" />
              <LinkedInIcon color="primary" />
              <InstagramIcon color="error" />
            </div>
            <br />
            <br />
            <div
              className=" d-flex align-items-center mt-3"
              style={{ margin:"5px", columnGap: "3.5rem" }}
            >
            
            <h6>Home</h6>
            <h6>contact</h6>
            <h6>About</h6>
            </div>
          </Col>
          <Col lg="12" md="4" sm="12" style={{display:'flex', justifyContent:'center'}}>
          
          <div
              className=" d-flex align-items-right  ms-auto"
              style={{ 
   columnGap: "3.5rem" }}
            >
            <p >Privacy policy</p>
            <p>Terms and condition</p>
            
            </div>
          </Col>
          

          <Col lg="12 ">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                Copyright {year},
                DxLr8
              </p>
            </div>
          </Col>

        </Row>
      </Container>
    </footer >
  );
};

export default Footer;