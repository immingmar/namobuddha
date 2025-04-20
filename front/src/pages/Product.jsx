import styled from "styled-components"
import guruTsyangye from '../assets/images/Guru_Tsyangye.jpg';
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile`
      
      
        padding: 10px;
        flex-direction: column;
        margin-top: 20px;
         
     `}
`;
const ImgContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile`
      
      
        padding: 10px;
        
         
     `}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Desc = styled.p`
    margin: 20px 0px;
`;

const BoldTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 10px;
`;

const List = styled.ul`
  padding-left: 20px;
  margin-top: 10px;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

const Price = styled.span`
    font-weight: 200;
    font-size: 35px;
`;

const FilterContainer = styled.div`
    margin: 30px 0px;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
    
    border-radius: 5px;     /* Rounded corners if desired */
`;

const FilterSizeOption = styled.option`
    
`;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    ${mobile`
      
      
        width: 100%;
        
         
     `}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid #8b0b08;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid #8b0b08;
    background-color: white;
    cursor: pointer;
    font-weight: 700;


    &:hover {
        background-color: #8b0b08;
        color: #fff; /* Change text color to white on hover */
    }
`;

const HorizontalLine = styled.hr`
  margin: 15px 0;
  border: none;
  border-top: 2px solid #000; /* Customize the color and thickness */
`;


const Product = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <ImgContainer>
            <Image src = {guruTsyangye} />
        </ImgContainer>
        <InfoContainer>
            <Title>Modern Styled Tibetan Thangka Painting</Title>
            <Desc> 
            The Tibetan Guru Tsyangye Thangka painting depicts one of the Eight Manifestations of Guru Rinpoche, symbolizing spiritual power, wisdom, and the conquest of negativity in the Vajrayana Buddhist tradition.
            </Desc>

            <BoldTitle>Product Description</BoldTitle>
            <List>
                <ListItem>Hand-painted on canvas</ListItem>
                <ListItem>Depicts Guru Rinpoche</ListItem>
                <ListItem>Made in Nepal</ListItem>
                <ListItem>24 Karat Gold Used</ListItem>
            </List>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption> 75cm x 5cm </FilterSizeOption> 
                        
                    </FilterSize>
                    
                </Filter>
            </FilterContainer>
            <Price>$750.00</Price>
            <HorizontalLine />
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            

           
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default Product
