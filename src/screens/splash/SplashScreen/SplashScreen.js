import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../../assets/color/index.color';
import {ImageConst} from '../../../assets/images/ImageConst/index.image';
import {Strings} from '../../../assets/string/index.string';
import SafeAreaHOC from '../../../components/SafeAreaHOC';
import SplashComp from '../../../components/SplashComp';

const SplashScreen = ({navigation}) => {
  const [count, setCount] = useState(1);

  const doubleTapforLike = () => {
    setCount(count + 1);
    let backTimer;
    if (count === 2) {
      clearTimeout(backTimer);
      navigation.navigate('splashSwip');
    } else {
      backTimer = setTimeout(() => {
        setCount(1);
      }, 500);
    }
  };

  return (
    <SafeAreaHOC style={Styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={{flex: 1}}
        onPress={doubleTapforLike}>
        <SplashComp
          headerFrienSomeone={Strings.splash.ifYouDoNotLike}
          headerTabOrSwip={Strings.splash.daubleTabTo}
          headerLikeOrPass={Strings.splash.like}
          txtColor={true}
          icon={ImageConst.daubleTabIcon}
          footerText={Strings.splash.dubleTabContinue}
        />
      </TouchableOpacity>
    </SafeAreaHOC>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.BLACK,
  },
});
export default SplashScreen;
