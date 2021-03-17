import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "../UserInfo/UserInfo";
import { useLocation } from "react-router-dom";
import { SelectForm } from "../select/Select";
import { Search } from "./Search";

interface HeaderProps {
  onLogInClick: () => void;
}

export function Header(props: HeaderProps) {
  const { pathname } = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <h1>TRAVEL APP</h1>
        </a>
        <div className="d-flex flex-wrap">
          <div className="d-flex mr-1">
            <SelectForm />
            {pathname.includes("country") ? null : <Search />}
          </div>
          <div className="d-flex">
            <UserInfo onLogInClick={props.onLogInClick} />
          </div>
        </div>
      </div>
    </nav>
  );
}
