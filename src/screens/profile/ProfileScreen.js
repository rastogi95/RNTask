import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import profiles from '../../../profiles.json';
import {ImageConst} from '../../assets/images/ImageConst/index.image';
import Button from '../../components/Button';
import InterestCart from '../../components/InterestCart';
import ProfileCart from '../../components/ProfileCart';
import SafeAreaHOC from '../../components/SafeAreaHOC';
import {checkEven} from '../../utils/utils';
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
const ProfileScreen = ({route, navigation}) => {
  const [count, setCount] = useState(1);
  const index = route.params?.index ?? 0;

  const switchView = () => {
    console.log('val', index + 1, profiles.data.length);
    if (index + 1 <= profiles.data.length - 1) {
      navigation.push('profile', {index: index + 1});
    }
  };

  const doubleTapforLike = () => {
    setCount(count + 1);
    let backTimer;
    if (count === 2) {
      clearTimeout(backTimer);
      if (index + 1 <= profiles.data.length - 1) {
        navigation.push('profile', {index: index + 1});
      }
    } else {
      backTimer = setTimeout(() => {
        setCount(1);
      }, 500);
    }
  };

  return (
    <SafeAreaHOC style={Styles.container}>
      <View style={Styles.subContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
                  status={checkEven(i) == 1 ? 'odd' : 'even'}
                />
                {checkEven(i) == 1 ? (
                  <UserMedia
                    data={profiles.data[index].userMedia[(i % 2) - 1]}
                  />
                ) : null}
              </View>
            );
          })}

          <View style={Styles.flexRow}>
            <Button icon={ImageConst.cross} onPressBtn={switchView} />
            <Button icon={ImageConst.path} onPressBtn={doubleTapforLike} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaHOC>
  );
};

export default ProfileScreen;
