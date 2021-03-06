import { upperFirst } from 'lodash';
import React, { PropTypes } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import { Text } from 'src/components';

import { FormStep } from 'src/components';
import { MOOD_IMAGES } from 'src/constants/callNotes';
import styles from 'src/views/CallNoteSteps/styles';


const Mood = ({
  onChange,
  callNote: { menteeState = '' },
  ...props,
}) => (
  <FormStep
    paginationDisabled={menteeState.length === 0}
    title="How was your Mentee today?"
    {...props}
  >
    <View style={styles.list}>
      {Object.keys(MOOD_IMAGES).map(key => (
        <TouchableWithoutFeedback
          uid={key}
          key={key}
          onPress={() => onChange({ menteeState: key })}
        >
          <View style={styles.item}>
            <Image
              style={[styles.image, menteeState === key && styles.imageIsSelected]}
              source={MOOD_IMAGES[key]}
            >
            { menteeState !== key && <View style={styles.imageHighlight} /> }
            </Image>
            <Text style={styles.label}>{upperFirst(key)}</Text>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  </FormStep>
);


Mood.propTypes = {
  callNote: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};


export default Mood;
