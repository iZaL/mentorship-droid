import React from 'react';
import { View } from 'react-native';
import { Route, StackRoute, IndexRoute } from 'react-router-native';


import Hello from './Hello';
// import Login from 'src/mentor/Login';
// import Register from 'src/mentor/Register';
// import ForgotPassword from 'src/mentor/ForgotPassword';


const StackContainer = (props) => (
  <View style={{ flex: 1, backgroundColor: 'black' }}>
    {props.children}
  </View>
);

export default (

  <StackRoute
    path="/onboarding"
    component={StackContainer}
  >


  </StackRoute>
);
