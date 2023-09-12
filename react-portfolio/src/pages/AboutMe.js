import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import shawnImage from '../assets/images/shawn.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="page" id="aboutme">
      <Container>
        <h2>About Me</h2>
        <Row className="aboutme-container">
          <Col md={4} className="text-center">
            <div className="profile-photo-container">
              <Image
                src={shawnImage}
                alt="Seung Hyuk Park"
                className="profile-photo"
                roundedCircle
              />
            </div>
          </Col>
          <Col md={8}>
            <div className="aboutme-text">
              <p className="intro">
                Seung Hyuk Park, full-stack developer. Graduated from UC Irvine
                with a B.S degree in Human Biology.
              </p>
              <p>
                Hello, I'm a full-stack developer based in Seattle, WA. My
                strengths include being a quick learner, a team player, and a
                problem-solving developer. While my degree isn't CS-oriented, it
                greatly helped me become an efficient and science-driven coder.
                I completed the full-stack developer Bootcamp provided by UC
                Irvine in partnership with edX and have spent countless hours
                self-studying. Below are some of my best works, including The
                Workout Forum and SongSensei. If you'd like to contact me,
                please use the contact options provided on the Contact Me page
                or visit my GitHub profile. I look forward to connecting with
                you!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
