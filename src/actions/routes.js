import { fromPairs } from 'lodash';
import { makePushRoute, popRoute } from 'src/actions/navigation';
import * as constants from 'src/constants/navigation';

import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import {
  ONBOARDING_UPDATE_PROFILE_PICTURE,
} from 'src/constants/onboarding';


export default fromPairs([
  [AUTH_LOGIN_SUCCESS, makePushRoute(constants.ROUTE_ONBOARDING_WELCOME)],
  [ONBOARDING_UPDATE_PROFILE_PICTURE, popRoute],
]);
