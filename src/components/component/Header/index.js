import "./Header.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import Offcanvas from "react-bootstrap/Offcanvas";

import { FaPhone, FaHome } from "react-icons/fa";
import { AiTwotoneShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import paths from "../../../routes/paths";

function Header() {
  window.onscroll = function () {
    // console.log(window.scrollY);
    var headerMain = document.querySelector(".header-main");
    if (window.scrollY > 29) {
      headerMain.classList.add("header-position-fixed");
    } else headerMain.classList.remove("header-position-fixed");
  };

  return (
    <div id="header">
      <div className="header-top inner ">
        <p>
          <i>
            <FaHome />
          </i>
          Hệ thống cửa hàng toàn quốc
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
          <Navbar.Brand as={Link} id="header-logo" to="/">
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
                <Nav.Link as={Link} to="/">
                  Trang chủ
                </Nav.Link>

                <NavDropdownMenu title="Sản phẩm" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/products">
                    Tất cả sản phẩm
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <DropdownSubmenu as={Link} to="#action/3.7" title="Áo sơ mi">
                    <NavDropdown.Item as={Link} to="#action/8.1">
                      Áo sơ mi
                    </NavDropdown.Item>

                    <DropdownSubmenu as={Link} to="#action/3.7" title="Áo dài">
                      <NavDropdown.Item as={Link} to="#action/9.1">
                        Sub 2
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>

                  <DropdownSubmenu as={Link} to="#action/3.7" title="Quần">
                    <NavDropdown.Item as={Link} to="#action/8.1">
                      Quần ngắn
                    </NavDropdown.Item>
                    <DropdownSubmenu
                      as={Link}
                      to="#action/3.7"
                      title="Quần dài"
                    >
                      <NavDropdown.Item as={Link} to="#action/9.1">
                        Sub 2
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>
                  <DropdownSubmenu as={Link} to="#action/3.7" title="Quần">
                    <NavDropdown.Item as={Link} to="#action/8.1">
                      Quần ngắn
                    </NavDropdown.Item>
                    <DropdownSubmenu
                      as={Link}
                      to="#action/3.7"
                      title="Quần dài"
                    >
                      <NavDropdown.Item as={Link} to="#action/9.1">
                        Sub 2
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>
                  <DropdownSubmenu as={Link} to="#action/3.7" title="Quần">
                    <NavDropdown.Item as={Link} to="#action/8.1">
                      Quần ngắn
                    </NavDropdown.Item>
                    <DropdownSubmenu
                      as={Link}
                      to="#action/3.7"
                      title="Quần dài"
                    >
                      <NavDropdown.Item as={Link} to="#action/9.1">
                        Sub 2
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>
                  <DropdownSubmenu as={Link} to="#action/3.7" title="Quần">
                    <NavDropdown.Item as={Link} to="#action/8.1">
                      Quần ngắn
                    </NavDropdown.Item>
                    <DropdownSubmenu
                      as={Link}
                      to="#action/3.7"
                      title="Quần dài"
                    >
                      <NavDropdown.Item as={Link} to="#action/9.1">
                        Sub 2
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>
                  <DropdownSubmenu as={Link} to="#action/3.7" title="Quần">
                    <NavDropdown.Item as={Link} to="#action/8.1">
                      Quần ngắn
                    </NavDropdown.Item>
                    <DropdownSubmenu
                      as={Link}
                      to="#action/3.7"
                      title="Quần dài"
                    >
                      <NavDropdown.Item as={Link} to="#action/9.1">
                        Sub 2
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>
                  <DropdownSubmenu as={Link} to="#action/3.7" title="Quần">
                    <NavDropdown.Item as={Link} to="#action/8.1">
                      Quần ngắn
                    </NavDropdown.Item>
                    <DropdownSubmenu
                      as={Link}
                      to="#action/3.7"
                      title="Quần dài"
                    >
                      <NavDropdown.Item as={Link} to="#action/9.1">
                        Sub 2
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>
                </NavDropdownMenu>
                <NavDropdown
                  title="Thương hiệu"
                  id={`offcanvasNavbarDropdown-expand-sm`}
                >
                  <NavDropdown.Item as={Link} to="/action3">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/products">
                    Tất cả thương hiệu
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to="/">
                  Sản phẩm mới
                </Nav.Link>
                <Nav.Link as={Link}>Bộ sưu tập</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="me-2"
                  aria-label="Search"
                  spellCheck="false"
                />
                <Button variant="outline-success">Tìm</Button>
              </Form>

              <Nav.Item>
                <div className="header-main--end">
                  <div className="header-user-avatar">
                    <img
                      className="header-user-avatar-img"
                      src={
                        false
                          ? "https://www.invert.vn/media/uploads/uploads/2022/12/03194208-8-anh-gai-xinh-goi-cam.jpeg"
                          : "https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook.jpg"
                      }
                      alt="avatar"
                    />
                  </div>
                  <div className="header-main--end__title">
                    {false ? (
                      <NavDropdown title="Nguyễn Văn Sơn">
                        <NavDropdown.Item as={Link} to="/action3">
                          Thông tin tài khoản
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action4">
                          Lịch sử mua hàng
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/">
                          Đăng suất
                        </NavDropdown.Item>
                      </NavDropdown>
                    ) : (
                      <NavDropdown title="Tài khoản">
                        <NavDropdown.Item as={Link} to="/action3">
                          Đăng nhập
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="#action4">
                          Đăng ký
                        </NavDropdown.Item>
                      </NavDropdown>
                    )}
                  </div>
                </div>
              </Nav.Item>

              <Nav.Link as={Link} to={paths.cart}>
                <div className="header-main--end">
                  <i className="icon">
                    <AiTwotoneShopping />
                  </i>
                  <p className="header-main--end__title">Giỏ hàng(1)</p>
                </div>
              </Nav.Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
