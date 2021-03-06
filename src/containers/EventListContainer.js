import { connect } from 'react-redux';
import EventList from 'src/views/EventList';
import { getEvents } from 'src/store/helpers';


export const mapStateToProps = state => ({
  events: getEvents(state),
});


export default connect(mapStateToProps)(EventList);
