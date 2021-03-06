import { filter, last } from 'lodash';
import { connect } from 'react-redux';
import Activity from 'src/views/Activity';

import { openScheduledCall } from 'src/actions/schedule';

import {
  getCategory,
  getActivity,
  getNextScheduledCall,
  getCallNotes,
} from 'src/store/helpers';

import {
  scheduleActivityCall,
  viewActivityCallNotes,
  dismissActivityScreen,
} from 'src/actions/activities';


const mapStateToProps = (state, { activityId }) => {
  const activity = getActivity(state, activityId);
  const { category: categoryId } = activity;
  const category = getCategory(state, categoryId);
  const nextScheduledCall = getNextScheduledCall(state, { activity: activityId });
  const latestCallNotes = last(filter(getCallNotes(state), { callActivity: activityId }));

  return {
    category,
    activity,
    nextScheduledCall,
    latestCallNotes,
  };
};


const propsToActions = {
  // TODO
  onBackPress: dismissActivityScreen,
  onSchedulePress: scheduleActivityCall,
  onReschedulePress: openScheduledCall,
  onViewCallNotesPress: viewActivityCallNotes,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(Activity);
