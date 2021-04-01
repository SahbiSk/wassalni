import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import PartenaireItem from "./PartenaireItem/PartenaireItem";
import useStyles from "./styles";

const Partenaire = () => {
  const classes = useStyles();
  const items = [
    {
      image: "https://source.unsplash.com/random",
      title: " title",
    },
    {
      image: "https://source.unsplash.com/random",
      title: " title",
    },
    {
      image: "https://source.unsplash.com/random",
      title: " title",
    },
  ];
  return (
    <Container maxWidth="md" className={classes.container}>
      <Container maxWidth="sm">
        <Typography
          variant="h3"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Partenaires
        </Typography>
        <Typography
          className={classes.paragraph}
          align="center"
          color="textSecondary"
          paragraph
        >
          Hello everyone this is a photo album and I'm trying to make this
          sentance as long as possible so we can see how it looks on the screen
        </Typography>
      </Container>

      <Grid container spacing={4}>
        {items.map((item, key) => (
          <PartenaireItem key={key} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

export default Partenaire;
