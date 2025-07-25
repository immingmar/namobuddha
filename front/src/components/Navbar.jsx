import React from 'react';
import styled from 'styled-components';
import { Search } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import logo from '../assets/images/logo.png';
import { mobile } from "../responsive";

// using styled-components based CSS
const Container = styled.div`
  height: 60px;
  ${mobile`
    height: 50px;
  `}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile`
    padding: 10px 0px;
  `}
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: #333;
  ${mobile`
    display: none;
  `}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  ${mobile`
    width: 50px;
  `}
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; /* Vertically centers the image */
`;

const Logo = styled.div`
  cursor: pointer;
  img {
    width: 200px; /* Adjust the width as needed */
    transition: transform 0.3s, opacity 0.3s;
    ${mobile`
      width: 150px;
      padding: 0px 10px;
    `}
    &:hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile`
    flex: 2;
    justify-content: center;
    padding-right: 25px;
  `}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: #333;
  transition: color 0.3s, transform 0.3s;
  ${mobile`
    font-size: 12px;
    margin-left: 5px;
  `}
  &:hover {
    color: #ff6f61;
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const navigate = useNavigate(); // This is a hook provided by react-router-dom to navigate
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <Container> {/* This is same as div className */}
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search' />
            {/* Using inline CSS in JSX to style the Search component */}
            <Search style={{ color: "#9c0a06", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate("/")}>
            <img src={logo} alt="NamoBuddha Thangka Arts" />
          </Logo>
        </Center>
        <Right>
          {token ? (
            <>
              <MenuItem onClick={handleLogout}>LOGOUT</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => navigate("/register")}>REGISTER</MenuItem>
              <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
            </>
          )}
          <MenuItem onClick={() => navigate("/cart")}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon style={{ color: "#333" }} />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;