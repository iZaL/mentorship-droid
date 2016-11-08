import { times } from 'lodash';
import React, { Component, PropTypes } from 'react';
import { View, Image } from 'react-native';

import { DEVICE_HEIGHT } from 'src/constants/styles';
import images from 'src/constants/images';
import styles from 'src/components/PatternBackground/styles';


class PatternBackground extends Component {
  static get defaultProps() {
    return {
      pattern: images.PATTERN_BG,
      patternHeight: 416,
      initialHeight: DEVICE_HEIGHT,
    };
  }

  constructor(props) {
    super(props);
    this.state = { height: this.props.initialHeight };
  }

  onLayout({
    nativeEvent: {
      layout: { height },
    },
  }) {
    this.setState({ height });
  }

  getRepeats() {
    return Math.ceil(this.state.height / this.props.patternHeight);
  }

  render() {
    return (
      <View>
        <View uid="patterns" style={styles.patternContainer}>
        {
          times(this.getRepeats(), i => (
            <Image
              key={i}
              style={styles.pattern}
              source={images.PATTERN_BG}
            />))
        }
        </View>

        <View onLayout={event => this.onLayout(event)}>
          {this.props.children}
        </View>
      </View>
    );
  }
}


PatternBackground.propTypes = {
  children: PropTypes.any,
  pattern: PropTypes.number,
  patternHeight: PropTypes.number,
};


export default PatternBackground;
