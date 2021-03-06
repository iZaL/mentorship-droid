import React, { Component, PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback, TextInput } from 'react-native';

import Bubble from 'src/views/Messages/Bubble';
import styles from './styles';
import images from 'src/constants/images';


class Send extends Component {
  constructor(props) {
    super(props);

    const {
      initialContent = '',
    } = props;

    this.state = {
      content: initialContent,
    };

    this.onSendPress = this.onSendPress.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(content) {
    this.setState({ content });
  }

  onSendPress() {
    if (this.hasContent()) {
      const { content } = this.state;
      this.setState({ content: '' });
      this.props.onSendPress({ content });
    }
  }

  hasContent() {
    return this.state.content.length > 0;
  }

  render() {
    return (
      <View style={styles.container}>
        <Bubble style={styles.bubble}>
          <TextInput
            multiline
            uid="sendInput"
            placeholder="Write something"
            placeholderTextColor={images.SEND_INPUT_PLACEHOLDER_TEXT}
            underlineColorAndroid="transparent"
            style={styles.input}
            onChangeText={this.onChangeText}
            value={this.state.content}
            maxLength={140}
          />
        </Bubble>

        <TouchableWithoutFeedback
          uid="sendButton"
          onPress={this.onSendPress}
        >
          <View style={[styles.send, !this.hasContent() && styles.sendIsDisabled]}>
            <Image
              style={styles.sendImage}
              source={images.SEND_MESSAGE_ICON}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


Send.propTypes = {
  initialContent: PropTypes.string,
  onSendPress: PropTypes.func.isRequired,
};


export default Send;
