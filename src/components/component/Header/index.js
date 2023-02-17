import "./Header.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FaUserCircle, FaPhone, FaHome } from "react-icons/fa";
import { AiTwotoneShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { FaPhone } from "react-icons/io";

function Header() {
  window.onscroll = function () {
    console.log();
    var headerMain = document.querySelector(".header-main");
    if (window.scrollY > 29) {
      headerMain.classList.add("header-position-fixed");
    } else headerMain.classList.remove("header-position-fixed");
  };

  //
  // var sticky = header.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset > sticky) {
  //     header.classList.add("sticky");
  //   } else {
  //     header.classList.remove("sticky");
  //   }
  // }
  return (
    <div id="header">
      <div className="header-top inner ">
        <p>
          <i>
            <FaHome />
          </i>
          Hệ thống cửa hàng
        </p>
        <p>
          <i>
            <FaPhone />
          </i>
          Mua hàng online: 0123456789
        </p>
      </div>
      <Navbar expand="xl " className="header-main inner mb-3">
        <Container fluid className="p-0">
          <Navbar.Brand id="header-logo" href="/">
            LogoBrand
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3">
                <Nav.Link href="/">Trang chủ</Nav.Link>
                <NavDropdown
                  title="Sản phẩm"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Sản phẩm mới</Nav.Link>
                <Nav.Link href="/">Bộ sưu tập</Nav.Link>
                <Nav.Link href="/">Đánh giá </Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Tìm</Button>
              </Form>

              <Nav.Link href="/">
                <div className="header-main--end">
                  <i className="icon">
                    <FaUserCircle />
                  </i>
                  <p className="header-main--end__title">Tài khoản</p>
                </div>
              </Nav.Link>

              <Link className="header-main--end" to="/">
                <i className="icon">
                  <AiTwotoneShopping />
                </i>
                <p className="header-main--end__title">Giỏ hàng</p>
              </Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
