import React from "react";

function BuyCard(props) {
  let discount = { display: "inline" };
  if (props.discount === "") {
    discount = { display: "none" };
  }
  return (
    <div
      class="card carder border-0"
      style={{
        width: "250px",
        height: "450px",
        overflow: "hidden",
        float: "left"
      }}
    >
      <img
        src={props.src}
        class="card-img-top"
        alt="..."
        style={{ width: "250px", height: "350px" }}
      />

      <div class="card-body text-center ">
        <p class="card-text text-dark" style={{ fontSize: "12px" }}>
          {props.caption}
        </p>
        <p class="card-text">
          <span class="price">&#8377;{props.price}&nbsp;</span>
          <span class="originalprice" style={discount}>
            &#8377;{props.originalprice}
          </span>
          <span>
            &nbsp;(
            <span class="discount text-secondary" style={discount}>
              {props.discount}
            </span>
            % OFF)
          </span>
        </p>
      </div>
    </div>
  );
}

export default BuyCard;
