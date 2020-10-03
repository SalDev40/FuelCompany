import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Grid,
  makeStyles,
  Typography,
  Link,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({}));

function AboutPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{
        marginTop: 10,
      }}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid xs={12} item>
        <Typography variant="h2">About</Typography>
      </Grid>
      <Grid
        xs={12}
        item
        style={{
          marginTop: 20,
          paddingLeft: 10,
        }}
      >
        <Typography variant="h4">Meet the Team?</Typography>
        <p
          style={{
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
        </p>
      </Grid>
      <Grid
        xs={12}
        item
        style={{
          marginTop: 20,
          paddingLeft: 10,
        }}
      >
        <Typography variant="h4">What We Do?</Typography>
        <p
          style={{
            marginTop: 20,
            paddingLeft: 10,
          }}
        >
          Fuel Stuff was founded in the year of 2020, during the world wide
          COVID-19 pendemic. Given the circumstances, the company was able to
          triumph and become what it is today. Our mission is to do whatever we
          can to provide our costumers with the best quality fuel on the market.
          Using our highly advanced scientific calculations, we can give
          appropriate and affordable fuel quotes to our clinets no matter where
          they are.
        </p>
      </Grid>
    </Grid>
  );
}

export default AboutPage;
