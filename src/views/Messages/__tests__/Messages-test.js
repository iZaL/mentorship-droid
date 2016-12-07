import { noop } from 'lodash';
import React from 'react';

import Messages from 'src/views/Messages';
import * as constants from 'src/constants/messages';
import { fakeMessage, fakePendingMessage, uidEquals } from 'app/scripts/helpers';


const createComponent = (props = {}) => (
  <Messages
    messages={[
      fakeMessage({
        id: 1,
        content: 'Sputnik sickles found in the seats',
        details: { direction: constants.MESSAGE_DIRECTION_OUTBOUND },
      }),
      fakeMessage({
        id: 2,
        content: 'I lost my liquid tongue for the wet pen',
        details: { direction: constants.MESSAGE_DIRECTION_INBOUND },
      }),
      fakeMessage({
        id: 3,
        content: 'Let a stool pigeon escort those who contort',
        details: { direction: constants.MESSAGE_DIRECTION_OUTBOUND },
      })]}
    onSendPress={noop}
    {...props}
  />
);


describe('Messages', () => {
  it('should render', () => {
    const el = render(createComponent());
    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render inbound messages', () => {
    const el = render(createComponent({
      messages: [fakeMessage({
        details: { direction: constants.MESSAGE_DIRECTION_INBOUND },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render outbound messages', () => {
    const el = render(createComponent({
      groups: [fakeMessage({
        details: { direction: constants.MESSAGE_DIRECTION_OUTBOUND },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render sending messages', () => {
    const el = render(createComponent({
      groups: [fakePendingMessage({
        details: { status: constants.PENDING_MESSAGE_STATUS_SENDING },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should render failed messages', () => {
    const el = render(createComponent({
      groups: [fakePendingMessage({
        details: { status: constants.PENDING_MESSAGE_STATUS_FAILED },
      })],
    }));

    expect(el.toJSON()).toMatchSnapshot();
  });

  it('should call onSendPress() with input content when pressed', () => {
    const onSendPress = jest.fn();
    const el = shallow(createComponent({ onSendPress }));

    const send = el.find('Send')
      .shallow();

    send.findWhere(uidEquals('sendInput'))
      .simulate('textChange', '123');

    send.findWhere(uidEquals('sendButton'))
      .simulate('press');

    expect(onSendPress.mock.calls).toEqual([[{ content: '123' }]]);
  });
});
