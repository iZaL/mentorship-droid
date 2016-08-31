import * as routes from 'src/constants/routes';
import * as landing from 'src/constants/landing';
import * as navigation from 'src/constants/navigation';
import * as auth from 'src/constants/auth';
import * as onboarding from 'src/constants/onboarding';

import {
  reset,
  push,
  pop,
  back,
  forward,
  insert,
  createRoute,
} from 'src/navigationHelpers';


const navigationReducer = (state = {
  index: 0,
  routes: [createRoute(routes.ROUTE_LANDING)],
}, action) => {
  switch (action.type) {
    case navigation.NAVIGATE_BACK:
      return back(state);

    case navigation.NAVIGATE_FORWARD:
      return forward(state);

    case landing.LANDING_GET_STARTED:
      return push(state, createRoute(routes.ROUTE_AUTH_ACTIVATION));

    case landing.LANDING_LOGIN:
      return push(state, createRoute(routes.ROUTE_AUTH_LOGIN));

    case auth.AUTH_LOGIN_SUCCESS:
      return reset(state, [createRoute(routes.ROUTE_ONBOARDING_WELCOME)]);

    case onboarding.ONBOARDING_START_PROFILE:
      return reset(state, routes.ONBOARDING_STEPS.map(createRoute), 0);

    case onboarding.ONBOARDING_CHOOSE_PROFILE_PICTURE:
      return insert(state, createRoute(routes.ROUTE_ONBOARDING_CAMERA_ROLL));

    case onboarding.ONBOARDING_UPDATE_PROFILE_PICTURE:
      return pop(state);

    default:
      return state;
  }
};


export default navigationReducer;
