import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom'
import SignInPage from "../SignInPage/SignInPage";
import PuppyProfile from "../ProfileCreator/PuppyProfile";
import MapsView from "../DogParks/MapsView";

class MyMenuRoutes extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={SignInPage}/>
          <Route path='/profile' component={PuppyProfile}/>
          <Route path='/map' component={MapsView}/>
        </Switch>
      </main>
    );
  }
}

MyMenuRoutes.propTypes = {};
MyMenuRoutes.defaultProps = {};

export default MyMenuRoutes;
