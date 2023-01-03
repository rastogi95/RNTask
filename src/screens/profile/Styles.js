import {Dimensions, StyleSheet} from 'react-native';
import {Color} from '../../assets/color/index.color';
import {DP} from '../../utils/Dimen';
import shadowView from '../../utils/utils';
const height = Dimensions.get('window').height;

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    margin: DP._15,
    backgroundColor: Color.LIGHT_GREY,
    borderRadius: 20,
    paddingTop: DP._15,
    ...shadowView.shadowView.shadow,
  },
  margin10: {
    marginHorizontal: 10,
  },
  horizontalLine: {
    height: 1,
    width: '100%',
    backgroundColor: Color.GREY_LINE,
    marginTop: DP._50,
  },
  marginTop10: {
    marginVertical: 20,
  },
  userMediaView: {
    borderWidth: 2,
    borderColor: Color.BLACK_LIGHT,
    borderRadius: 20,
    padding: DP._13,
    ...shadowView.shadowView.shadow,
    backgroundColor: Color.WHITE,
    marginTop: DP._25,
    marginHorizontal: 10,
  },
  userMediaTxt: {
    fontSize: DP._14,
    textAlign: 'center',
  },
  userMediaImg: {
    height: DP._260,
    borderRadius: 20,
    opacity: 1,
    backgroundColor: Color.GREY_DARK,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  height100: {
    height: 100,
    width: 500,
    // backgroundColor:'pink'
  },
  positionView: {
    height: 200,
    width: 400,
    position: 'absolute',
    backgroundColor: 'red',
    bottom: 70,
  },
  height500: {
    height: height,
    width: 500,
    // backgroundColor:'blue'
  },
});
