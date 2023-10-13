import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";


function Navbar() {
  return (
    <Container maxWidth="lg">
    <AppBar position="sticky" sx={{ background: '#fff' }}> 
   
        <Toolbar disableGutters>
          <Typography   
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }} >
            <Link to="/" style={{textDecoration:"none"}}>LOGO</Link>
          </Typography >

          <Typography  variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
            
            }}>
            <Link to="/" style={{textDecoration:"none"}}>PRODUCTS</Link>
          </Typography>
        </Toolbar>
   
    </AppBar>
    </Container>
  );
}

export default Navbar;
