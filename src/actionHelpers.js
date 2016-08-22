import { partialRight as partial } from 'lodash';
import { switchError } from 'src/helpers';


export const apiAction = ({
  method,
  request,
  success,
  failures,
}) => (...args) => (dispatch, { auth }) => Promise.resolve()
  .then(() => request(...args))
  .then(dispatch)
  .then(() => method(...args, auth))
  .then(partial(success, ...args), partial(switchError(failures), ...args))
  .then(dispatch);


export const staticAction = type => () => ({
  type,
});


export const dataAction = type => data => ({
  type,
  payload: data,
});