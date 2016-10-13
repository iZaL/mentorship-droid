import { fromPairs } from 'lodash';
import * as constants from 'src/constants/routes';

import ApiErrorContainer from 'src/containers/ApiErrorContainer';
import NetworkErrorContainer from 'src/containers/NetworkErrorContainer';

import LandingContainer from 'src/containers/LandingContainer';
import LoginContainer from 'src/containers/LoginContainer';
import ActivationContainer from 'src/containers/ActivationContainer';

import OnboardingContainer from 'src/containers/OnboardingContainer';
import CameraRollContainer from 'src/containers/CameraRollContainer';

import LoadingContainer from 'src/containers/LoadingContainer';
import LoadingFailureContainer from 'src/containers/LoadingFailureContainer';

import NavigatorContainer from 'src/containers/NavigatorContainer';

import JourneyContainer from 'src/containers/JourneyContainer';

import CategoryListContainer from 'src/containers/CategoryListContainer';
import CategoryContainer from 'src/containers/CategoryContainer';
import ActivityContainer from 'src/containers/ActivityContainer';

import ScheduleDetailContainer from 'src/containers/ScheduleDetailContainer';
import ScheduleListContainer from 'src/containers/ScheduleListContainer';
import SchedulingCallContainer from 'src/containers/SchedulingCallContainer';
import CallScheduledContainer from 'src/containers/CallScheduledContainer';
import CallScheduleFailureContainer from 'src/containers/CallScheduleFailureContainer';

import ScheduledCallCategoryContainer from 'src/containers/ScheduledCallCategoryContainer';
import ScheduledCallActivityContainer from 'src/containers/ScheduledCallActivityContainer';

import StartCallContainer from 'src/containers/StartCallContainer';
import ConnectingCallContainer from 'src/containers/ConnectingCallContainer';
import ConnectingCallFailureContainer from 'src/containers/ConnectingCallFailureContainer';
import CallCompletedContainer from 'src/containers/CallCompletedContainer';

import CallNoteStepperContainer from 'src/containers/CallNoteStepperContainer';
import CallNoteSavedContainer from 'src/containers/CallNoteSavedContainer';


export default fromPairs([
  [constants.ROUTE_API_ERROR, ApiErrorContainer],
  [constants.ROUTE_NETWORK_ERROR, NetworkErrorContainer],

  [constants.ROUTE_LANDING, LandingContainer],

  [constants.ROUTE_AUTH_ACTIVATION, ActivationContainer],
  [constants.ROUTE_AUTH_LOGIN, LoginContainer],

  [constants.ROUTE_ONBOARDING, OnboardingContainer],
  [constants.ROUTE_ONBOARDING_CAMERA_ROLL, CameraRollContainer],

  [constants.ROUTE_LOADING, LoadingContainer],
  [constants.ROUTE_LOADING_FAILURE, LoadingFailureContainer],

  [constants.ROUTE_NAVIGATOR, NavigatorContainer],

  [constants.ROUTE_JOURNEY, JourneyContainer],

  [constants.ROUTE_CATEGORY_LIST, CategoryListContainer],
  [constants.ROUTE_CATEGORY, CategoryContainer],
  [constants.ROUTE_ACTIVITY, ActivityContainer],

  [constants.ROUTE_SCHEDULE_CALL, ScheduleDetailContainer],
  [constants.ROUTE_SCHEDULED_CALLS, ScheduleListContainer],
  [constants.ROUTE_SCHEDULING_CALL, SchedulingCallContainer],
  [constants.ROUTE_CALL_SCHEDULED, CallScheduledContainer],
  [constants.ROUTE_CALL_SCHEDULE_FAILURE, CallScheduleFailureContainer],
  [constants.ROUTE_SCHEDULED_CALL_CATEGORY, ScheduledCallCategoryContainer],
  [constants.ROUTE_SCHEDULED_CALL_ACTIVITY, ScheduledCallActivityContainer],

  [constants.ROUTE_START_CALL, StartCallContainer],
  [constants.ROUTE_CONNECTING_CALL, ConnectingCallContainer],
  [constants.ROUTE_CONNECTING_CALL_FAILURE, ConnectingCallFailureContainer],
  [constants.ROUTE_CALL_COMPLETED, CallCompletedContainer],

  [constants.ROUTE_CREATE_CALL_NOTES, CallNoteStepperContainer],

  [constants.ROUTE_CALL_NOTE_SAVED, CallNoteSavedContainer],
]);
