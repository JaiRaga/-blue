import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    // height: "100%"
  },
  container: {
    minHeight: "95vh"
  },
  children: {
    background: "#666"
    // minHeight: "100%"
  }
}));

const SocialDashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container} alignItems='stretch'>
        <Hidden smDown>
          <Grid item md={3} className={classes.sidenav}>
            Side nav
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6} className={classes.children}>
          Main Content
        </Grid>
        <Hidden smDown>
          <Grid item md={3} className={classes.onlineUsers}>
            Live reload
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default SocialDashboard;
