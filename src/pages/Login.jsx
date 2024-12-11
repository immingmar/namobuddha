import styled from "styled-components";


import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
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

const Login = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <FormContainer>
          <Form>
            <Title>SIGN IN</Title>
            <Input placeholder="username" />

            <Input placeholder="password" />

            <Button>LOGIN</Button>
            <Link>FORGET PASSWORD?</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
          </Form>
        </FormContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Login;
