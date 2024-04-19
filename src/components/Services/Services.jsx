import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../utils/SectionSubtitle";
import classes from "./Services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section className={`${classes.services}`} id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Κατασκευή Ιστοσελίδων" icon="ri-computer-line" />


                <ServicesItem title="Digital Marketing" icon="ri-apps-line" />
              </div>

              <ServicesItem
                title="Web Solutions"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Υπηρεσίες" />
            <h3 className="mb-0 mt-4 mb-4 white_heading">Infinite Solutions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
              culpa nobis corporis officiis, numquam cupiditate, enim expedita
              eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
              Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
              Veniam, non distinctio dolorem rerum laboriosam deleniti.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;