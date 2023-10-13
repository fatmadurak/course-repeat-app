import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";



function ProductCard({ item }) {
  return (
    <Card >
    <CardMedia
      sx={{ height: 250, width: '100%', objectFit: 'cover' }}
      image={item.images[0]}
     
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
       {item.title}
        </Typography>
      <Typography variant="body2" color="text.secondary">
       {item.description}
      </Typography>
    </CardContent>

  </Card>
  

  );
}

export default ProductCard;