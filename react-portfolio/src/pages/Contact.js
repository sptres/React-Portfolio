import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    document.title = 'Coding Journal';
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(formData.email)) {
      alert('Invalid email address!');
    } else {
      alert('Thank you for following my coding journal!');
    }
  };
  return (
    <Container className="content-padding">
      <section className="page contact" id="contact">
        <h2>Sign up for weekly coding journal!</h2>
        <p>
          <strong>
            {' '}
            I've started writing down my coding journey weekly, sign up with
            your email for weekly update!
          </strong>
        </p>
        <Form onSubmit={handleSubmit} className="text-container">
          <Form.Group>
            <Form.Label>Name: </Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message: </Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Button type="submit" className="form-btn">
            Sign up!
          </Button>
        </Form>
      </section>
    </Container>
  );
}

export default Contact;
