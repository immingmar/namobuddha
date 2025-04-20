import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import slider2 from "../assets/images/slider2.jpg";
import deity from "../assets/images/deity.jpg";
import mandala from "../assets/images/kalachakra-lk-mandala.png";
// Styled Components
const Section = styled.section`
  background-color: #f9f5e8;
  padding: 4rem 0;
  margin-top: 65px;
`;

const Container = styled.div`
  max-width: 1400px; // Increased from 1200px
  margin: 0 auto;
  padding: 0 2rem; // Increased padding
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #3a2921;
  text-align: center;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem; // Increased from 2rem
  margin: 2rem 0; // Added vertical margin

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  padding-top: 125%; /* Aspect ratio 4:5 */
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2rem;
`;

const CategoryName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1rem;
`;

const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  background-color: white;
  color: #8b0b08;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  align-self: flex-start; // Aligns to the left
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

// Component
export default function CategorySection() {
  return (
    <Section>
      <Container>
        <Title>Browse by Category</Title>
        <Grid>
          {categories.map((category) => (
            <Card key={category.name}>
              <ImageWrapper>
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                />
              </ImageWrapper>
              <Overlay>
                <CategoryName>{category.name}</CategoryName>
                <Description>{category.description}</Description>
                <StyledButton to={category.link}>Explore</StyledButton>
              </Overlay>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

// Categories Data
const categories = [
  {
    name: "Buddha Thangkas",
    description: "Peaceful depictions of the Buddha in various forms and postures",
    image: slider2,
    link: "/shop?category=buddha",
  },
  {
    name: "Deity Thangkas",
    description: "Sacred representations of Buddhist deities and bodhisattvas",
    image: deity,
    link: "/shop?category=deity",
  },
  {
    name: "Mandala Thangkas",
    description: "Intricate cosmic diagrams representing the Buddhist universe",
    image: mandala,
    link: "/shop?category=mandala",
  },
];