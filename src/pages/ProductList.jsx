import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
    margin: 50px 20px 20px 20px;

`;
const FilterContainer =styled.div`
    display: flex;
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;

    ${mobile`
      
      
       padding-bottom: 20px;
     `}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-top: 5px;
`;
const  Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Thangkas</Title>
      <FilterContainer>
        <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>All Thangka</Option>
                <Option>Mandala</Option>
                <Option>Single Figure</Option>
                <Option>Alphabetically, A-Z </Option>
                <Option>Alphabetically, Z-A </Option>
            </Select>
        </Filter>
        <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
                <Option disabled selected>Newest</Option>
                <Option>Best Selling</Option>
                <Option>Price Low to High</Option>
                <Option>Price High to Low</Option>
            </Select>
        </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </Container>
  );
};

export default ProductList;
