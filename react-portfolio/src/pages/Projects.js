import React, { useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import schedulerImage from '../assets/images/scheduler.png';
import quizImage from '../assets/images/quiz.jpg';
import weatherImage from '../assets/images/weather.jpg';
import passwordImage from '../assets/images/password.png';

const projects = [
  {
    title: 'Work Day Scheduler',
    description: 'Server-side API/Javascript/CSS',
    image: schedulerImage,
    liveLink: 'https://sptres.github.io/Work-Day-Scheduler/',
    repoLink: 'https://github.com/sptres/Work-Day-Scheduler',
  },
  {
    title: 'Code Quiz',
    description: 'JavaScript/CSS',
    image: quizImage,
    liveLink: 'https://sptres.github.io/Web-APIs-Code-Quiz/',
    repoLink: 'https://github.com/sptres/Web-APIs-Code-Quiz',
  },
  {
    title: 'Weather Dashboard',
    description: '3rd-Party API/JavaScript/CSS',
    image: weatherImage,
    liveLink: 'https://sptres.github.io/Weather-Dashboard/',
    repoLink: 'https://github.com/sptres/Weather-Dashboard',
  },
  {
    title: 'Password Generator',
    description: 'JavaScript/CSS',
    image: passwordImage,
    liveLink:
      'https://sptres.github.io/Javascript-Challenge-Password-Generator/',
    repoLink:
      'https://github.com/sptres/Javascript-Challenge-Password-Generator',
  },
];

function Projects() {
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  return (
    <Container className="content-padding">
      <section className="page" id="work">
        <h2>Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="project-card">
                <Card.Img
                  src={project.image}
                  alt={project.title}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title className="card-title">
                    {project.title}
                  </Card.Title>
                  <Card.Text>Made with: {project.description}</Card.Text>
                  <Button
                    variant="primary"
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live
                  </Button>
                  <Button
                    variant="secondary"
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Projects;
