import { includes, omit, merge } from 'lodash';
import { AUTH_LOGOUT } from 'src/constants/auth';
import { MESSAGE_SEND_SUCCESS } from 'src/constants/messages';
import { ACTIONS_WITH_ENTITIES } from 'src/constants/entities';


const mergeActionEntities = (state, action) => {
  return includes(ACTIONS_WITH_ENTITIES, action.type)
    ? merge({}, state, action.payload.entities)
    : state;
};


export const createInitialState = () => ({
  activities: {},
  categories: {},
  scheduledCalls: {},
  callNotes: {},
  calls: {},
  messages: {},
  pendingMessages: {},
});


const entitiesReducer = (state = createInitialState(), action) => {
  switch (action.type) {
    case AUTH_LOGOUT:
      return createInitialState();

    case MESSAGE_SEND_SUCCESS: {
      const nextState = {
        ...state,
        pendingMessages: omit(state.pendingMessages, action.payload.pendingId),
      };

      return mergeActionEntities(nextState, action);
    }

    default:
      return mergeActionEntities(state, action);
  }
};


export default entitiesReducer;
