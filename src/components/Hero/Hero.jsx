"use client";

import { React, useCallback, useRef, useEffect } from "react";
import SectionSubtitle from "../utils/SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import heroImg from "../../../public/images/developer.svg";
import classes from "./hero.module.css";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../utils/particles.json";

import Lottie from "lottie-react";
import TrippleMonitorDev from "../utils/TrippleMonitorDev.json";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const date = new Date();
  const year = date.getFullYear() - 2019;

  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Development", "Coding", "Design", "Digital Marketing"],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={`${classes.hero} d-flex align-items-center`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particleConfig}
        position="relative"
        zIndex={0}
      />
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6" className="d-flex align-items-center">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Welcome" />
              <h2 className="mt-3 mb-3 white_heading">
                Dalution Project <span className="highlight__item">|</span>
                <span className="highlight__hover_item"> Innovative </span>
              </h2>
              <h5 className={`${classes.subheading} mb-4`}>
                <span className="typed-text" ref={typedTextRef}></span>
              </h5>
              <p>
                Το Project δημιουργήθηκε για να καλύψει όλες τις διαδικτυακές
                σας ανάγκες.
              </p>
              <div className="mt-5 d-flex justify-content-center gap-3">
                <button className="primary__btn">
                  <Link href="#services">Υπηρεσίες</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="#contact">Επικοινωνία</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Lottie animationData={TrippleMonitorDev} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
