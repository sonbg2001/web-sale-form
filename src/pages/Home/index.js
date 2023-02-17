import { Link } from "react-router-dom";
import Slider from "../../components/component/Slider";

import "./Home.scss";
import HomeSection from "./HomeSection";

function Home() {
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

      <HomeSection title={"Sản phẩm mới"} products={["soo", "2", "3"]} />
      <HomeSection title={"Sản phẩm bán chạy"} products={["soo", "2", "3"]} />
      <div>
        <img
          className="w-100"
          src="https://theme.hstatic.net/200000182297/1000887316/14/hb_image1.jpg?v=468"
          alt=""
        />
      </div>
      <HomeSection title={"Blog"} products={["soo", "2", "3"]} />
    </div>
  );
}

export default Home;
