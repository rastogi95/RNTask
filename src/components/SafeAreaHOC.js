import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Color} from '../assets/color/index.color';

function SafeAreaHOC({children, style}) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={style?.backgroundColor || Color.WHITE}
        animated={true}
      />
      {children}
    </SafeAreaView>
  );
}

export default SafeAreaHOC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.WHITE,
  },
});
