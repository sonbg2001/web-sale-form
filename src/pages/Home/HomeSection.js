import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function HomeSection({ title, products }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className="home-section">
      <h2 className="home-section--title">{title}</h2>
      <Slider {...settings}>
        <div className="home-section--product">
          <div className="product-item">
            <img
              className="home-section--product__image w-100"
              src="https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg"
              alt=""
            />
            <Link className="home-section--product__link" to="/">
              <button>Truy cập</button>
            </Link>
          </div>
          <Link className="home-section--product__name" to="/">
            Tên sản phẩm
          </Link>
          <h3 className="home-section--price">156,000đ</h3>
        </div>
        <div className="home-section--product">
          <div className="product-item">
            <img
              className="home-section--product__image w-100"
              src="https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg"
              alt=""
            />
            <Link className="home-section--product__link" to="/">
              <button>Truy cập</button>
            </Link>
          </div>
          <Link className="home-section--product__name" to="/">
            Tên sản phẩm
          </Link>
          <h3 className="home-section--price">156,000đ</h3>
        </div>
        <div className="home-section--product">
          <div className="product-item">
            <img
              className="home-section--product__image w-100"
              src="https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg"
              alt=""
            />
            <Link className="home-section--product__link" to="/">
              <button>Truy cập</button>
            </Link>
          </div>
          <Link className="home-section--product__name" to="/">
            Tên sản phẩm
          </Link>
          <h3 className="home-section--price">156,000đ</h3>
        </div>
        <div className="home-section--product">
          <div className="product-item">
            <img
              className="home-section--product__image w-100"
              src="https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg"
              alt=""
            />
            <Link className="home-section--product__link" to="/">
              <button>Truy cập</button>
            </Link>
          </div>
          <Link className="home-section--product__name" to="/">
            Tên sản phẩm
          </Link>
          <h3 className="home-section--price">156,000đ</h3>
        </div>
        <div className="home-section--product">
          <div className="product-item">
            <img
              className="home-section--product__image w-100"
              src="https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg"
              alt=""
            />
            <Link className="home-section--product__link" to="/">
              <button>Truy cập</button>
            </Link>
          </div>
          <Link className="home-section--product__name" to="/">
            Tên sản phẩm
          </Link>
          <h3 className="home-section--price">156,000đ</h3>
        </div>
        <div className="home-section--product">
          <div className="product-item">
            <img
              className="home-section--product__image w-100"
              src="https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg"
              alt=""
            />
            <Link className="home-section--product__link" to="/">
              <button>Truy cập</button>
            </Link>
          </div>
          <Link className="home-section--product__name" to="/">
            Tên sản phẩm
          </Link>
          <h3 className="home-section--price">156,000đ</h3>
        </div>
        <div className="home-section--product">
          <div className="product-item">
            <img
              className="home-section--product__image w-100"
              src="https://product.hstatic.net/200000182297/product/146_fd4a216ed8f94b4ea120a07ff8098e44_1024x1024.jpg"
              alt=""
            />
            <Link className="home-section--product__link" to="/">
              <button>Truy cập</button>
            </Link>
          </div>
          <Link className="home-section--product__name" to="/">
            Tên sản phẩm
          </Link>
          <h3 className="home-section--price">156,000đ</h3>
        </div>
      </Slider>
    </section>
  );
}

export default HomeSection;
