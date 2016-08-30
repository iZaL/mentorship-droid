import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import Calendar from 'react-native-calendar';

import { FONT, FONT_WEIGHT } from 'src/constants/styles';
import colors from 'src/constants/colors';


const styles = StyleSheet.create({
  calendarContainer: {
    flex: 1,
  },
  calendarControls: {
    height: 60,
    backgroundColor: colors.CALENDAR_CONTROLS_BG,
  },
  controlButton: {
  },
  controlButtonText: {
    fontFamily: FONT.REGULAR,
    fontSize: 24,
    color: colors.CALENDAR_CONTROLS_TEXT,
  },
  title: {
    fontFamily: FONT.MEDIUM,
    fontWeight: FONT_WEIGHT.MEDIUM,
    fontSize: 20,
    textAlign: 'center',
    color: colors.CALENDAR_TITLE,
  },
  dayButton: {
    borderTopWidth: 0,
    flex: 1,
    justifyContent: 'center',
  },
  day: {
    fontFamily: FONT.REGULAR,
    fontSize: 15,
  },
  weekendDayText: {
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: colors.CALENDAR_WEEKEND_DAY_TEXT,
  },
  monthContainer: {
    flex: 1,
    backgroundColor: colors.CALENDAR_MONTH_CONTAINER,
  },
  weekRow: {
    flex: 1,
  },
  calendarHeading: {
    height: 44,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    backgroundColor: colors.CALENDAR_HEADING,
  },
  dayHeading: { // day of the week, above the calendar
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: colors.CALENDAR_DAY_HEADING,
  },
  weekendHeading: { // day of the week, weekend baby
    fontFamily: FONT.REGULAR,
    fontSize: 15,
    color: colors.CALENDAR_WEEKEND_HEADING,
  },
  eventIndicator: {
    backgroundColor: colors.CALENDAR_EVENT_BG,
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  currentDayCircle: {
    backgroundColor: colors.CALENDAR_CURRENT_DAY_BG,
  },
});

const ScheduleListCalendar = ({
  dates,
  handleDateSelected,
}) => (
  <Calendar
    eventDates={dates}
    showControls
    prevButtonText="<"
    nextButtonText=">"
    onDateSelect={handleDateSelected}
    customStyle={styles}
  />
);
ScheduleListCalendar.propTypes = {
  dates: PropTypes.array.isRequired,
  handleDateSelected: PropTypes.func.isRequired,
};
export default ScheduleListCalendar;