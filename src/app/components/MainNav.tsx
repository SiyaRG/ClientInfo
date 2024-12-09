"use client";
import "../../../../node_modules/bootstrap/dist/js/bootstrap.esm";

import Link from "next/link";
import "./mainNav.css";
import {
  Nav,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarToggle,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "react-bootstrap";

const MainNav = () => {
  return (
    <nav
      id="mainNav"
      className="navbar navbar-expand-lg bg-slate-100 sticky-top flex"
    >
      <div id="chilzBrand" className="container-fluid w-50 m-0">
        <a
          id="cTitle"
          style={{
            color: "rgb(30 64 175 / var(--tw-text-opacity, 1)",
            marginLeft: "2rem",
          }}
          className="navbar-brand text-blue-800 "
          href="/"
        >
          <img
            style={{ marginRight: ".5rem" }}
            src="../favicon.ico"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Chilzy Holdings
        </a>
      </div>
      <NavbarToggle
        style={{
          border: "none",
          backgroundColor: "black",
          borderRadius: "0",
          marginRight: "1rem",
        }}
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </NavbarToggle>
      <div
        style={{ background: "#f1f5f9" }}
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <OffcanvasHeader className="offcanvas-header">
          <h5
            style={{ color: "#374151" }}
            className="offcanvas-title"
            id="offcanvasNavbarLabel"
          >
            Menu
          </h5>
          <button
            style={{ color: "black" }}
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </OffcanvasHeader>
        <OffcanvasBody className="offcanvas-body">
          <ul
            id="navList"
            className="navbar-nav justify-content-end flex-grow-1 pe-3 pr-10"
          >
            <li className="nav-item">
              <Link
                style={{
                  color: "#2563eb",
                  fontWeight: "normal",
                  backgroundColor: "rgb(241 245 249",
                }}
                className="nav-link"
                aria-current="page"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "#2563eb",
                  fontWeight: "normal",
                  backgroundColor: "rgb(241 245 249",
                }}
                className="nav-link"
                href="/about"
              >
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Dropdown className="dropdown">
                <DropdownToggle
                  id="mainToggle"
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  type="button"
                  style={{
                    color: "#2563eb",
                    fontWeight: "normal",
                    backgroundColor: "rgb(241 245 249",
                  }}
                >
                  Services
                </DropdownToggle>
                <DropdownMenu id="dMenu">
                  <>
                    <Link
                      style={{
                        color: "#2563eb",
                        fontWeight: "normal",
                        backgroundColor: "rgb(241 245 249",
                      }}
                      className="dropdown-item nav-link"
                      href="/education"
                    >
                      Education
                    </Link>
                  </>

                  <>
                    <Link
                      style={{
                        color: "#2563eb",
                        fontWeight: "normal",
                        backgroundColor: "rgb(241 245 249",
                      }}
                      className="dropdown-item nav-link"
                      href="/construction"
                    >
                      Costruction
                    </Link>
                  </>

                  <>
                    <Link
                      style={{
                        color: "#2563eb",
                        fontWeight: "normal",
                        backgroundColor: "rgb(241 245 249",
                      }}
                      className="dropdown-item nav-link"
                      href="/technical"
                    >
                      Technical Solutions
                    </Link>
                  </>
                </DropdownMenu>
              </Dropdown>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "#2563eb",
                  fontWeight: "normal",
                  backgroundColor: "rgb(241 245 249",
                }}
                className="nav-link"
                href="/news"
              >
                News & Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "#2563eb",
                  fontWeight: "normal",
                  backgroundColor: "rgb(241 245 249",
                  marginRight: "1.5rem",
                }}
                className="nav-link"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </OffcanvasBody>
      </div>
    </nav>
  );
};

export default MainNav;
