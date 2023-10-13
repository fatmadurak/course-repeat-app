import React from "react";
import { useQuery } from "react-query";
import ProductCard from "../../components/ProductCard";
import Grid from "@mui/material/Grid";
import { getProducts } from "../../network/requests/ProductServices";

function ProductList() {
  const { isLoading, error, data } = useQuery("products", getProducts);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (data) {
    return (
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid item xs={4} key={item.id}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    );
  }

  return null;
}

export default ProductList;