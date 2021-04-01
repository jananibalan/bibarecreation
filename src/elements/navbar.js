import React from "react";

function Navbar() {
  return (
    <div class="sticky-top">
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ background: "white" }}
      >
        <a class="" href="https://www.biba.in/">
          <img
            src="https://storage.sg.content-cdn.io/in-resources/6c57599f-2c43-4c82-806a-e07c3410f5d3/Images/userimages/logo.png"
            alt="..."
            class=""
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <form class="form-inline mt-2" id="navBarSearchForm">
            <div class="input-group mb-3">
              <input
                type="text"
                class="nav-search form-control"
                placeholder="What are you looking for?"
                aria-label="What are you looking for?"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="input-group-text bg-white" id="basic-addon2">
                  <span class="material-icons" style={{ fontSize: "12px" }}>
                    search
                  </span>
                </button>
              </div>
            </div>
          </form>
          <button
            class="btn btn-sm px-3 text-white navbar-mybutton"
            type="button"
            style={{ backgroundColor: "#B21F29", fontWeight: "bold" }}
          >
            LOGIN
          </button>
          <button
            class="btn btn-sm px-3 text-white mx-1 navbar-mybutton"
            type="button"
            style={{ backgroundColor: "#B21F29", fontWeight: "bold" }}
          >
            REGISTER
          </button>
          <ul class="nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href=" "
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span class="material-icons" style={{ color: "black" }}>
                  shopping_bag
                </span>
              </a>
              <div
                class="dropdown-menu"
                style={{ backgroundColor: "#F7F7F7" }}
              ></div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
