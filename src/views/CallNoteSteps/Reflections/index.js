import React, { PropTypes } from 'react';
import { MultiLineTextInput } from 'src/components';

import { FormStep } from 'src/components';


const Reflections = ({
  reflection = '',
  onChange,
  ...props,
}) => (
  <FormStep
    paginationBackDisabled
    paginationDisabled={reflection.length === 0}
    title="Please share your reflections of the discussion"
    {...props}
  >
    <MultiLineTextInput
      value={reflection}
      placeholder="Type your answer here"
      onChange={text => onChange({ reflection: text })}
    />
  </FormStep>
);

Reflections.propTypes = {
  reflection: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};


export default Reflections;
