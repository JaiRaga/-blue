import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";
import SideNav from "../layout/SideNav";
import Posts from "../social/Posts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
    // height: "100%"
  },
  container: {
    minHeight: "95vh"
  },
  sidenav: {
    background: "#ccc"
  },
  post: {
    background: "#666"
    // minHeight: "100%"
  },
  posts: {
    background: "#985"
  },
  onlineUsers: {
    background: "#888"
  }
}));

const SocialDashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Hidden smDown>
          <Grid item md={3} className={classes.sidenav}>
            <SideNav />
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6} className={classes.post}>
          {/* <Grid container item justify='center'>
            <Grid
              container
              xs={11}
              sm={7}
              md={11}
              item
              className={classes.posts}> */}
          <Posts />
          {/* </Grid>
          </Grid> */}
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
