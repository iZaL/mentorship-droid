import * as constants from 'src/constants/auth';
import * as statuses from 'src/auth/statuses';


export const getProfileId = state => {
  if (!state.auth.profileId) {
    throw new Error('all logged in users should have an assigned profileId');
  }
  return state.auth.profileId;
};


const authReducer = (state = {
  status: statuses.authStatusIdle(),
}, action) => {
  switch (action.type) {
    case constants.AUTH_LOGIN_REQUEST:
      return {
        ...state,
        status: statuses.authStatusBusy(),
      };

    case constants.AUTH_LOGIN_FAILURE:
      return {
        ...state,
        status: statuses.authStatusError(),
      };

    case constants.AUTH_LOGIN_NOT_FOUND:
      return {
        ...state,
        status: statuses.authStatusNotFound(),
      };

    case constants.AUTH_LOGIN_SUCCESS: {
      const {
        payload: {
          auth,
          result: [profileId],
        },
      } = action;

      return {
        ...state,
        auth,
        profileId,
        status: statuses.authStatusIdle(),
      };
    }

    default:
      return state;
  }
};

export default authReducer;
