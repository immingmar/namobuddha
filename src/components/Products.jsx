import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map(item => (
        // Loop through each item in the popularProducts array //popularProducts array is in data.js
        <Product item = {item} key = {item.id}/>
        // For each item, render the Product component
        // Pass the current item as a prop to the Product component
        // Assign a unique key using the item's id for efficient rendering
      ))}
    </Container>
  )
}

export default Products
