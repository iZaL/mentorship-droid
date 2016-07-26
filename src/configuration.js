
// test vs dev vs prod, how do we
// determine what env we're in?
export const getBaseURL = () => {
  if (global.__TEST__) {
    return 'http://example.org';
  }
  return 'http://192.168.178.20:8000/mentor';
};

export const getAuthorizationToken = (state) => state.auth.login.authToken;
