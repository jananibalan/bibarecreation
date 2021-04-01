import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Banner() {
  return (
    <OwlCarousel
      className="owl-theme nav-btn"
      loop={true}
      startPosition={3}
      slideBy={1}
      margin={0}
      nav={true}
      dots={false}
      autoplay={true}
      items={1}
      navText={[
        "<span class='material-icons md-36 mycolor myborder-left'>keyboard_arrow_left</span>",
        "<span class='material-icons md-36 mycolor myborder-right'>keyboard_arrow_right</span>"
      ]}
    >
      <a href="https://www.biba.in/special-discount-upto-50p-off">
        <img
          src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/up502.jpg"
          alt="..."
        />
      </a>
      <a href="https://www.biba.in/summer-special">
        <img
          src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-3-21/summer.jpg"
          alt="..."
        />
      </a>
      <a href="https://www.biba.in/new-arrivals">
        <img
          src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/ss213.jpg"
          alt="..."
        />
      </a>
      <a href="https://www.biba.in/new-arrivals/girls">
        <img
          src="https://storage.sg.content-cdn.io/cdn-cgi/image/width=1800,height=490,quality=75,format=auto/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/home-page-banners/1-2-2021/girls2.jpg"
          alt="..."
        />
      </a>
    </OwlCarousel>
  );
}
export default Banner;
