import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SelectForm } from "../select/Select";
import { Search } from "./Search";

export function Header() {
  const { pathname } = useLocation();
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navbar-light"
      style={{ backgroundColor: "rgb(134, 146, 155)" }}
      variant="light"
    >
      <Container>
        <Navbar.Brand href="/" style={{ padding: "0" }}>
          <img
            src="../../public/assets/images/logo.png"
            className="d-inline-block align-top"
            alt="logo"
            style={{ width: "11%" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{ width: "45%" }}>
          <SelectForm />
          {pathname === "/" ? <Search /> : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
