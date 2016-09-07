import React, { PropTypes } from 'react';
import { View, TouchableNativeFeedback, Image } from 'react-native';

import { Text } from 'src/components';
import styles from './styles';
import images from 'src/constants/images';
import * as constants from 'src/constants/navigation';


const tabs = {
  activities: constants.NAV_TAB_ACTIVITIES,
  journey: constants.NAV_TAB_JOURNEY,
  scheduledCalls: constants.NAV_TAB_SCHEDULED_CALLS,
};


const icons = {
  NAV_TAB_ACTIVITIES: images.NAV_TAB_ACTIVITIES,
  NAV_TAB_CHAT: images.NAV_TAB_CHAT,
  NAV_TAB_COMMUNITY: images.NAV_TAB_COMMUNITY,
  NAV_TAB_JOURNEY: images.NAV_TAB_JOURNEY,
  NAV_TAB_SCHEDULED_CALLS: images.NAV_TAB_SCHEDULED_CALLS,
};


const titles = {
  NAV_TAB_ACTIVITIES: 'Activities',
  NAV_TAB_CHAT: 'Chat',
  NAV_TAB_COMMUNITY: 'Community',
  NAV_TAB_JOURNEY: 'Journey',
  NAV_TAB_SCHEDULED_CALLS: 'Calls',
};


export const NavTabBar = ({
  activeTab,
  onTabPress,
}) => (
  <View style={styles.bar}>
    <NavTab
      uid={tabs.journey}
      onPress={onTabPress}
      type={tabs.journey}
      active={activeTab === tabs.journey}
    />

    <NavTab
      uid={tabs.activities}
      onPress={onTabPress}
      type={tabs.activities}
      active={activeTab === tabs.activities}
    />

    <NavTab
      uid={tabs.scheduledCalls}
      onPress={onTabPress}
      type={tabs.scheduledCalls}
      active={activeTab === tabs.scheduledCalls}
    />
  </View>
);


export const NavTab = ({
  type,
  active,
  onPress,
}) => (
  <TouchableNativeFeedback onPress={() => !active && onPress(type)}>
    <View style={styles.tab}>
      <Image
        source={icons[type]}
        style={[styles.tabIcon, active && styles.tabIconIsActive]}
      />

      {
        active
          ? <Text style={[styles.tabTitle, active && styles.tabTitleIsActive]}>
            {titles[type]}
          </Text>
          : null
      }
    </View>
  </TouchableNativeFeedback>
);


NavTabBar.tabs = tabs;


NavTabBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabPress: PropTypes.func.isRequired,
};


NavTab.propTypes = {
  type: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};


export default NavTabBar;