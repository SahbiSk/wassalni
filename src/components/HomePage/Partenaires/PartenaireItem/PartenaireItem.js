import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

const PartenaireItem = ({ image, title,  }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card>
        <CardMedia className={classes.cardMedia} title="hello" image={image} />
        <CardContent>
          <Typography
            align="center"
            variant="h5"
            color="textPrimary"
            gutterBottom
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PartenaireItem;
