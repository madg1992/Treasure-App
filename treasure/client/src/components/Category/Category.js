import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import "./Category.css";

const Category = props => {
  return (
    <div>
      <Nav className="category-container fixed category-title">
        <NavItem className="nav-item">
          <NavLink href="#">Canon</NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink href="#">Nikon</NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink href="#">Sony</NavLink>
        </NavItem>
        <NavItem className="nav-item">
          <NavLink href="#">Pentax</NavLink>
        </NavItem>
      </Nav>
      <hr />
    </div>
  );
};

export default Category;
