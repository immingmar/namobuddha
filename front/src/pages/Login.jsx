import styled from "styled-components";

import { loginUser } from '../apiService';
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";
const Container = styled.div`
  display: flex;

  flex-direction: column; /* Ensure the Announcement and Navbar are stacked above the Wrapper */
  width: 100%;
  min-height: 100vh; /* Allow the container to expand beyond the viewport */
`;

const Wrapper = styled.div`
  
  display: flex;
  justify-content: center; /* Horizontally center the FormContainer */
  align-items: center; /* Vertically center the FormContainer */

  height: 60vh;
 

  
  
`;

const FormContainer = styled.div`
  width: 25%;
  padding: 20px;
   

   ${mobile`
      
      
    width:75%;
     
 `}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #8b0b08;
  color: white;
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
    color: red;
    font-weight: bold;
`;
const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData);
      localStorage.setItem('token', response.accessToken); // Store the token in local storage
      // Redirect to the home page or dashboard after successful login
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <FormContainer>
        <Form onSubmit={handleSubmit}>
        {error && <ErrorMessage>Error: {error}</ErrorMessage>}
            <Title>SIGN IN</Title>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <Button type="submit">LOGIN</Button>
            <Link>FORGET PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </FormContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}


  


export default Login;
