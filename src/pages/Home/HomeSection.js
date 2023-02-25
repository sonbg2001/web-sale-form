import React from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import ProductItem from "../../components/component/ProductItem/ProductItem";

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
          products.map((item) => {
            return <ProductItem key={item.id} product={item} />;
          })}
      </Slider>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

export default connect(mapStateToProps)(HomeSection);
