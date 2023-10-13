import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

function ProductCard({ product }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={8} >
      <Card>
        <Link to={`/products/${product.id}`}>
          <CardMedia
            component="img"
            height="140"
            image={product.images[0]}
            alt={product.title}
          />
        </Link>
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCard;