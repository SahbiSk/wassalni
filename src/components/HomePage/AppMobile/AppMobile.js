import React from "react";
import useStyles from "./styles";
import {
  Container,
  Grid,
  Typography,
  Button,
  ButtonGroup,
} from "@material-ui/core";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import mobile from "../../../image/mobile2.png";

const AppMobile = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6}>
            <Typography variant="h2" className={classes.firstTitle}>
              NATEG
            </Typography>
            <Typography
              variant="h4"
              className={classes.secondTitle}
              gutterBottom
            >
              APPLICATION MOBILE
            </Typography>
            <Typography color="textSecondary">
              une application mobile gratuite dédiée au projet une application
              mobile gratuite dédiée au projet une application mobile gratuite
              dédiée au projet une application mobile gratuite dédiée au projet
            </Typography>
            <ButtonGroup className={classes.buttonContainer}>
              <Button startIcon={<AndroidIcon />} className={classes.button}>
                Version Android
              </Button>
              <Button className={classes.button} startIcon={<AppleIcon />}>
                Version IOS
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img src={mobile} alt="img" className={classes.mobileApp} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AppMobile;
