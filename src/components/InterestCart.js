import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Color} from '../assets/color/index.color';
import {ImageConst} from '../assets/images/ImageConst/index.image';
import {Strings} from '../assets/string/index.string';
import {DP} from '../utils/Dimen';
import shadowView from '../utils/utils';

const InterestCart = ({data, index, status}) => {
  // const {item,status} = props.data;
  const interestView = status;
  return (
    <View style={Styles.container}>
      {interestView === 'even' ? (
        <View style={Styles.cartConatiner}>
          <View style={Styles.imgCart(true)}>
            <Image source={ImageConst.artIcon} resizeMode="contain" />
          </View>
          <View style={Styles.textView(true)}>
            <Text style={Styles.interestTxt}>{`${Strings.interest}${
              index + 1
            }`}</Text>
            <Text style={Styles.titleTxt} numberOfLines={2}>
              {data.title}
            </Text>
          </View>
        </View>
      ) : (
        <View style={Styles.cartConatiner}>
          <View style={Styles.textView(false)}>
            <Text style={Styles.interestTxt}>{`${Strings.interest}${
              index + 1
            }`}</Text>
            <Text style={Styles.titleTxt} numberOfLines={2}>
              {data.title}
            </Text>
          </View>
          <View style={Styles.imgCart(false)}>
            <Image source={ImageConst.layerIcon} resizeMode="contain" />
          </View>
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  cartConatiner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCart: status => ({
    height: DP._100,
    width: DP._100,
    backgroundColor: 'white',
    marginLeft: !status ? 20 : 0,
    borderRadius: 20,
    ...shadowView.shadowView.shadow,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  textView: status => ({
    marginLeft: status ? 20 : 0,
    width: Dimensions.get('window').width / 2,
  }),
  interestTxt: {
    fontSize: DP._20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  titleTxt: {
    fontSize: DP._13,
    color: Color.GREY_32,
  },
});
export default InterestCart;
