import React from 'react';

import {Dimensions, View} from 'react-native';

import Animated, {
  useSharedValue,
  interpolate,
  useAnimatedScrollHandler,
  Extrapolation,
  useAnimatedStyle,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');

const Appi = () => {
  const imageHeight = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      imageHeight.value = e.contentOffset.y;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const Image_Height = interpolate(
      imageHeight.value,
      [0, height * 0.7],
      [height * 0.5, height * 0.1],
      {
        extrapolateRight: Extrapolation.CLAMP,
      },
    );

    return {
      height: Image_Height,
    };
  });

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.ScrollView
        onScroll={scrollHandler}
        style={{
          paddingTop: height * 0.5,
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />

        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: 'black',
          }}
        />
      </Animated.ScrollView>
      <Animated.Image
        source={require('../../assets/images/egg.png')}
        style={[
          {
            width: width,
            height: height * 0.5,
            position: 'absolute',
            top: 0,
            resizeMode: 'stretch',
          },
          animatedStyles,
        ]}
      />
    </View>
  );
};

export default Appi;
