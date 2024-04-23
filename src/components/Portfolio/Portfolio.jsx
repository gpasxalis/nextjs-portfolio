"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "../utils/SectionSubtitle";
import classes from "./Portfolio.module.css";
import PortfolioItem from "./PortfolioItem";

import portfolioData from "../utils/data";

const Portfolio = () => {
  const [filter, setFilter] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Web App") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Website") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="7" md="6" className="mb-5">
            <SectionSubtitle subtitle="Portfolio" />
            <h4 className="mt-4 white_heading">
              Μερικά απο τα πιο σημαντικά projects τα οποία έχω αναπτύξει.
            </h4>
          </Col>

          <Col lg="5" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`${
                  filter === "Website" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Website")}
              >
                Website
              </button>

              <button
                className={` ${
                  filter === "Web App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web App")}
              >
                Web App
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
