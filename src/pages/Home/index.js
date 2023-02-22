import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Slider from "../../components/component/Slider";
import "./Home.scss";
import HomeSection from "./HomeSection";

function Home({ ...props }) {
  return (
    <div className="home-wrapper">
      <Slider />
      <div className="home-image">
        <Link to="/">
          <img
            src="https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_1.jpg?v=468"
            alt=""
          />
          Trend coat
        </Link>
        <Link to="/">
          <img
            src="https://theme.hstatic.net/200000182297/1000887316/14/home_new_banner_2.jpg?v=468"
            alt=""
          />
          Dress
        </Link>
      </div>

      <HomeSection title={"Sản phẩm mới"} products />
      <HomeSection title={"Sản phẩm bán chạy"} products />
      <div>
        <img
          className="w-100"
          src="https://theme.hstatic.net/200000182297/1000887316/14/hb_image1.jpg?v=468"
          alt=""
        />
      </div>
      <HomeSection title={"Blog"} products />
    </div>
  );
}

const mapStateToProps = (state) => {
  return { products: state.products };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortProduct: (sort) => dispatch({ type: "SORT_PRODUCTS", payload: sort }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
