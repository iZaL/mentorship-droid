import { noop } from 'lodash';
import React from 'react';

import ConnectingCallFailure from 'src/views/ConnectingCallFailure';
import { uidEquals } from 'app/scripts/helpers';


describe('ConnectingCallFailure', () => {
  const createComponent = (props = {}) => (
    <ConnectingCallFailure
      onDismissPress={noop}
      {...props}
    />
  );

  it('should render', () => {
    expect(render(createComponent())).toMatchSnapshot();
  });

  it('should call onDismissPress when the back button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('back'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });

  it('should call onDismissPress when the dismiss button is pressed', () => {
    const onDismissPress = jest.fn();
    const el = shallow(createComponent({ onDismissPress }));

    el.findWhere(uidEquals('dismiss'))
      .simulate('press');

    expect(onDismissPress.mock.calls).toEqual([[]]);
  });
});
