import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.css";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

function Navbar() {
  return (


    <>
    <ul className={Styles.nav_list}>
      <li className={Styles.nav_item}>
        <Link to="/">LOGO</Link>
        <Link to="/">Products</Link>
      </li>
    
      <div className={Styles.buttons}>
      <Button
       component={Link}
       to="/sign_in"
       variant="contained"
       color="secondary"
       size="medium"
     >
       LOGIN{" "}
     </Button>
     <Button
       component={Link}
       to="/sign_up"
       variant="contained"
       color="secondary"
       size="medium"
     >
       REGISTER
     </Button>
      </div>
 
    </ul>
      

      
   
     </>


  );
}

export default Navbar;
