import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "../utils/SectionSubtitle";
import classes from "./Contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Επικοινωνία" />
            <h3 className="mt-4 mb-4 white_heading">Επικοινώνησε μαζί μου</h3>
            <p>
              Πείτε μας λίγα λόγια για το project σας, και θα επικοινωνήσουμε
              μαζί σας για να το σχεδιάσουμε μαζί και να το πραγματοποιήσουμε!
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>gpasxalis94@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Greece</p>
              </li>
            </ul>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
