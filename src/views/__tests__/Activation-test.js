import React from 'react';
import { noop } from 'lodash';

import Activation from 'src/views/Activation';
import * as statuses from 'src/statuses/auth';
import { uidEquals } from 'app/scripts/helpers';


describe('Activation', () => {
  const createComponent = (props = {}) => (
    <Activation
      status={statuses.authStatusIdle()}
      onLoginPress={noop}
      onBackPress={noop}
      {...props}
    />
  );

  it('should draw', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onDismissPress when the back button is pressed', () => {
    const onBackPress = jest.fn();
    const el = shallow(createComponent({ onBackPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onBackPress.mock.calls).toEqual([[]]);
  });
});
