import React, { Fragment, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import Tweets from "../tweets/Tweets";
import Tweet from "../tweet/Tweet";
import {
  getAllTweets,
  clearTweets,
  getTweetsByMe
} from "../../../redux/actions/tweet";
import { getFollowers, getFollowing } from "../../../redux/actions/profile";

const style = {
  Margin: {
    marginTop: 10
  },
  Loading: {
    marginBottom: 10
  }
};

const Dashboard = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const tweet = useSelector((state) => state.tweet);
  const { loading, tweets, error } = tweet;

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getAllTweets());
    // if (tweet.tweets.length === 0) dispatch(getAllTweets());
    dispatch(getAllTweets());
    dispatch(getAllTweets());
    dispatch(getFollowers());
    dispatch(getFollowing());
    console.log("dash");

    return () => {
      dispatch(clearTweets());
    };
  }, []);

  return (
    <Grid container justify='center' alignItems='center' style={style.Margin}>
      <Grid container direction='column' spacing={2} item xs={12} sm={7} md={4}>
        <Tweet />
        {loading || !tweets.length ? (
          <Fragment>
            <Skeleton
              variant='rect'
              style={style.Loading}
              animation='wave'
              height={200}
            />
            <Skeleton variant='rect' style={style.Loading} height={200} />
            <Skeleton
              variant='rect'
              style={style.Loading}
              animation='wave'
              height={200}
            />
          </Fragment>
        ) : (
          <Tweets tweets={tweets} />
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
