import { Grid, Typography } from "@material-ui/core";
import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import usestyles from "./styles";
import "./footer.css";

const Footer = () => {
  const classes = usestyles();

  const icons = [
    <AiFillFacebook
      className={classes.icon}
      onClick={() =>
        (document.location.href = "https://www.facebook.com/nategissatso")
      }
    />,
    <AiFillLinkedin
      className={classes.icon}
      onClick={() =>
        (document.location.href =
          "https://www.linkedin.com/in/nateg-issatso-student-chapter-47495a201/")
      }
    />,
    <AiOutlineInstagram
      className={classes.icon}
      onClick={() =>
        (document.location.href = "https://www.instagram.com/nateg_issatso/")
      }
    />,
  ];

  return (
    <Grid container className={classes.footer} spacing={3}>
      <Grid item className={classes.logoContainer} xs={12} sm={6}>
        <img
          className={classes.logo}
          alt="logo"
          src={
        "https://scontent.ftun7-1.fna.fbcdn.net/v/t1.15752-9/123184820_2800024546909173_6756809092563425750_n.png?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=flSMYS7ROoUAX-WDh-O&_nc_ht=scontent.ftun7-1.fna&oh=8f0b9a165f6e7cdd758fe1fed0e44afc&oe=60AA2574"    }
          onClick={() => (window.location.href = "http://nateg.org/index.html")}
        />
      </Grid>
      <Grid item className={classes.iconSection} xs={12} sm={6}>
        <Typography
          align="center"
          variant="h5"
          gutterBottom
          className={classes.lorem}
        >
          Reach us at :
        </Typography>
        <Grid container spacing={3} className={classes.iconContainer}>
          {icons.map((el, i) => (
            <Grid key={i} item>
              {el}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
