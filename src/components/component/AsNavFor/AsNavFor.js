import React, { Component } from "react";
import Slider from "react-slick";
import "./AsNavFor.scss";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.product = props.product[0];
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
        >
          {this.product.images &&
            this.product.images.map((img, index) => {
              return (
                <div
                  style={{
                    height: "324px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000",
                  }}
                  key={index}
                >
                  <img
                    style={{
                      height: "600px",
                      width: "100%",
                      objectFit: "contain",
                      backgroundColor: "black",
                    }}
                    src={img}
                    alt=""
                  />
                </div>
              );
            })}
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {this.product.images &&
            this.product.images.map((img, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: "black",
                  }}
                >
                  <img
                    src={img}
                    style={{
                      height: "300px",
                      width: "100%",
                      backgroundColor: "black",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </div>
              );
            })}
        </Slider>
      </div>
    );
  }
}
