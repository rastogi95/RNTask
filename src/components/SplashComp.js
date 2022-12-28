import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Color} from '../assets/color/index.color';
import {DP} from '../utils/Dimen';

const SplashComp = ({...props}) => {
  return (
    <View style={Styles.sunContainer}>
      <View style={Styles.header}>
        <Text style={Styles.splashTxt(true)}>{props.headerFrienSomeone}</Text>
        <Text style={[Styles.likeTxt, {color: Color.WHITE}]}>
          {props.headerTabOrSwip}
          <Text
            style={[
              Styles.likeTxt,
              {color: props.txtColor ? Color.DODGER_BLUE : Color.RED},
            ]}>
            {props.headerLikeOrPass}
          </Text>
        </Text>
      </View>
      <View style={Styles.containerData}>
        <Image source={props.icon} resizeMode="contain" />
      </View>
      <View style={Styles.footer}>
        <Text style={Styles.splashTxt(false)}>{props.footerText}</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  sunContainer: {
    flex: 1,
    marginHorizontal: DP._60,
  },
  header: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer: {flex: 1.5, marginHorizontal: 45},
  containerData: {
    flex: 6.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
  },
  splashTxt: status => ({
    fontSize: status ? DP._14 : DP._20,
    color: Color.WHITE,
    textAlign: 'center',
  }),
  likeTxt: {
    fontSize: DP._29,
    fontWeight: 'bold',
  },
});

export default SplashComp;
