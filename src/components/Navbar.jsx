import React from 'react'
import styled from 'styled-components'
import {Search} from "@mui/icons-material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import logo from '../assets/images/logo.png';
import {mobile} from "../responsive";



//using styled-components based CSS
const Container = styled.div`
    height: 60px;
    ${mobile`
        height: 50px;
        
        
    `}
    
    
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display:flex;
  justify-content:space-between;
  align-items: center;

  ${mobile`
        padding: 10px 0px;
        
    `}
 
`
const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  
`
const Language = styled.div`
  font-size: 14px;
  cursor:pointer;

  ${mobile`
        display: none;
        
    `}
  
`

const SearchContainer = styled.div `
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
 
`
const Input = styled.input `
  border: none;

  ${mobile`
        width: 50px;
        
    `}
 
`
const Center = styled.div`
  flex: 1;
  display: flex;
    justify-content: center;
    align-items: center;  /* Vertically centers the image */
    
`
const Logo = styled.div `
 
  img{
    ${mobile`
      
     width: 150px;
     padding: 0px 10px;
    
        
    `}
  }
`

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

  
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile`
      font-size: 12px;
      margin-left: 5px;
        
    `}
  
  
`

const Navbar = () => {
  return (
    <Container> {/* This is same as div className */}
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder='Search'/>
            {/* Using inline CSS in JSX to style the Search component*/}
            <Search style={{color:"#8b0b08", fontSize:16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <img src = {logo} alt = "NamoBuddha Thangka Arts" />
          </Logo>
          </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </MenuItem>
          
        </Right>
      </Wrapper>
      
    </Container>
  )
}

export default Navbar
