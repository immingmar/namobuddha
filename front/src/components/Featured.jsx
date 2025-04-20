import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Guru_Tsyangye from "../assets/images/Guru_Tsyangye.jpg"; // Adjust the path as needed
import slide1 from "../assets/images/slide1.jpg";
// Styled Components

const SliderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 16px; /* adjust padding as needed */
`;

const SliderTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #3a2921;
`;

const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: #8b0b08;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    margin-left: 0.5rem;
    font-size: 1.2rem;
  }
`;
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 70vh;
  padding-bottom: 3rem; /* Add space at bottom for pagination */
  background-color: #f9f5e8;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.7s ease-in-out;
  height: 100%;
`;

const Slide = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f9f5e8;
   @media (max-width: 768px) {
    flex-direction: column; /* Stack vertically on smaller screens */
  }
`;

const SlideImageContainer = styled.div`
  flex: 1;
  position: relative;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const SlideImage = styled.img`
  max-height: 500px;
  object-fit: contain;
  border-radius: 0.3rem;
  border: 2px solid #d4b96e;
  width: 90%;
  height: 100%;

 
`;

const SlideContent = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SlideTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  color: #3a2921;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SlideSubtitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #8b0b08;
`;

const SlideText = styled.p`
  color: #4a4a4a;
  margin-bottom: 1rem;
`;

const SlideDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const SlideDetail = styled.div`
  border-left: 2px solid #8b0b08;
  padding-left: 0.75rem;
`;

const SlideDetailTitle = styled.p`
  font-size: 0.875rem;
  color: #4a4a4a;
`;

const SlideDetailValue = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #3a2921;
`;

const SlidePrice = styled.p`
  font-size: 2rem;
  font-weight: bold;
  color: #8b0b08;
  margin-bottom: 1.5rem;
`;

const SlideButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 500;
  color: white;
  background-color: #8b0b08;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.3s;
   align-self: flex-start;      /* Aligns the button to the left in a flex container */


  &:hover {
    background-color: #6d0906;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: white;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }
`;

const Pagination = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  padding: 0.75rem 1.25rem;
  border-radius: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  
`;

const PaginationDot = styled.button`
  width: ${(props) => (props.active ? "2.5rem" : "0.5rem")};
  height: 0.5rem;
  border-radius: 1rem;
  background-color: ${(props) => 
    props.active ? "#8b0b08" : "rgba(139, 11, 8, 0.3)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    background-color: ${(props) => 
      props.active ? "#8b0b08" : "rgba(139, 11, 8, 0.5)"};
    width: ${(props) => props.active ? "2.5rem" : "1.5rem"};
  }

  &:focus {
    box-shadow: 0 0 0 2px rgba(139, 11, 8, 0.2);
  }
`;

export default function Featured({ paintings = defaultPaintings, autoPlay = true, interval = 5000, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === paintings.length - 1 ? 0 : prevIndex + 1));
  }, [paintings.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? paintings.length - 1 : prevIndex - 1));
  }, [paintings.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!autoPlay || isHovering) return;

    const slideInterval = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, interval, nextSlide, isHovering]);

  return (
    <>
    <SliderHeader>
        <SliderTitle>Featured Thangkas</SliderTitle>
        <ViewAllLink to="/shop">
          View All <ArrowRight />
        </ViewAllLink>
      </SliderHeader> 


    <SliderContainer
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <SliderWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {paintings.map((painting) => (
          <Slide key={painting.id}>
            <SlideImageContainer>
              <SlideImage
                src={Guru_Tsyangye || "/placeholder.svg"}
                alt={painting.title}
              />
            </SlideImageContainer>
            <SlideContent>
              <SlideSubtitle>{painting.style} Thangka</SlideSubtitle>
              <SlideTitle>{painting.title}</SlideTitle>
              <SlideText>By {painting.artist}</SlideText>
              <SlideDetails>
                <SlideDetail>
                  <SlideDetailTitle>Size</SlideDetailTitle>
                  <SlideDetailValue>{painting.dimensions || painting.size}</SlideDetailValue>
                </SlideDetail>
                <SlideDetail>
                  <SlideDetailTitle>Age</SlideDetailTitle>
                  <SlideDetailValue>{painting.age || "Contemporary"}</SlideDetailValue>
                </SlideDetail>
              </SlideDetails>
              <SlidePrice>${painting.price.toLocaleString()}</SlidePrice>
              <SlideButton to={`/product/${painting.id}`}>View Details</SlideButton>
            </SlideContent>
          </Slide>
        ))}
      </SliderWrapper>

      {/* Navigation Arrows */}
      <ArrowButton className="left" onClick={prevSlide} aria-label="Previous painting">
        <ChevronLeft className="h-6 w-6" />
      </ArrowButton>

      <ArrowButton className="right" onClick={nextSlide} aria-label="Next painting">
        <ChevronRight className="h-6 w-6" />
      </ArrowButton>

      {/* Pagination Indicators */}
      <Pagination>
        {paintings.map((_, index) => (
          <PaginationDot
            key={index}
            active={currentIndex === index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Pagination>
    </SliderContainer>
    </>
  );
}

// Default thangka paintings for demonstration
const defaultPaintings = [
  {
    id: 1,
    title: "Buddha of Compassion",
    artist: "Tenzin Norbu",
    price: 1299,
    image: "/placeholder.svg?height=800&width=600",
    dimensions: '24" × 36"',
    style: "Newari",
    age: "Contemporary",
    deity: "Buddha",
  },
  {
    id: 2,
    title: "Green Tara Mandala",
    artist: "Karma Sichoe",
    price: 1899,
    image: "/placeholder.svg?height=800&width=600",
    dimensions: '30" × 40"',
    style: "Tibetan",
    age: "15 years",
    deity: "Tara",
  },
  {
    id: 3,
    title: "Wheel of Life",
    artist: "Lobsang Dhargey",
    price: 2499,
    image: "/placeholder.svg?height=800&width=600",
    dimensions: '36" × 36"',
    style: "Central Tibetan",
    age: "Contemporary",
    deity: "Buddha",
  },
  {
    id: 4,
    title: "Medicine Buddha",
    artist: "Pema Wangyal",
    price: 1599,
    image: "/placeholder.svg?height=800&width=600",
    dimensions: '18" × 24"',
    style: "Menri",
    age: "5 years",
    deity: "Buddha",
  },
  {
    id: 5,
    title: "White Mahakala",
    artist: "Ngawang Dorjee",
    price: 3299,
    image: "/placeholder.svg?height=800&width=600",
    dimensions: '40" × 60"',
    style: "Karma Gardri",
    age: "20 years",
    deity: "Mahakala",
  },
];