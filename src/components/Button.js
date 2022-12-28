import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Color} from '../assets/color/index.color';
import {DP} from '../utils/Dimen';
import shadowView from '../utils/utils';

const Button = ({icon, onPressBtn}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPressBtn}
      style={Styles.container}>
      <Image source={icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: DP._60,
    width: DP._60,
    borderRadius: 60,
    borderWidth: 1,
    borderColor: Color.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    margin: DP._15,
    ...shadowView.shadowView.shadow,
    backgroundColor: Color.WHITE,
  },
});
export default Button;
