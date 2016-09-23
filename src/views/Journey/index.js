import moment from 'moment';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { BaseView, Header, Text, Link } from 'src/components';
import EventListContainer from 'src/containers/EventListContainer';

import images from 'src/constants/images';
import styles from './styles';


const Journey = ({
  nextScheduledCallDate,
  onNextScheduledCallPress,
  onCallPress,
  onMessagePress,
}) => (
  <BaseView>
    <Header style={styles.header}>
      <Text style={styles.nextCall}>NEXT CALL</Text>
      <Link
        style={[styles.date, nextScheduledCallDate && styles.hasDate]}
        onPress={onNextScheduledCallPress}
      >
        {moment(nextScheduledCallDate).format('dddd Do, MMMM YYYY') ||
          'Schedule your first call'}
      </Link>
    </Header>

    <Image
      source={images.JOURNEY_MENTEE}
      style={styles.mentee}
    >
      <TouchableWithoutFeedback onPress={onCallPress}>
        <Image
          source={images.JOURNEY_CALL_ICON}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onMessagePress}>
        <Image
          source={images.JOURNEY_MESSAGE_ICON}
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
    </Image>
    <View style={styles.eventsContainer}>
      <EventListContainer />
    </View>
  </BaseView>
);


Journey.propTypes = {
  nextScheduledCallDate: PropTypes.string,
  onNextScheduledCallPress: PropTypes.func.isRequired,
  onCallPress: PropTypes.func.isRequired,
  onMessagePress: PropTypes.func.isRequired,
};


export default Journey;
