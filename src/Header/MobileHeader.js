import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <Drawer open={isDrawerOpen} onClose={() => setDrawerOpen(!isDrawerOpen)}>
        <List style={{ width: 250 }}>
          {["Home", "Our Services", "Contact Us", "About Us"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <AppBar style={{ padding: "5px 16px" }} position="static">
        <IconButton
          style={{ marginRight: "auto" }}
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
    </>
  );
};

export default Header;
