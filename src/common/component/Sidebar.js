import React, { useState } from "react";
import { Offcanvas, Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleSelectMenu = (url) => {
    setShow(false);
    navigate(url);
  };

  const NavbarContent = () => {
    return (
      <div>
        <Link to="/">
          <img
            src="/image/blankspace-logo.png"
            alt="logo.png"
            style={{
              display: "block",
              margin: "0px auto 20px auto",
              width: "60%",
            }}
          />
        </Link>
        <div className="sidebar-item">Admin Account</div>

        <div
          className="sidebar-item"
          onClick={() => handleSelectMenu("/admin/product?page=1")}
        >
          Product
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleSelectMenu("/admin/order?page=1")}
        >
          Order
        </div>
        <div
          className="sidebar-item"
          onClick={() => handleSelectMenu("/admin/notices")}
        >
          Notice
        </div>
      </div>
    );
  };


  return (
    <>
      <div className="sidebar-toggle">{NavbarContent()}</div>

      <Navbar bg="light" expand={false} className="mobile-sidebar-toggle">
        <Container fluid>
          <img width={80} src="/image/blankspace.png" alt="blankspace.png" />
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand"
            onClick={() => setShow(true)}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="start"
            className="sidebar"
            show={show}
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>{NavbarContent()}</Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;