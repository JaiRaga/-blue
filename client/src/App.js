import React, { useEffect, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

// Routes
import PrivateRoute from "./components/routing/PrivateRoute";

// Micro Blogging Components
import Navbar from "./components/microblogging/layout/Navbar";
import Drawer from "./components/microblogging/layout/Drawer";
import Landing from "./components/microblogging/layout/Landing";
import Login from "./components/microblogging/auth/Login";
import Register from "./components/microblogging/auth/Register";
import ProfileContainer from "./components/microblogging/profile/ProfileContainer";
import Dashboard from "./components/microblogging/dashboard/Dashboard";
import Profiles from "./components/microblogging/profiles/Profiles";
import Profile from "./components/microblogging/profile/Profile";
import Followers from "./components/microblogging/profiles/Followers";
import Following from "./components/microblogging/profiles/Following";
import Setting from "./components/microblogging/profile/Setting";

// Social Media Components
import SocialDashboard from "./components/socialmedia/dashboard/SocialDashboard";

// Redux
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth";
import { getAllTweets, getTweetsByMe } from "./redux/actions/tweet";

// utils
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    // store.dispatch(getAllTweets());
    // store.dispatch(getTweetsByMe());
  }, []);

  // console.log(moment(moment() + 36e5 * 5).twitter());

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Drawer />

          <Route exact path='/' component={Landing} />

          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/Login' component={Login} />
            <PrivateRoute exact path='/profile' component={ProfileContainer} />
            <PrivateRoute exact path='/profile/:id' component={Profile} />
            <PrivateRoute exact path='/profiles' component={Profiles} />
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute
              exact
              path='/dashboard/social'
              component={SocialDashboard}
            />
            <PrivateRoute exact path='/followers' component={Followers} />
            <PrivateRoute exact path='/following' component={Following} />
            <PrivateRoute exact path='/setting' component={Setting} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
