import React, { PropTypes } from 'react';
import { Image } from 'react-native';

import images from 'src/constants/images';
import styles from './styles';


const Icon = ({
  type,
  style = {},
}) => (
  <Image source={type} style={[styles.default, style]} />
);


Icon.types = {
  dismissLight: images.DISMISS_LIGHT,
  dismissDark: images.DISMISS_DARK,
  backLight: images.BACK_LIGHT,
  backDark: images.BACK_DARK,
  backOrange: images.BACK_ORANGE,
};


Icon.propTypes = {
  type: PropTypes.number.isRequired,
  style: PropTypes.any,
};


export default Icon;
