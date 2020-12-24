import React from "react";
import { Grid, makeStyles, Paper, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#8bcdcd",
    marginTop: 15
    // padding: 7
  }
}));

const CommentsCount = () => {
  const classes = useStyles();
  return (
    <Paper elevation={24}>
      <Grid container item className={classes.container}>
        <Button>5 Comments</Button>
      </Grid>
    </Paper>
  );
};

export default CommentsCount;
