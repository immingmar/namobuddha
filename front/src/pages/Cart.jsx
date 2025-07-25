import React from 'react'
import {guruTsyangye, smallThangka} from '../assets/images';
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    margin-top: 25px;

    ${mobile`
      
      
        padding: 10px;
         
     `}
    
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "#8b0b08" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};;
`;

const TopTexts = styled.div`
${mobile`
      
      
    display: none;
     
 `}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile`
      
      
        flex-direction: column;
         
     `}
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;


      ${mobile`
      
      
        flex-direction: column;
         
     `}
    
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
    
    
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductStock = styled.span`
    color: green;
`;

const ProductId = styled.span``;



const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;



const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

      ${mobile`
      
      
        margin: 5px 15px;
         
     `}
`;


const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile`
      
      
        margin-bottom: 20px;
         
     `}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin: 5px 0px;
`;



const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props=>props.type === "total" && "500")};
    font-size: ${(props=> props.type === "total" && "24px")};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #8b0b08;
    color: white;
    font-weight: 600;
    border: none;
`;







const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag (2)</TopText>
                <TopText>Your WishList (0)</TopText>
            </TopTexts>
            <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
                <Product>
                    <ProductDetail>
                        <Image src = {guruTsyangye} />
                        <Details>
                            <ProductName><b>Product:</b>Guru Tyangye Thangka</ProductName>
                            <ProductStock> 1 in stock</ProductStock>
                            <ProductId><b>ID:</b>987252527</ProductId>
                            
                            <ProductSize><b>Size:</b> 76 x 48 cm</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                                <ProductAmount>2</ProductAmount>
                            <Remove/>
                           
                        </ProductAmountContainer>
                        <ProductPrice>$1212</ProductPrice>
                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src = {smallThangka} />
                        <Details>
                            <ProductName><b>Product:</b>Guru Tyangye Thangka</ProductName>
                            <ProductStock> 1 in stock</ProductStock>
                            <ProductId><b>ID:</b>987252527</ProductId>
                            
                            <ProductSize><b>Size:</b> 76 x 48 cm</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add/>
                                <ProductAmount>1</ProductAmount>
                            <Remove/>
                           
                        </ProductAmountContainer>
                        <ProductPrice>$500</ProductPrice>
                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 1212</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>$ 1212</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
