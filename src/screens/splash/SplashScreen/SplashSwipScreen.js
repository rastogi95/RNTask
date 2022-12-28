import React, {useState} from 'react';
import {StyleSheet, ScrollView, Dimensions, View} from 'react-native';
import {Color} from '../../../assets/color/index.color';
import {ImageConst} from '../../../assets/images/ImageConst/index.image';
import {Strings} from '../../../assets/string/index.string';
import SafeAreaHOC from '../../../components/SafeAreaHOC';
import SplashComp from '../../../components/SplashComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {setLogin} from '../../../redux/action/Action';
const height = Dimensions.get('window').height;
const SplashSwipScreen = () => {
  const dispatch = useDispatch();
  const storeData = async value => {
    try {
      AsyncStorage.setItem('@storage_Key', 'isSplash');
      dispatch(setLogin({isLoader: true}));
      // navigation.navigate('profile');
    } catch (e) {
      // saving error
    }
  };
  const handleScroll = event => {
    storeData();
  };

  return (
    <SafeAreaHOC style={Styles.container}>
      <SplashComp
        headerFrienSomeone={Strings.splashSwip.dontLikeSome}
        headerTabOrSwip={Strings.splashSwip.SwipeUpToto}
        headerLikeOrPass={Strings.splashSwip.pass}
        txtColor={false}
        icon={ImageConst.swipeIcon}
        footerText={Strings.splashSwip.SwipeToContinue}
      />

      {/* Scroll view was not allowing to scroll for one item on android platform that is why we are keeping scrollview absolute on dummy data to achieve onScroll functionality. */}

      <View style={Styles.positionView}>
        <ScrollView onScroll={handleScroll}>
          <View style={Styles.height500} />
          <View style={Styles.height100} />
        </ScrollView>
      </View>
    </SafeAreaHOC>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BLACK,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  height100: {
    height: 100,
    width: 500,
  },
  positionView: {
    height: height,
    width: 400,
    position: 'absolute',
  },
  height500: {
    height: height,
    width: 500,
  },
});
export default SplashSwipScreen;
