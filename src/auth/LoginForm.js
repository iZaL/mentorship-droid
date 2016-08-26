import React, { PropTypes } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'src/components';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.initialUsername,
      password: this.props.initialPassword,
    };
  }

  render() {
    return (
      <View>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          label="Email"
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          secureTextEntry
          label="Password"
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
        />

        <Button
          onPress={() => this.props.onLoginPress(
            this.state.username,
            this.state.password
          )}
          label={this.props.buttonLabel}
        />
      </View>
    );
  }
}

LoginForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  onLoginPress: PropTypes.func.isRequired,
  initialUsername: PropTypes.string,
  initialPassword: PropTypes.string,
};

export default LoginForm;
