import React from 'react';
import { View } from 'react-native'
import { Heading, Text } from 'src/components';
import globalStyles from 'src/StyleSheet';

const Header = ({
  title = '',
  subtitle = '',
}) => {

  let subtitleComponent = '';

  return (
    <View style={globalStyles.header}>
      <Heading>{title}</Heading>
      {subtitleComponent}
    </View>
  );
};
Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Header;
