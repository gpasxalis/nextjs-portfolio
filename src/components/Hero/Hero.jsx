"use client";

import {React, useCallback, useRef, useEffect} from "react";
import SectionSubtitle from "../utils/SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import heroImg from "../../../public/images/developer.svg";
import classes from "./hero.module.css"

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../utils/particles.json";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const date = new Date();
  const year = date.getFullYear() - 2019;

  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Coder", "Tech Enthusiast"],
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
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3 white_heading">I&apos;m Paschalis Grammenos</h2>
              <h5 className="mb-4"><span className="typed-text" ref={typedTextRef}></span></h5>
              <p>
                Λατρεύω το Web Development, τη δημιουργία μοναδικής εμπειρίας του χρήστη και διάφορες διαδικτυακές λύσεις. 
                Με ταλέντο στην επίλυση προβλημάτων, ευδοκιμώ στη ανάπτυξη κομψού κώδικα που θα έχει αντίκτυπο στο internet.
                Μου αρέσει να εξερευνώ νέα εργαλεία και να πειραματίζομαι. Είμαι ανοιχτός σε συνεργασίες και ιδέες για project.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="500" height="500" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6 className="white_heading">Experience</h6>
                  <h5 className="mb-0 white_heading">{year} Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;