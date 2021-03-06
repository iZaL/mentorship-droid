import * as api from 'src/api';
import * as constants from 'src/constants/schedule';

import {
  apiAction,
  dataAction,
  staticAction,
} from 'src/actionHelpers';

const { ApiResponseError } = api;


export const listScheduledCalls = apiAction({
  method: api.listScheduledCalls,
  request: staticAction(constants.SCHEDULED_CALL_LIST_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_LIST_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_LIST_FAILURE)]],
});


export const createScheduledCall = apiAction({
  method: api.createScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_CREATE_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_CREATE_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_CREATE_FAILURE)]],
});


export const patchScheduledCall = apiAction({
  method: api.patchScheduledCall,
  request: staticAction(constants.SCHEDULED_CALL_PATCH_REQUEST),
  success: dataAction(constants.SCHEDULED_CALL_PATCH_SUCCESS),
  failures: [[ApiResponseError, staticAction(constants.SCHEDULED_CALL_PATCH_FAILURE)]],
});


export const addScheduledCall = date => ({
  type: constants.SCHEDULED_CALL_ADD,
  payload: { date },
});


export const addNextScheduledCall = date => ({
  type: constants.SCHEDULED_CALL_ADD_NEXT,
  payload: { date },
});


export const openScheduledCall = scheduledCallId => ({
  type: constants.SCHEDULED_CALL_OPEN,
  payload: { scheduledCallId },
});


export const removeScheduledCallActivity = (
  staticAction(constants.SCHEDULED_CALL_ACTIVITY_REMOVE));


export const changeScheduledCallActivity = context => ({
  type: constants.SCHEDULED_CALL_ACTIVITY_CHANGE,
  payload: { context },
});


export const chooseScheduledCallCategory = (categoryId, context) => ({
  type: constants.SCHEDULED_CALL_CATEGORY_CHOOSE,
  payload: {
    categoryId,
    context,
  },
});


export const chooseScheduledCallActivity = (activityId, context) => ({
  type: constants.SCHEDULED_CALL_ACTIVITY_CHOOSE,
  payload: {
    activityId,
    context,
  },
});


export const startScheduledCall = scheduledCallId => ({
  type: constants.SCHEDULED_CALL_START,
  payload: { scheduledCallId },
});
