import { CssBaseline } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel/Carousel";
import "./HomePage.css";
import Partenaire from "./Partenaires/Partenaire";
import AppMobile from "./AppMobile/AppMobile";
import MoyenneDeTransport from "./MoyenneDeTransport/MoyenneDeTransport";

const HomePage = () => {
  const t = [];
  for (let i = 0; i < 500; i++) {
    t.push(i);
  }

  return (
    <div>
      <CssBaseline />
      <Carousel />
      <Partenaire />
      <AppMobile />
      <MoyenneDeTransport />
    </div>
  );
};

export default HomePage;
