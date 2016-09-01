import { partialRight as partial, isFunction } from 'lodash';
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


export const castThunk = fn => (...args) => {
  const obj = fn(...args);
  return !isFunction(obj)
    ? dispatch => dispatch(obj)
    : obj;
};


export const sequence = actions => (...args) => {
  const thunks = actions
    .map(castThunk)
    .map(fn => fn(...args));

  return (...storeArgs) => {
    let p = Promise.resolve();
    for (const fn of thunks) p = p.then(() => fn(...storeArgs));
    return p;
  };
};
