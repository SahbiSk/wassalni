import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import DirectionsTransitIcon from "@material-ui/icons/DirectionsTransit";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import React from "react";
import useStyles from "./styles";
import CountUp from "react-countup";

const MoyenneDeTransport = () => {
  const classes = useStyles();

  const generateRandomNumber = () => {
    let n = Math.floor(Math.random() * 10) * 1000;
    while (!n) {
      n = Math.floor(Math.random() * 10) * 1000;
    }
    return n;
  };

  const items = [
    {
      icon: <DirectionsTransitIcon className={classes.iconContent} />,
      name: "Train",
      number: generateRandomNumber(),
    },
    {
      icon: <DirectionsBusIcon className={classes.iconContent} />,
      name: "Bus",
      number: generateRandomNumber(),
    },
    {
      icon: <AirportShuttleIcon className={classes.iconContent} />,
      name: "Louage",
      number: generateRandomNumber(),
    },
  ];

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography
        variant="h2"
        align="center"
        color="textPrimary"
        className={classes.title}
      >
        Moyens de Transport
      </Typography>
      <Typography color="textSecondary">
        une application mobile gratuite dédiée au projet une application mobile
        gratuite dédiée au projet une application mobile gratuite dédiée au
        projet une application mobile gratuite dédiée au projet
      </Typography>
      <Grid container spacing={2} className={classes.cardContainer}>
        {items.map((item, key) => (
          <Grid item key={key} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia className={classes.icon} align="center">
                {item.icon}
              </CardMedia>
              <CardContent>
                <Typography color="textSecondary" variant="h6" align="center">
                  <CountUp end={item.number} duration={2} /> +
                </Typography>
                <Typography
                  gutterBottom
                  variant="h4"
                  color="textPrimary"
                  align="center"
                >
                  {item.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MoyenneDeTransport;
