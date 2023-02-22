import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { connect } from "react-redux";
import { formatCash } from "../../format";

function HomeSection({ title, products, ...props }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="home-section">
      <h2 className="home-section--title">{title}</h2>
      <Slider {...settings}>
        {products &&
          products.map((product) => {
            return (
              <div key={product.id} className="home-section--product">
                <div className="product-item">
                  <img
                    className="home-section--product__image w-100"
                    src={product.images[0]}
                    alt=""
                  />
                  <Link
                    className="home-section--product__link"
                    to={`/products/${product.id}`}
                  >
                    <button>Truy cập</button>
                  </Link>
                </div>
                <Link
                  className="home-section--product__name"
                  to={`/products/${product.id}`}
                >
                  {product.name}
                </Link>
                <h3 className="home-section--price">
                  {formatCash(product.price + "")}đ
                </h3>
              </div>
            );
          })}
      </Slider>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps)(HomeSection);
