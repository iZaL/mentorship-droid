const ROUTE_API_ERROR = 'ROUTE_API_ERROR';
const ROUTE_NETWORK_ERROR = 'ROUTE_NETWORK_ERROR';

const ROUTE_LANDING = 'ROUTE_LANDING';

const ROUTE_AUTH_LOGIN = 'ROUTE_AUTH_LOGIN';
const ROUTE_AUTH_ACTIVATION = 'ROUTE_AUTH_ACTIVATION';
const ROUTE_AUTH_RESET_PASSWORD = 'ROUTE_AUTH_RESET_PASSWORD';

const ROUTE_ONBOARDING = 'ROUTE_ONBOARDING';
const ROUTE_ONBOARDING_CAMERA_ROLL = 'ROUTE_ONBOARDING_CAMERA_ROLL';

const ROUTE_LOADING = 'ROUTE_LOADING';
const ROUTE_LOADING_FAILURE = 'ROUTE_LOADING_FAILURE';

const ROUTE_NAVIGATOR = 'ROUTE_NAVIGATOR';

const ROUTE_JOURNEY = 'ROUTE_JOURNEY';

const ROUTE_CATEGORY_LIST = 'ROUTE_CATEGORY_LIST';
const ROUTE_CATEGORY = 'ROUTE_CATEGORY';
const ROUTE_ACTIVITY = 'ROUTE_ACTIVITY';

const ROUTE_SCHEDULE_CALL = 'ROUTE_SCHEDULE_CALL';
const ROUTE_SCHEDULED_CALLS = 'ROUTE_SCHEDULED_CALLS';
const ROUTE_SCHEDULING_CALL = 'ROUTE_SCHEDULING_CALL';
const ROUTE_CALL_SCHEDULED = 'ROUTE_CALL_SCHEDULED';
const ROUTE_CALL_SCHEDULE_FAILURE = 'ROUTE_CALL_SCHEDULE_FAILURE';

const ROUTE_CALL_COMPLETED = 'ROUTE_CALL_COMPLETED';
const ROUTE_START_CALL = 'ROUTE_START_CALL';
const ROUTE_CONNECTING_CALL = 'ROUTE_CONNECTING_CALL';
const ROUTE_CONNECTING_CALL_FAILURE = 'ROUTE_CONNECTING_CALL_FAILURE';
const ROUTE_SCHEDULED_CALL_CATEGORY = 'ROUTE_SCHEDULED_CALL_CATEGORY';
const ROUTE_SCHEDULED_CALL_ACTIVITY = 'ROUTE_SCHEDULED_CALL_ACTIVITY';

const ROUTE_CREATE_CALL_NOTES = 'ROUTE_CREATE_CALL_NOTES';

const ROUTE_PROFILE = 'ROUTE_PROFILE';

const STACK_LANDING = 'STACK_LANDING';
const STACK_ACTIVITIES = 'STACK_ACTIVITIES';
const STACK_ONBOARDING = 'STACK_ONBOARDING';
const STACK_JOURNEY = 'STACK_JOURNEY';
const STACK_SCHEDULED_CALLS = 'STACK_SCHEDULED_CALLS';


const EPHEMERAL_ROUTES = [
  ROUTE_AUTH_LOGIN,
  ROUTE_LOADING,
  ROUTE_SCHEDULING_CALL,
  ROUTE_CONNECTING_CALL,
];


export {
  ROUTE_API_ERROR,
  ROUTE_NETWORK_ERROR,

  ROUTE_LANDING,

  ROUTE_AUTH_LOGIN,
  ROUTE_AUTH_ACTIVATION,
  ROUTE_AUTH_RESET_PASSWORD,

  ROUTE_ONBOARDING,
  ROUTE_ONBOARDING_CAMERA_ROLL,

  ROUTE_LOADING,
  ROUTE_LOADING_FAILURE,

  ROUTE_NAVIGATOR,

  ROUTE_JOURNEY,

  ROUTE_CATEGORY_LIST,
  ROUTE_CATEGORY,
  ROUTE_ACTIVITY,

  ROUTE_SCHEDULED_CALL_CATEGORY,
  ROUTE_SCHEDULED_CALL_ACTIVITY,

  ROUTE_SCHEDULE_CALL,
  ROUTE_SCHEDULED_CALLS,
  ROUTE_SCHEDULING_CALL,
  ROUTE_CALL_SCHEDULED,
  ROUTE_CALL_SCHEDULE_FAILURE,

  ROUTE_CALL_COMPLETED,
  ROUTE_START_CALL,
  ROUTE_CONNECTING_CALL,
  ROUTE_CONNECTING_CALL_FAILURE,

  ROUTE_CREATE_CALL_NOTES,

  ROUTE_PROFILE,

  STACK_LANDING,
  STACK_ACTIVITIES,
  STACK_ONBOARDING,
  STACK_JOURNEY,
  STACK_SCHEDULED_CALLS,

  EPHEMERAL_ROUTES,
};
