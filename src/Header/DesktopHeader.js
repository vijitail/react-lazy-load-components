import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ marginLeft: "auto" }}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Our Services</Button>
        <Button color="inherit">Contact Us</Button>
        <Button color="inherit">About Us</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
