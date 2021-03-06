import React, { PropTypes } from 'react';
import { Text as RNText } from 'react-native';
import styles, { types, themes, uppercase, STYLE_TRANSFORMS } from './styles';
import transform from './transform';


const Text = ({
  children,
  style,
  ...props,
}) => {
  const text = transform(children, style, STYLE_TRANSFORMS);

  return (
    <RNText
      {...props}
      style={[styles.default, types.normal, style]}
    >
      {text}
    </RNText>
  );
};


Text.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};


Text.types = types;
Text.themes = themes;
Text.uppercase = uppercase;
Text.styles = styles;


export default Text;
