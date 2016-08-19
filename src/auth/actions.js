import { isEmpty } from 'lodash';
import { listProfiles, ApiResponseError } from 'src/api';
import { switchError } from 'src/helpers';
import { staticAction, dataAction } from 'src/actionHelpers';
import * as constants from 'src/auth/constants';


export const loginRequest = staticAction(constants.AUTH_LOGIN_REQUEST);
export const loginSuccess = dataAction(constants.AUTH_LOGIN_SUCCESS);
export const loginFailure = staticAction(constants.AUTH_LOGIN_FAILURE);
export const loginNotFound = staticAction(constants.AUTH_LOGIN_NOT_FOUND);


export const loginDone = data => !isEmpty(data.result)
  ? loginSuccess(data)
  : loginNotFound();


// TODO use ...NOT_FOUND where ...FAILURE is, and add change ...FAILURE to mean
// system errors
export const login = (email, password) => dispatch => Promise.resolve()
  .then(loginRequest)
  .then(dispatch)
  .then(() => listProfiles({
    email,
    password,
  }))
  .then(data => ({
    ...data,
    auth: {
      email,
      password,
    },
  }))
  .then(loginDone, switchError([
    [ApiResponseError, loginFailure],
  ]))
  .then(dispatch);
