import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import About from '../assets/images/story.jpg';

const Section = styled.section`
  background-color: #f9f5e8;
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  border: 2px solid #d4b96e;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Content = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #8b0b08;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #4a4a4a;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  background-color: #8b0b08;
  padding: 0.75rem 1.5rem;
  color: white;
  text-decoration: none;
  border-radius: 0.375rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6d0906;
  }
`;

export default function Story() {
  return (
    <Section>
      <Container>
        <FlexContainer>
          <ImageWrapper>
            <Image
              src= {About}
              alt="Thangka Artist at Work"
            />
          </ImageWrapper>
          <Content>
            <Title>The Art of Thangka</Title>
            <Description>
              Thangka paintings are sacred Buddhist artworks that serve as aids for meditation and teaching. Each
              piece is meticulously created using traditional techniques and natural pigments on cotton canvas.
            </Description>
            <Description>
              Our collection features authentic works from master artists across Nepal, Tibet, and Bhutan, each piece
              authenticated and ethically sourced to support traditional artisans and their communities.
            </Description>
            <StyledButton to="/about">
              Learn More About Our Journey
            </StyledButton>
          </Content>
        </FlexContainer>
      </Container>
    </Section>
  );
}