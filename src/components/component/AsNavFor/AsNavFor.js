import React, { Component } from "react";
import Slider from "react-slick";
import "./AsNavFor.scss";
export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
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
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
              alt=""
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract01.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract02.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract03.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://s3.amazonaws.com/static.neostack.com/img/react-slick/abstract04.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
