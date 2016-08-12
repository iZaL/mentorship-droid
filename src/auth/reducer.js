import { serializeAuth } from 'src/api/request';


import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILURE,
} from './constants';


const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST: {
      const { payload: { auth } } = action;
      const { email, password } = auth;

      return {
        ...state,

        isLoading: true,
        errorMessage: '',

        // TODO don't add `authToken` once we are using api in all actions
        auth: {
          ...auth,
          authToken: serializeAuth(email, password),
        },
      };
    }

    case AUTH_LOGIN_FAILURE:
      return {
        ...state,

        // TODO use constant for status type instead and put copy in component
        isLoading: false,
        errorMessage: 'Incorrect email or password combination.',
      };

    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        profileId: action.payload.entities.results[0],
      };

    default:
      return state;
  }
};


export default authReducer;
