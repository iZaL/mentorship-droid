import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { BaseView, Text, Link, Button } from 'src/components';


import OnboardingStepsContainer from 'src/containers/OnboardingStepsContainer';
import OnboardingContainer from 'src/containers/OnboardingContainer';

import styles from './styles';
import images from 'src/constants/images';

const Landing = ({
  onGetStartedPress,
  onLoginPress,
}) => (
  <OnboardingContainer />
  // <BaseView>
  //   <View style={styles.imageContainer}>
  //     <Image
  //       style={styles.image}
  //       source={images.ONBOARDING_LANDING}
  //     />
  //   </View>
  //   <View style={styles.bottom}>
  //     <View style={styles.getStarted}>
  //       <Text style={styles.getStartedHeading}>
  //         This is a short, but sweet, description of the application.
  //       </Text>
  //       <Button onPress={onGetStartedPress}>
  //         GET STARTED
  //       </Button>
  //     </View>
  //     <View style={styles.login}>
  //       <Text style={styles.loginText}>
  //         Already have an account?
  //         <Link onPress={onLoginPress}> Log in.</Link>
  //       </Text>
  //     </View>
  //   </View>
  // </BaseView>
);
Landing.propTypes = {
  onGetStartedPress: PropTypes.func.isRequired,
  onLoginPress: PropTypes.func.isRequired,
};

export default Landing;
