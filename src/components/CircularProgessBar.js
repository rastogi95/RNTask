import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Color} from '../assets/color/index.color';
import {DP} from '../utils/Dimen';

const propStyle = (percent, base_degrees) => {
  const rotateBy = base_degrees + percent * 3.6;
  return {
    transform: [{rotateZ: `${rotateBy}deg`}],
  };
};

const renderThirdLayer = percent => {
  if (percent > 50) {
    return (
      <View
        style={[
          styles.secondProgressLayer,
          propStyle(percent - 50, 45),
        ]}></View>
    );
  } else {
    return <View style={styles.offsetLayer}></View>;
  }
};

const CircularProgress = ({percent}) => {
  let firstProgressLayerStyle;
  if (percent > 50) {
    firstProgressLayerStyle = propStyle(50, -135);
  } else {
    firstProgressLayerStyle = propStyle(percent, -135);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.firstProgressLayer, firstProgressLayerStyle]}></View>
      {renderThirdLayer(percent)}
      <Text style={styles.display}>{percent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: DP._50,
    height: DP._50,
    borderWidth: 5,
    borderRadius: 50,
    borderColor: 'rgb(240,240,240)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstProgressLayer: {
    width: DP._50,
    height: DP._50,
    borderWidth: 5,
    borderRadius: 50,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: Color.DODGER_BLUE,
    borderTopColor: Color.DODGER_BLUE,
    transform: [{rotateZ: '-135deg'}],
  },
  secondProgressLayer: {
    width: DP._50,
    height: DP._50,
    borderWidth: 5,
    borderRadius: 50,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: Color.DODGER_BLUE,
    borderTopColor: Color.DODGER_BLUE,
    transform: [{rotateZ: '45deg'}],
  },
  offsetLayer: {
    width: DP._50,
    height: DP._50,
    borderWidth: 5,
    borderRadius: 50,
    position: 'absolute',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'rgb(240,240,240)',
    borderTopColor: 'rgb(240,240,240)',
    transform: [{rotateZ: '-135deg'}],
  },
  display: {
    position: 'absolute',
    fontSize: DP._12,
    fontWeight: 'bold',
  },
});

export default CircularProgress;
