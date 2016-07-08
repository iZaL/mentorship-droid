import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Route, StackRoute, IndexRoute } from 'react-router-native';

import configureStore from 'src/stores/configureStore';
const initialState = { mentor: { authToken: '' } };
const store = configureStore(initialState);

const Container = (props) => (
  <View style={{ backgroundColor: 'black', flex: 1 }}>
    {props.children}
  </View>
);

const NoMatch = () => (
  <View>
    <Text>404 - not found</Text>
  </View>
);


import Landing from 'src/app/Landing';
import LoginContainer from 'src/mentor/LoginContainer';

import ActivationContainer from 'src/mentor/ActivationContainer';
import ChangePasswordContainer from 'src/mentor/ChangePasswordContainer';
import Hello from 'src/onboarding/Hello';
import ProfilePicture from 'src/onboarding/ProfilePicture';
import CameraRoll from 'src/onboarding/CameraRoll';
import profileSetupRoutes from 'src/onboarding/QuestionRoutes';

// maybe we can keep these outside of memory if the user is already logged in?

const App = function App() {

  return (
    <Provider store={store}>
      <Router>

        <StackRoute path="/" component={Container}>
          <IndexRoute component={Landing} />
          <Route path="login" component={LoginContainer} />
          <Route path="activate" component={ActivationContainer} />
          <Route path="setup-password" component={ChangePasswordContainer} />
          <Route path="hello" component={Hello} />
          <Route path="profile-picture" component={ProfilePicture} />
          <Route path="profile-picture-camera-roll" component={CameraRoll} />
          {profileSetupRoutes}
        </StackRoute>


        <Route path="*" component={NoMatch} />
      </Router>
    </Provider>
  );
};
export default App;
