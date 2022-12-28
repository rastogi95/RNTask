import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import ProfileScreen from '../screens/profile/ProfileScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/splash/SplashScreen/SplashScreen';
import SplashSwipScreen from '../screens/splash/SplashScreen/SplashSwipScreen';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../redux/action/Action';

const Stack = createNativeStackNavigator();

const stackConfig = {
  screenOptions: {
    headerShown: false,
  },
};

export const verticalAnimation = {
  gestureDirection: 'vertical',
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
};

export const AuthStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="splash">
      <Stack.Group {...stackConfig} screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="splashSwip" component={SplashSwipScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  const [tempLoader, setTempLoader] = useState(false);
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.isLogin);
  console.log('isLoginn', isLogin);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setTempLoader(true);
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        dispatch(
          setLogin({
            isLoader: true,
          }),
        );
      }
      setTempLoader(false);
    } catch (e) {
      // setTempLoader(false),
    }
  };
  if (tempLoader) {
    return (
      <View>
        <ActivityIndicator size="large" color={'red'} />
      </View>
    );
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          {...stackConfig}
          screenOptions={{...verticalAnimation, headerShown: false}}>
          {isLogin?.isLoader ? (
            <Stack.Screen name="profile" component={ProfileScreen} />
          ) : (
            <Stack.Group {...stackConfig} screenOptions={{headerShown: false}}>
              <Stack.Screen name="splash" component={SplashScreen} />
              <Stack.Screen name="splashSwip" component={SplashSwipScreen} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppContainer;
