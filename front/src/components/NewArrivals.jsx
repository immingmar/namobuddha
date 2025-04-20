import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// ADDED: Import images from assets
import ShakyamuniBuddha from '../assets/images/shakyamuni-buddha.jpg';
import ManjushriThangka from '../assets/images/manjushri-thangka.jpg';
import VajrapaniMandala from '../assets/images/vajrapani-mandala.jpg';
import WhiteTara from '../assets/images/white-tara.jpg';

// Styled Components
const Section = styled.section`
  // CHANGED: Updated background color
  background-color: white;
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Title = styled.h2`
  // CHANGED: Updated typography and alignment
  font-size: 1.875rem;
  font-weight: 700;
  color: #3a2921;
  text-align: left;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  // CHANGED: Reduced gap
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  // CHANGED: Updated card styling
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  // CHANGED: Updated to square aspect ratio
  padding-top: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Badge = styled.span`
  position: absolute;
  // CHANGED: Updated positioning and styling
  top: 0.5rem;
  right: 0.5rem;
  background-color: #8b0b08;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  z-index: 1;
`;

const Content = styled.div`
  // CHANGED: Added border and updated padding
  padding: 1.25rem;
  border-top: 1px solid #e5e7eb;
  background-color: white;
`;

const Style = styled.p`
  // CHANGED: Updated typography
  font-size: 0.875rem;
  color: #8b0b08;
  font-weight: 500;
    margin-bottom: 0.5rem;
`;

const Name = styled.h3`
  // CHANGED: Increased font size and margin
  font-size: 1.25rem;
  color: #1f2937;
  font-weight: 500;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  ${Card}:hover & {
    color: #8b0b08;
  }
`;

const Price = styled.p`
  // CHANGED: Increased font size
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
`;

// Component remains the same
export default function NewArrivals() {
  const newArrivals = [
    {
      id: 1,
      title: "Shakyamuni Buddha",
      price: 1499,
      image: ShakyamuniBuddha,
      style: "Newari",
      isNew: true,
    },
    {
      id: 2,
      title: "Manjushri Thangka",
      price: 1899,
      image: ManjushriThangka,
      style: "Tibetan",
      isNew: true,
    },
    {
      id: 3,
      title: "Vajrapani Mandala",
      price: 2299,
      image: VajrapaniMandala,
      style: "Central Tibetan",
      isNew: true,
    },
    {
      id: 4,
      title: "White Tara",
      price: 1699,
      image: WhiteTara,
      style: "Menri",
      isNew: true,
    },
  ];

  return (
    <Section>
      <Container>
        <Title>New Arrivals</Title>
        <Grid>
          {newArrivals.map((product) => (
            <Card key={product.id}>
              <StyledLink to={`/product/${product.id}`}>
                <ImageContainer>
                  {product.isNew && <Badge>New</Badge>}
                  <Image src={product.image} alt={product.title} />
                </ImageContainer>
                <Content>
                  <Style>{product.style} Style</Style>
                  <Name>{product.title}</Name>
                  <Price>${product.price.toLocaleString()}</Price>
                </Content>
              </StyledLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}