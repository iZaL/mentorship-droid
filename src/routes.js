import { fromPairs } from 'lodash';
import * as constants from 'src/constants/routes';

import LandingContainer from 'src/containers/LandingContainer';
import LoginContainer from 'src/containers/LoginContainer';
import ActivationContainer from 'src/containers/ActivationContainer';

import OnboardingContainer from 'src/containers/OnboardingContainer';
import CameraRollContainer from 'src/containers/CameraRollContainer';
import LoadingContainer from 'src/containers/LoadingContainer';

import JourneyContainer from 'src/containers/JourneyContainer';

import CategoryListContainer from 'src/containers/CategoryListContainer';
import CategoryContainer from 'src/containers/CategoryContainer';
import ActivityContainer from 'src/containers/ActivityContainer';

import ScheduleCallContainer from 'src/containers/ScheduleCallContainer';


export default fromPairs([
  [constants.ROUTE_LANDING, LandingContainer],

  [constants.ROUTE_AUTH_ACTIVATION, ActivationContainer],
  [constants.ROUTE_AUTH_LOGIN, LoginContainer],

  [constants.ROUTES_ONBOARDING, OnboardingContainer],
  [constants.ROUTE_ONBOARDING_CAMERA_ROLL, CameraRollContainer],

  [constants.ROUTE_LOADING, LoadingContainer],
  [constants.ROUTE_JOURNEY, JourneyContainer],

  [constants.ROUTE_CATEGORY_LIST, CategoryListContainer],
  [constants.ROUTE_CATEGORY, CategoryContainer],
  [constants.ROUTE_ACTIVITY, ActivityContainer],

  [constants.ROUTE_SCHEDULE_CALL, ScheduleCallContainer],
]);
