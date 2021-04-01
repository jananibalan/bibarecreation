import React from "react";
import BuyCard from "../card/buycard";
import { res } from "../data/data";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function DesignerPick(props) {
  return (
    <div class="my-3 dressfont">
      <h4 class="px-md-5 px-3">{props.heading}</h4>
      <div class="container">
        <OwlCarousel
          className="owl-theme nav-btn"
          loop={false}
          startPosition={1}
          slideBy={1}
          margin={0}
          nav={true}
          dots={false}
          autoplay={false}
          items={1}
          navText={[
            "<span class='material-icons'>keyboard_arrow_left</span>",
            "<span class='material-icons'>keyboard_arrow_right</span>"
          ]}
          responsive={res}
        >
          {props.array.map((item, i) => {
            return (
              <BuyCard
                src={item.src}
                caption={item.caption}
                price={item.price}
                originalprice={item.originalprice}
                discount={item.discount}
                key={i}
              />
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
}
export default DesignerPick;
