import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { SelectForm } from "../select/Select";
import { Search } from "./Search";

export function Header() {
  const { pathname } = useLocation();
  console.log(location);
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <h1>TRAVEL APP</h1>
        </a>
        <div className="d-flex">
          <div className="d-flex mr-1">
            <SelectForm />
            {pathname.includes("country") ? null : <Search />}
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-secondary mr-1">Sign In </button>
            <button className="btn btn-outline-secondary mr-1">Sign Un </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
