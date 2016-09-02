import { noop } from 'lodash';
import { connect } from 'react-redux';
import Activity from 'src/views/Activity';
import { getCategory, getActivity } from 'src/stores/helpers';
import { dismissScreen } from 'src/actions/navigation';


const mapStateToProps = (state, { activityId }) => {
  const activity = getActivity(state, activityId);
  const { category: categoryId } = activity;
  const category = getCategory(state, categoryId);

  return {
    category,
    activity,
  };
};


const propsToActions = {
  // TODO
  onSchedulePress: noop,
  onBackPress: dismissScreen,
};


export { mapStateToProps };
export default connect(mapStateToProps, propsToActions)(Activity);
