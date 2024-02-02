import React from "react";
import "./Navbar.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="left">
            <div className="navlogo">
              <NavLink to={"/"}>
              <img src="./amazon_PNG25.png" alt="" />
              </NavLink>
            </div>
            <div className="nav_searchbaar">
              <input type="text" name="" id="" />
              <div className="search_icon">
                <SearchRoundedIcon id="search" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="nav_btn">
              <NavLink to="/login">Sign In</NavLink>
            </div>
            <div className="cart_btn">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlinedIcon color="primary"/>
              </Badge>
              <p>Cart</p>
            </div>
            <Avatar className="avatar"/>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
