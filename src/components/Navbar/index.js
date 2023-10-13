import React from "react";
import { Link } from "react-router-dom";
import Styles from "./styles.module.css";
import Button from '@mui/material/Button';

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">LOGO</Link>
      </li>
      <li>
        <Link to="/">Product List</Link>
      </li>
      <li>
        <Button component={Link} to="/some-page" variant="contained" size="medium">
          Medium
        </Button>
        <Button component={Link} to="/another-page" variant="contained" size="medium">
          Medium
        </Button>
      </li>
    </ul>
  );
}

export default Navbar;