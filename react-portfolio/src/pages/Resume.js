import React from 'react';

function Resume() {
  // Sample proficiency data (replace with your actual data)
  const proficiencies = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML/CSS',
    // Add more proficiencies here...
  ];

  return (
    <section className="page" id="resume">
      <h2>Resume</h2>
      <div>
        <p>
          Download my resume: <a href="/">Resume.pdf</a>
        </p>
        <h3>Proficiencies</h3>
        <ul>
          {proficiencies.map((proficiency, index) => (
            <li key={index}>{proficiency}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Resume;
