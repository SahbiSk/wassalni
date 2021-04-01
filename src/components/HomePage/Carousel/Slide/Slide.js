import { Typography } from "@material-ui/core";
import React from "react";
import "./Slide.css";

const Slide = ({ item, styles }) => {
  const { bg, description, title } = item;
  return (
    <div className={styles}>
      <img src={bg} alt="img" />
      <div className="carousel_slide-item--content">
        <Typography variant="h3" gutterBottom align="left">
          {title}
        </Typography>
        <Typography paragraph variant="caption">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default Slide;
