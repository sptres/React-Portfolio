import React, { useEffect } from 'react';

function Resume() {
  useEffect(() => {
    document.title = 'Resume';
  }, []);

  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Express',
  ];

  return (
    <section className="content-padding" id="resume">
      <h2>Resume</h2>
      <div>
        <p>
          Download my resume: <a href="/">Resume.pdf</a>
        </p>
        <h2>Proficiencies</h2>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
        <h2>More about me</h2>
        <p></p>
      </div>
    </section>
  );
}

export default Resume;
