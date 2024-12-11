import styled from "styled-components";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

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
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <RegisterContainer>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
              <Input placeholder = "first name" />
              <Input placeholder = "last name" />
              <Input placeholder = "username" />
              <Input placeholder = "email" />
              <Input placeholder = "password" />
              <Input placeholder = "confirm password" />
              <Agreement>
              By creating an account, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.
              </Agreement>
              <Button>CREATE</Button>
          </Form>
        </RegisterContainer>
        
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  )
}

export default Register
