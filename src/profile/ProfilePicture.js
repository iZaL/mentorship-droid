import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import { BaseView, Toolbar, Text } from 'src/components';
import IMAGE_PROFILE_ADD from 'app/assets/Profile_Add.png';


const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 19,
  },
  imageLabel: {
    color: '#9fb1b3',
    fontSize: 18,
  },
});

const ProfilePicture = ({
  picturePath,
}) => (
  <BaseView>
    <Toolbar title="Add a profile picture" />
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={picturePath && { uri: picturePath } || IMAGE_PROFILE_ADD}
      />
      <Text style={styles.imageLabel}>Choose Photo</Text>
    </View>
  </BaseView>
);
ProfilePicture.propTypes = {
  picturePath: React.PropTypes.string,
};

export default ProfilePicture;