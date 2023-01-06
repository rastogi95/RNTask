import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  BackHandler,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import profiles from '../../../profiles.json';
import {ImageConst} from '../../assets/images/ImageConst/index.image';
import Button from '../../components/Button';
import FadeInView from '../../components/ImageAniation';
import InterestCart from '../../components/InterestCart';
import ProfileCart from '../../components/ProfileCart';
import SafeAreaHOC from '../../components/SafeAreaHOC';
import {checkOddEven} from '../../utils/utils';
import {Styles} from './Styles';

const UserMedia = ({data}) => {
  return (
    <View style={Styles.userMediaView}>
      {data?.description ? (
        <Text style={Styles.userMediaTxt}>{data?.description}</Text>
      ) : null}
      <View style={Styles.userMediaImg}>
        <Text>User Media</Text>
      </View>
    </View>
  );
};
const deviceScreenHeight = Dimensions.get('window').height;
const ProfileScreen = ({route, navigation}) => {
  const [count, setCount] = useState(1);
  const [stateful, setStateful] = useState(false);
  const [enable, setEnable] = useState('');
  const [like, setLike] = useState(false);
  const index = route.params?.index ?? 0;
  let status = true;

  const switchView = () => {
    console.log('value===', index + 1, profiles.data.length);
    if (index + 1 <= profiles.data.length - 1) {
      navigation.push('profile', {index: index + 1});
    }
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const doubleTapforLike = () => {
    setCount(count + 1);
    let backTimer;
    if (count === 2) {
      clearTimeout(backTimer);
      setLike(true);
      closeModal();
    } else {
      backTimer = setTimeout(() => {
        setCount(1);
      }, 500);
    }
  };

  const onClickSigleTab = () => {
    setLike(true);
    closeModal();
  };

  const enableSomeButton = () => {
    console.log('user experience');
    setStateful(true);
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const onLayout = event => {
    const {x, y, width, height} = event.nativeEvent.layout;
    setEnable(height);
  };

  const closeModal = () => {
    setTimeout(() => {
      setLike(false);
    }, 1100);
  };

  return (
    <SafeAreaHOC style={Styles.container}>
      <ScrollView
        overScrollMode="always"
        bounces={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent}) => {
          console.log(
            'isCloseToBottom(nativeEvent)',
            isCloseToBottom(nativeEvent),
          );
          if (isCloseToBottom(nativeEvent)) {
            enableSomeButton(isCloseToBottom(nativeEvent));
          }

          let checkPlatform =
            deviceScreenHeight < 650
              ? 550
              : deviceScreenHeight < 800
              ? 650
              : 750;
          let tempHeigh = enable - checkPlatform;
          console.log(
            'nativeEvent.contentOffset.y',
            Dimensions.get('window').height,
            tempHeigh,
            nativeEvent.contentOffset.y,
            // enable,
            // nativeEvent.contentSize.height,
            // enable + deviceScreenHeight * 0.1,
            // nativeEvent.contentSize.height > enable + deviceScreenHeight * 0.1,
          );
          if (nativeEvent.contentOffset.y > tempHeigh && status === true) {
            switchView();
            status = false;
          }
        }}
        scrollEventThrottle={40}>
        <View onLayout={onLayout} style={Styles.subContainer}>
          <TouchableWithoutFeedback
            activeOpacity={0.9}
            onPress={doubleTapforLike}>
            <View>
              <View style={Styles.margin10}>
                <ProfileCart data={profiles.data[index].userProfile} />
              </View>
              <View style={Styles.horizontalLine} />
              {profiles.data[index].interest?.map((item, i) => {
                return (
                  <View key={i} style={Styles.marginTop10}>
                    <InterestCart
                      data={item}
                      index={i}
                      status={checkOddEven(i) == 1 ? 'odd' : 'even'}
                    />
                    {checkOddEven(i) == 1 ? (
                      <UserMedia
                        data={profiles.data[index].userMedia[(i % 2) - 1]}
                      />
                    ) : null}
                  </View>
                );
              })}
            </View>
          </TouchableWithoutFeedback>

          <View style={Styles.flexRow}>
            <Button icon={ImageConst.cross} onPressBtn={switchView} />
            <Button icon={ImageConst.path} onPressBtn={onClickSigleTab} />
          </View>
        </View>
        {stateful && index + 1 <= profiles.data.length - 1 ? (
          <View style={Styles.height100} />
        ) : null}
      </ScrollView>
      {like && (
        <View style={Styles.fredPosition}>
          <FadeInView>
            <Image
              style={Styles.iconHeight}
              source={ImageConst.path}
              resizeMode="contain"
            />
          </FadeInView>
        </View>
      )}
    </SafeAreaHOC>
  );
};

export default ProfileScreen;
