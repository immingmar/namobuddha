import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, ShoppingBag, Person, Close } from "@mui/icons-material";
import styled from "styled-components";
import logo from '../assets/images/logo.png';
// import { Cart } from "./pages/Cart"; // Adjust the import path as needed

// Styled Components
const HeaderContainer = styled.header`

  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: all 0.3s;
  background-color: ${(props) => (props.isScrolled ? "white" : "rgba(255, 255, 255, 0.8)")};
  backdrop-filter: blur(10px);
  box-shadow: ${(props) => (props.isScrolled ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none")};
  padding: ${(props) => (props.isScrolled ? "8px 0" : "16px 0")};
`;

const Container = styled.div`
  
  
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Logo = styled(Link)`
  flex: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  img {
    width: 200px; /* Adjust the width as needed */
    transition: transform 0.3s, opacity 0.3s;
  }
`;

const Nav = styled.nav`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: #4a4a4a;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 17px;
  &:hover {
    color: #8b0b08;
  }
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

const CartBadge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #8b0b08;
  color: white;
  font-size: 0.75rem;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchBar = styled.div`
  padding: 0px 20px;
  margin-top: 16px;
  display: ${(props) => (props.isSearchOpen ? "block" : "none")};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Input = styled.input`
  
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const Sheet = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  z-index: 100;
`;

const SheetContent = styled.div`
  padding: 16px;
`;

const SheetTrigger = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
//   const { cartCount } = Cart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <Container>
        {/* Logo */}
        <Logo to="/">
          <img src={logo} alt="NamoBuddha Thangka Arts" />
        </Logo>

        {/* Desktop Navigation */}
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>

        {/* Desktop Actions */}
        <Actions>
          <Button onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
            {isSearchOpen ? <Close style={{ fontSize: "24px", color: "#4a4a4a" }} /> : <Search style={{ fontSize: "24px", color: "#4a4a4a" }} />}
          </Button>

          <NavLink to="/account">
            <Person style={{ fontSize: "24px", color: "#4a4a4a" }} />
          </NavLink>

          <NavLink to="/cart" style={{ position: "relative" }}>
            <ShoppingBag style={{ fontSize: "24px", color: "#4a4a4a" }} />
            {/* {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>} */}
          </NavLink>
        </Actions>

        {/* Mobile Menu */}
        <MobileMenu>
          <NavLink to="/cart" style={{ position: "relative" }}>
            <ShoppingBag style={{ fontSize: "24px", color: "#4a4a4a" }} />
            {/* {cartCount > 0 && <CartBadge>{cartCount}</CartBadge>} */}
          </NavLink>

          <SheetTrigger onClick={() => setIsSheetOpen(true)}>
            <Menu style={{ fontSize: "24px", color: "#4a4a4a" }} />
          </SheetTrigger>
          <Sheet open={isSheetOpen}>
            <SheetContent>
              <Button onClick={() => setIsSheetOpen(false)} aria-label="Close">
                <Close style={{ fontSize: "24px", color: "#4a4a4a" }} />
              </Button>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2rem" }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/account">Account</NavLink>

                <div style={{ paddingTop: "1rem" }}>
                  <Input type="search" placeholder="Search..." />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </MobileMenu>
      </Container>

      {/* Search Bar */}
      <SearchBar isSearchOpen={isSearchOpen}>
        <div style={{ position: "relative" }}>
          <Input type="search" placeholder="Search for thangka paintings..." />
          <Search style={{ position: "absolute", right: "1rem", top: "50%", transform: "translateY(-50%)", fontSize: "24px", color: "#ccc" }} />
        </div>
      </SearchBar>
    </HeaderContainer>
  );
};

export default Header;