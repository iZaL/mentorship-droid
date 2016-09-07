import { fromPairs } from 'lodash';
import { mapStateToProps } from 'src/containers/NavigatorContainer';
import * as constants from 'src/constants/navigation';


describe('NavigatorContainer', () => {
  describe('mapStateToProps', () => {
    it('should provide navigation state for each tab', () => {
      expect(mapStateToProps({
        navigation: {
          activities: 'ACTIVITIES_STACK',
          journey: 'JOURNEY_STACK',
          scheduledCalls: 'SCHEDULED_CALLS_STACK',
        },
      }))
      .toEqual(jasmine.objectContaining({
        navigationStates: fromPairs([
          [constants.NAV_TAB_ACTIVITIES, 'ACTIVITIES_STACK'],
          [constants.NAV_TAB_JOURNEY, 'JOURNEY_STACK'],
          [constants.NAV_TAB_SCHEDULED_CALLS, 'SCHEDULED_CALLS_STACK'],
        ]),
      }));
    });
  });
});