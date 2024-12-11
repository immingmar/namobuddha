import { Facebook, Instagram, MailLockOutlined, MailOutline, Phone, Pinterest, Room, WhatsApp } from "@mui/icons-material"
import styled from "styled-components"
import logo from '../assets/images/logo.png';
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    
    ${mobile`
      
      flex-direction: column;
     
         
     `}
`
const Left = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    
`

const Logo = styled.div``
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: ${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div `
    flex: 1;
    padding: 20px;

    ${mobile`
      
     display: none;
     
         
     `}
`

const Title = styled.h3 `
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none; 
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div `
    flex: 1;
    padding: 20px;

    ${mobile`
      
      background-color: #fcf5f5;
     
         
     `}

    
`

const ContactItem = styled.div `
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 20px; /* Space above payment section */
`;

const PaymentIcon = styled.img`
    width: 50px; /* Adjust size as needed */
    height: auto; /* Maintain aspect ratio */
    margin-right: 10px; /* Space between icons */
`;


const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
            <img src = {logo} alt = "NamoBuddha Thangka Arts" />
        </Logo>
        <Desc>Handcrafted Thangka paintings, inspired by tradition and spirituality.</Desc>
        <SocialContainer>
            <SocialIcon color="#3b5999">
                <Facebook/>
            </SocialIcon>
            <SocialIcon color="#e4405f">
                <Instagram/>
            </SocialIcon>
            <SocialIcon color="#E60023">
                <Pinterest/>
            </SocialIcon>
            <SocialIcon color="#25D366">
                <WhatsApp/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem><a href="/about">About Us</a></ListItem>
                <ListItem><a href="/contact">Contact Us</a></ListItem>
                <ListItem><a href="/faq">FAQ</a></ListItem>
                <ListItem><a href="/privacy-policy">Privacy Policy</a></ListItem>
                <ListItem><a href="/terms">Terms of Service</a></ListItem>
                <ListItem><a href="/shipping">Shipping Information</a></ListItem>
                <ListItem><a href="/returns">Returns & Exchanges</a></ListItem>
                <ListItem><a href="/blog">Blog</a></ListItem>
                <ListItem><a href="/gallery">Gallery</a></ListItem>
                <ListItem><a href="/social-media">Follow Us</a></ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <Room style={{marginRight:"10px"}}/>Boudha-06, Kathmandu, Nepal</ContactItem>
        <ContactItem><Phone style={{marginRight:"10px"}}/>+9779843564659</ContactItem>
        <ContactItem><MailLockOutlined style={{marginRight:"10px"}}/> namobuddhathangkaarts@gmail.com</ContactItem>
        <Payment>
            <PaymentIcon src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
            <PaymentIcon src="https://img.icons8.com/color/48/000000/mastercard.png" alt="MasterCard" />
            <PaymentIcon src="https://img.icons8.com/color/48/000000/paypal.png" alt="PayPal" />
            <PaymentIcon src="https://img.icons8.com/color/48/000000/american-express.png" alt="American Express" />
                {/* Add more payment icons as needed */}
            </Payment>
      </Right>
    </Container>
  )
}

export default Footer
