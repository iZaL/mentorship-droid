import React, { PropTypes } from 'react';
import { View, Image } from 'react-native';
import { Section } from 'src/components';

import styles from './styles';


const CategoryAbout = ({
  category: {
    image,
    title,
    about,
    goal,
  },
}) => (
  <View>
    <View style={styles.imageContainer}>
      {
        image
          ? <Image source={image} style={styles.image} />
          : <View style={styles.imageFallback} />
      }
    </View>

    <Section title={`About ${title}`}>{about}</Section>

    <Section title={`Goal of ${title}`}>{goal}</Section>
  </View>
);


CategoryAbout.propTypes = {
  category: PropTypes.object.isRequired,
};


export default CategoryAbout;
