import { PROFILE_FETCH_SUCCESS } from 'src/constants/profile';
import { ONBOARDING_UPDATE_PROFILE_SUCCESS } from 'src/constants/onboarding';

import { AUTH_LOGIN_SUCCESS } from 'src/constants/auth';
import { LOAD_SUCCESS } from 'src/constants/sync';

import {
  SCHEDULED_CALL_LIST_SUCCESS,
  SCHEDULED_CALL_PATCH_SUCCESS,
  SCHEDULED_CALL_CREATE_SUCCESS,
} from 'src/constants/schedule';

import { EVENT_LIST_SUCCESS } from 'src/constants/event';

import {
  CALL_NOTE_LIST_SUCCESS,
  CALL_NOTE_PATCH_SUCCESS,
  CALL_NOTE_CREATE_SUCCESS,
} from 'src/constants/callNote';


const ACTIONS_WITH_ENTITIES = [
  AUTH_LOGIN_SUCCESS,
  PROFILE_FETCH_SUCCESS,
  ONBOARDING_UPDATE_PROFILE_SUCCESS,
  LOAD_SUCCESS,
  SCHEDULED_CALL_LIST_SUCCESS,
  SCHEDULED_CALL_PATCH_SUCCESS,
  SCHEDULED_CALL_CREATE_SUCCESS,
  EVENT_LIST_SUCCESS,
  CALL_NOTE_LIST_SUCCESS,
  CALL_NOTE_PATCH_SUCCESS,
  CALL_NOTE_CREATE_SUCCESS,
];


export {
  ACTIONS_WITH_ENTITIES,
};
