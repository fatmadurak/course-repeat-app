import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../../network/requests/ProductServices";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProductCard from "../../components/ProductCard";

function ProductList() {
  // İşlev adı büyük harfle başladı

  const { isLoading, error, data } = useQuery("products", getProducts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <Container maxWidth="lg" >
      <Grid container spacing={5}>
   
      {
  data.map((item) => (
    <Grid item lg={4} md={6} xs={12} key={item.id}>
      <ProductCard item={item} />
    </Grid>
  ))
}


      </Grid>
    </Container>
  );
}

export default ProductList;
