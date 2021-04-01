import React from "react";
import ReactDOM from "react-dom";
import Footer from "./elements/footer";
import SimpleText from "./elements/textcontent";
import DesignerPick from "./elements/designpick";
import Compliment from "./elements/compliment";
import Wardrobeguide from "./elements/wardrobeguide";
import NewlyIntroduced from "./elements/newlyintroduced";
import Spring from "./elements/springsummer";
import Banner from "./elements/banner";
import Navbar from "./elements/navbar";
import { design, season } from "./data/data";
import "./styles.css";
function Biba() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Spring />
      <NewlyIntroduced />
      <Wardrobeguide />
      <Compliment />
      <DesignerPick heading="SEASON'S BESTSELLERS" array={season} />
      <DesignerPick heading="DESIGNER'S PICK" array={design} />
      <SimpleText />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Biba />, document.getElementById("root"));
