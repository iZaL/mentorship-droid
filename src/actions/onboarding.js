import * as constants from 'src/constants/onboarding';


export const startProfile = () => ({
  type: constants.ONBOARDING_START_PROFILE,
});


export const chooseProfilePicture = () => ({
  type: constants.ONBOARDING_CHOOSE_PROFILE_PICTURE,
});


export const updateProfilePicture = path => ({
  type: constants.ONBOARDING_UPDATE_PROFILE_PICTURE,
  payload: {
    profilePicture: path,
  },
});


export const updateProfile = (payload) => ({
  type: constants.ONBOARDING_UPDATE_PROFILE,
  payload,
});


export const stepBack = () => ({
  type: constants.ONBOARDING_STEP_BACK_REQUEST,
});


export const stepForward = () => ({
  type: constants.ONBOARDING_STEP_FORWARD_REQUEST,
});
