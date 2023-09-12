import React from 'react';

function Portfolio() {
  // Sample project data (replace with your actual project data)
  const projects = [
    {
      title: 'Work Day Scheduler',
      description: 'Server-side API/Javascript/CSS',
      image: '../assets/images/scheduler.png',
      liveLink: 'https://sptres.github.io/Work-Day-Scheduler/',
      repoLink: 'https://github.com/sptres/Work-Day-Scheduler',
    },
    {
      title: 'Code Quiz',
      description: 'JavaScript/CSS',
      image: '../assets/images/quiz.jpg',
      liveLink: 'https://sptres.github.io/Web-APIs-Code-Quiz/',
      repoLink: 'https://github.com/sptres/Web-APIs-Code-Quiz',
    },
    {
      title: 'Weather Dashboard',
      description: '3rd-Party API/JavaScript/CSS',
      image: '../assets/images/weather.jpg',
      liveLink: 'https://sptres.github.io/Weather-Dashboard/',
      repoLink: 'https://github.com/sptres/Weather-Dashboard',
    },
    {
      title: 'Password Generator',
      description: 'JavaScript/CSS',
      image: '../assets/images/password.png',
      liveLink:
        'https://sptres.github.io/Javascript-Challenge-Password-Generator/',
      repoLink:
        'https://github.com/sptres/Javascript-Challenge-Password-Generator',
    },
    // Add more project objects here...
  ];

  return (
    <section className="page" id="work">
      <h2>View My Work</h2>
      <div className="works">
        {projects.map((project, index) => (
          <a href={project.liveLink} key={index} className="work">
            <div>
              <h3>{project.title}</h3>
              <span>{project.description}</span>
            </div>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-links">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
