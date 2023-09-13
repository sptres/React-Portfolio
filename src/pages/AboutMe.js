import React, { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import shawnImage from '../assets/images/shawn.jpg';

function AboutMe() {
  useEffect(() => {
    document.title = 'About Me';
  }, []);

  return (
    <section className="page" id="aboutme">
      <Container className="content-padding">
        <h2>About Me</h2>
        <Row className="aboutme-container">
          <Col md={8}>
            <div className="aboutme-text">
              <div className="profile-photo-section">
                <Image
                  src={shawnImage}
                  alt="Seung Hyuk Park"
                  className="img-circle"
                />
                <p className="intro">
                  <strong>
                    {' '}
                    Seung Hyuk Park, full-stack developer, UC Irvine Alumni.
                  </strong>
                </p>
              </div>
              <div className="text-container">
                {' '}
                {/* Add a container for the second paragraph */}
                <p className="paragraph">
                  <h2>Background: </h2>
                  I'm a full-stack developer living in Seattle, WA. I've
                  completed my academic career at UC Irvine with a degree in B.S
                  Human Biology but later found my true passion, which was
                  creating and continuous learning. My biggest strengths include
                  being a quick learner, a team player, and a problem-solving
                  developer. Having been a highly competitive team-oriented
                  athlete taught me what the team can achieve when everyone is
                  bought in and puts the team before I. After completing the
                  full-stack developer Bootcamp provided by UC Irvine in
                  partnership with edX and spending many hours working on
                  personal projects, I feel more ready than ever to be a part of
                  a great team. Below are some of my best works, including The
                  Workout Forum, Hike & Seek Supplies, and SongSensei. I look
                  forward to meeting you and your team one day!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutMe;
