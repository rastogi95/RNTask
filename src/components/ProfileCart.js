import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../assets/color/index.color';
import {Strings} from '../assets/string/index.string';
import {DP} from '../utils/Dimen';
import shadowView from '../utils/utils';
import CircularProgress from './CircularProgessBar';
const ProfileCart = ({...props}) => {
  const item = props.data;
  return (
    <>
      <View style={Styles.container}>
        <View style={Styles.innerCard}>
          <Text style={Styles.textsize}>Avatar</Text>
        </View>
        <View style={Styles.footerView}>
          <View style={Styles.cart1}>
            <Text style={Styles.nameTxt}>Name</Text>
            <Text style={Styles.agetxt}>{`${Strings.age} ${item.age}`}</Text>
            <Text
              style={Styles.agetxt}>{`${item.distance} ${Strings.away}`}</Text>
          </View>
          <View style={Styles.cart2}>
            <View style={Styles.cart2View}>
              <Text style={Styles.textsize}>Profile Picture</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={Styles.percentView}>
        <View style={Styles.innerViewPer}>
          <CircularProgress percent={item.profilePercent} />
        </View>
      </View>
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.BLACK_LIGHT,
    borderRadius: 20,
    padding: DP._11,
    ...shadowView.shadowView.shadow,
    backgroundColor: Color.WHITE,
  },
  innerCard: {
    height: DP._310,
    borderRadius: 20,
    opacity: 1,
    backgroundColor: Color.GREY_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerView: {
    marginTop: DP._11,
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart1: {
    flex: 1,
  },
  cart2: {
    flex: 1,
    alignItems: 'flex-end',
  },
  cart2View: {
    height: DP._102,
    width: DP._102,
    borderRadius: 20,
    opacity: 1,
    backgroundColor: Color.GREY_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textsize: {
    fontSize: DP._17,
  },
  nameTxt: {
    fontSize: DP._29,
    color: Color.DARK_BLACK,
    fontWeight: 'bold',
  },
  agetxt: {
    fontSize: DP._15,
    color: Color.GREY_LIGHT,
  },
  percentView: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerViewPer: {
    height: DP._52,
    width: DP._52,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: Color.BLACK,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ProfileCart;
