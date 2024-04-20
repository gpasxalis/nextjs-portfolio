"use client";

import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../utils/SectionSubtitle";
import classes from "./Services.module.css";
import ServicesItem from "./ServicesItem";

import Lottie from "lottie-react";
import LaptopCoffee from "../utils/LaptopCoffee.json";

const Services = () => {
  return (
    <section className={`${classes.services}`} id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <Lottie animationData={LaptopCoffee} />
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Υπηρεσίες" />
            <h3 className="mb-0 mt-4 mb-4 white_heading">Infinite Solutions</h3>
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem
                  title="Κατασκευή Ιστοσελίδων"
                  icon="ri-computer-line"
                  css_class="left-item"
                />

                <ServicesItem
                  title="Κατασκευή Eshop"
                  icon="ri-apps-line"
                  css_class="left-item"
                />
              </div>

              <div>
                <ServicesItem
                  title="Digital Marketing"
                  icon="ri-computer-line"
                  css_class="right-item"
                />

                <ServicesItem
                  title="24/7 Υποστήριξη"
                  icon="ri-apps-line"
                  css_class="right-item"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
