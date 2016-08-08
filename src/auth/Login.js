import React, { PropTypes } from 'react';

import { BaseView, Toolbar, Text } from 'src/components';

import LoginForm from './LoginForm';


const Login = (props) => (
  <BaseView>
    <Toolbar title="Log in" />
    <LoginForm
      {...props}
      buttonLabel="Log in"
    />
    <Text>{props.errorMessage}</Text>
  </BaseView>
);
Login.propTypes = {
  isLoading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default Login;