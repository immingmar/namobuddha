import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@mui/icons-material";
import styled from "styled-components";

// Styled Components
const Section = styled.section`
 height: 80vh; /* Match slider height */
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('/placeholder.svg?height=1080&width=1920') center center/cover no-repeat;
  background: linear-gradient(to right, #f9f5e8, white, #f9f5e8);
  opacity: 0.8;
`;

const Container = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #3a2921;
  margin-bottom: 1.5rem;

  span {
    color: #8b0b08;
  }

  @media (min-width: 768px) {
    font-size: 6rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  color: #4a4a4a;
  max-width: 40rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  text-align: center;

  &.primary {
    background-color: #8b0b08;
    color: white;

    &:hover {
      background-color: #6d0906;
    }
  }

  &.outline {
    background-color: transparent;
    border: 2px solid #8b0b08;
    color: #8b0b08;

    &:hover {
      background-color: rgba(139, 11, 8, 0.1);
    }
  }

  svg {
    margin-left: 0.5rem;
  }

   a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }
`;



export default function Hero() {
  return (
    <Section>
      <Container>
        <Title>
          Sacred <span>Thangka</span> Art
        </Title>
        <Description>
          Discover authentic Tibetan thangka paintings, handcrafted by master artisans using traditional techniques
          passed down through generations.
        </Description>
        <ButtonContainer>
          <Button className="primary">
            <Link to="/shop" style={{ color: 'inherit', textDecoration: 'none' }}>
              Explore Collection <ArrowRight />
            </Link>
          </Button>
          <Button className="outline">
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
              Our Story
            </Link>
          </Button>
        </ButtonContainer>
      </Container>
    </Section>
  );
}