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
          <strong>TRAVEL APP</strong>
        </a>
        <div className="d-flex">
          <div className="d-flex">
            <SelectForm />
            {pathname.includes("country") ? null : <Search />}
          </div>
          <div className="d-flex">
            <button className="btn btn-outline-secondary">Sign In </button>
            <button className="btn btn-outline-secondary">Sign Un </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
