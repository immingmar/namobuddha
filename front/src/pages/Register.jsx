import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import React, { useState } from 'react';
import { registerUser } from '../apiService';

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 100%;
    
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RegisterContainer = styled.div`
    width: 40%;

     ${mobile`
      
      
    width:75%;
     
 `}
`;

const SuccessMessage = styled.p`
    color: green;
    font-weight: bold;
`;

const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
`;


const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`;



const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: #8b0b08;
    color: white;
    cursor: pointer;
    font-weight: 700;
`;

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await registerUser(formData);
      setSuccess(true);
      setError(null);
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }
  };


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <RegisterContainer>
          <Title>CREATE AN ACCOUNT</Title>
          {success && <SuccessMessage>Registration successful!</SuccessMessage>}
          {error && <ErrorMessage>Error: {error}</ErrorMessage>}
          <Form onSubmit={handleSubmit}>
          <Input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
            />
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange} />
              <Agreement>
              By creating an account, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
              </Agreement>
              <Button type="submit">CREATE</Button>
          </Form>
        </RegisterContainer>
        
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Register;
