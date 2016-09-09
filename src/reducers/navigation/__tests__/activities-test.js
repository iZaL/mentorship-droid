import reduce from 'src/reducers/navigation/activities';
import * as activities from 'src/actions/activities';
import * as routes from 'src/constants/routes';
import { createStack, createRoute, push, pop } from 'src/navigationHelpers';


describe('src/reducers/navigation/activities', () => {
  describe('CATEGORY_CHOOSE', () => {
    it('should push on the category route', () => {
      expect(reduce(createStack(), activities.chooseCategory(23)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_CATEGORY, {
          categoryId: 23,
        })));
    });
  });

  describe('ACTIVITY_CHOOSE', () => {
    it('should push on the activity route', () => {
      expect(reduce(createStack(), activities.chooseActivity(23)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_ACTIVITY, {
          activityId: 23,
        })));
    });
  });

  describe('ACTIVITY_SCHEDULE_CALL', () => {
    it('should push on the activity route', () => {
      expect(reduce(createStack(), activities.scheduleActivityCall(23)))
        .toEqual(push(createStack(), createRoute(routes.ROUTE_SCHEDULE_CALL, {
          activityId: 23,
        })));
    });
  });

  describe('ACTIVITY_SCREEN_DISMISS', () => {
    it('should pop the current route', () => {
      const stack = push(createStack(), createStack(routes.ROUTE_ACTIVITY));
      expect(reduce(stack, activities.dismissActivityScreen()))
        .toEqual(pop(stack));
    });
  });
});
