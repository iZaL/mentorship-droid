import { StyleSheet } from 'react-native';
import colors from 'src/constants/colors';
import { FONT, FONT_WEIGHT } from 'src/constants/styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.EVENT_BG,
    margin: 24,
    marginTop: 23,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 16,
    paddingRight: 8,
    borderRadius: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    overflow: 'visible',
    width: 56,
    height: 56,
    borderRadius: 56,
    marginRight: 16,
    backgroundColor: colors.EVENT_ICON_BG,
  },
  iconImage: {
    width: 56,
    height: 56,
    borderRadius: 56,
  },
  counter: {
    position: 'absolute',
    top: -4,
    left: 38,
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colors.BG_ORANGE,
  },
  counterContent: {
    fontSize: 12,
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
    color: colors.TEXT_LIGHT,
  },
  textContainer: {
    flex: 1,
    paddingTop: 3,
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 16,
    color: colors.EVENT_TITLE,
    textAlign: 'left',
    fontFamily: FONT.BOLD,
    fontWeight: FONT_WEIGHT.BOLD,
  },
  blurb: {
    fontSize: 15,
    color: colors.EVENT_BLURB,
    textAlign: 'left',
  },
  more: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
