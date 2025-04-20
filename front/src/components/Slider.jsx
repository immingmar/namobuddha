import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
 
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
  ${mobile`
    width: 30px;
    height: 30px;
  `}
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
  margin-top: 50px;
  ${mobile`
    flex-direction: column;
    height: auto;
  `}
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  
  ${mobile`
    height: 50vh;
    width: 100%;
  `}
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mobile`
    padding: 20px;
    text-align: center;
  `}
`;

const Title = styled.h1`
  font-size: 70px;
  color: #333;
  ${mobile`
    font-size: 30px;
  `}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 2px;
  color: #333;
  ${mobile`
    font-size: 16px;
    margin: 20px 0;
  `}
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: #8b0b08;
  color: white;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #a00;
  }
  ${mobile`
    font-size: 16px;
    padding: 8px;
  `}
`;

const IndicatorsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  z-index: 2;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#333" : "#ccc")};
  margin: 0 5px;
  cursor: pointer;
`;

// Slider Component
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const intervalRef = useRef(null);

  // Handle arrow clicks with dynamic slide count
  const handleClick = (direction) => {
    stopAutoPlay();
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
    startAutoPlay();
  };

  // Auto-play functions
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Start auto-play on mount, stop on unmount
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        handleClick("left");
      } else if (e.key === "ArrowRight") {
        handleClick("right");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [slideIndex]);

  // Mouse hover handlers
  const handleMouseEnter = () => stopAutoPlay();
  const handleMouseLeave = () => startAutoPlay();

  return (
    <Container onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} alt="Slider Images" />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon />
      </Arrow>
      <IndicatorsContainer>
        {sliderItems.map((_, index) => (
          <Dot
            key={index}
            active={index === slideIndex}
            onClick={() => setSlideIndex(index)}
          />
        ))}
      </IndicatorsContainer>
    </Container>
  );
};

export default Slider;