import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');

const OnBoarding = () => {
  const [sliderState, setSliderState] = useState({currentPage: 0});
  const {currentPage} = sliderState;
  const {currentPage: pageIndex} = sliderState;

  const setSliderPage = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.floor(x / width);
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const RenderFirst = () => {
    return (
      <View
        style={{
          width: width,
          top: 50,
          height: height / 1.2,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontFamily: theme.fontFamily.medium,
            fontSize: 18,
            marginLeft: 15,
            width: '60%',
          }}>
          Choose your favorite cuisines
        </Text>
        <Circle
          title={'Spanish'}
          style={{left: '-9%', top: 50}}
          color={'#BFB8A6'}
          size={width / 2.7}
        />
        <Circle
          title={'Thai'}
          style={{right: '-5%', top: 20}}
          color={'#EECC53'}
          size={width / 3.2}
        />
        <Circle
          title={'Mexican'}
          style={{right: '35%', top: 80}}
          color={'#F2E24F'}
          size={width / 3.6}
        />
        <Circle
          title={'Turkish'}
          style={{left: '20%', top: '30%'}}
          color={'#F0DDB6'}
          size={width / 4.2}
        />
        <Circle
          title={'Italian'}
          style={{right: -40, top: 160}}
          color={'#D7A63C'}
          size={width / 2.6}
        />
        <Circle
          title={'Indian'}
          style={{left: -40, bottom: 190}}
          color={'#AE9847'}
          size={width / 2.6}
        />
        <Circle
          title={'Japanese'}
          style={{left: 170, bottom: 250}}
          color={'#E0C079'}
          size={width / 3.3}
        />
        <Circle
          title={'Greek'}
          style={{right: 5, bottom: 150}}
          color={'#DC9A14'}
          size={width / 3.3}
        />
        <Circle
          title={'German'}
          style={{left: 100, bottom: 90}}
          color={'#F6A900'}
          size={width / 2.9}
        />
        <TouchableOpacity
          style={styles.buttoCont}
          onPress={() => {
            const {currentPage} = sliderState;
            _scrollView.scrollTo({x: (currentPage + 1) * width});
          }}>
          <Text
            style={{
              fontFamily: theme.fontFamily.regular,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const RenderSecond = () => {
    return (
      <View
        style={{
          width: width,
          top: 50,
          height: height / 1.2,
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            fontFamily: theme.fontFamily.medium,
            fontSize: 18,
            marginLeft: 15,
            width: '55%',
          }}>
          Choose your favorite food
        </Text>
        <View style={{...styles.tabsCont, marginTop: 50}}>
          <Tabs color={'#DC9A14'} title={'Burger'} />
          <Tabs color={'#EECC53'} title={'Donut'} />
          <Tabs color={'#E5E5E5'} title={'Bread'} />
        </View>
        <View style={{...styles.tabsCont, width: '100%'}}>
          <Tabs
            color={'#DC9A14'}
            title={'Sushi'}
            paddingH={30}
            style={{left: -10}}
          />
          <Tabs color={'#9C9C9C'} title={'Ice Cream'} paddingH={30} />
          <Tabs color={'#E0C079'} title={'Salad'} paddingH={30} />
        </View>
        <View style={{...styles.tabsCont, width: '100%'}}>
          <Tabs color={'#9F9368'} paddingH={20} style={{}} title={'   '} />
          <Tabs color={'#E0C079'} title={'Milkshake'} paddingH={40} />
          <Tabs color={'#AE9847'} title={'Steak'} paddingH={30} />
          <Tabs
            color={'#DC9A14'}
            title={''}
            paddingH={20}
            style={{right: -20}}
          />
        </View>
        <View style={{...styles.tabsCont, width: '100%'}}>
          <Tabs
            color={'#F6A900'}
            paddingH={30}
            style={{left: -10}}
            title={'Milk'}
          />
          <Tabs color={'#E5E5E5'} title={'Pizza'} paddingH={50} />
          <Tabs
            color={'#F2E24F'}
            title={'Steak'}
            paddingH={40}
            style={{right: -30}}
          />
        </View>
        <View style={{...styles.tabsCont, width: '100%'}}>
          <Tabs
            color={'#9C9C9C'}
            title={'Taco'}
            paddingH={20}
            style={{left: -15}}
          />
          <Tabs
            color={'#DC9A14'}
            title={'Pasta'}
            paddingH={30}
            style={{left: -20}}
          />
          <Tabs color={'#AE9847'} title={'Yoghurt'} paddingH={30} />
          <Tabs
            color={'#F6A900'}
            title={''}
            paddingH={20}
            style={{right: -20}}
          />
        </View>
        <TouchableOpacity
          style={styles.buttoCont}
          onPress={() => {
            const {currentPage} = sliderState;
            _scrollView.scrollTo({x: (currentPage + 1) * width});
          }}>
          <Text
            style={{
              fontFamily: theme.fontFamily.regular,
            }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const Circle = ({title, style, color, size}) => {
    return (
      <View
        style={{
          ...styles.circle,
          ...style,
          backgroundColor: color,
          width: size,
          height: size,
        }}>
        <Text style={{fontFamily: theme.fontFamily.medium, color: 'white'}}>
          {title}
        </Text>
      </View>
    );
  };

  const Tabs = ({color, title, paddingH = 20, style}) => {
    return (
      <View
        style={{
          backgroundColor: color,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: paddingH,
          paddingVertical: 4,
          borderRadius: 100,
          ...style,
        }}>
        <Text
          style={{
            fontFamily: theme.fontFamily.regular,
            color: 'white',
            fontSize: 16,
          }}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={styles.paginationWrapper}>
          {Array.from(Array(2).keys()).map((key, index) => (
            <View
              style={[
                styles.paginationDots,
                {
                  opacity: pageIndex === index ? 1 : 0.2,
                  width: pageIndex === index ? 20 : 5,
                },
              ]}
              key={index}
            />
          ))}
        </View>
        <ScrollView
          ref={scrollView => {
            _scrollView = scrollView;
          }}
          style={{}}
          horizontal={true}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
          pagingEnabled={true}
          onScroll={(event: any) => {
            setSliderPage(event);
          }}>
          <RenderFirst />
          <RenderSecond />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  paginationWrapper: {
    position: 'absolute',
    top: 20,
    left: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    height: 5,
    borderRadius: 10 / 2,
    backgroundColor: theme.color.primary,
    marginLeft: 10,
  },
  circle: {
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  buttoCont: {
    alignSelf: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 50,
    borderWidth: 1,
    bottom: 20,
    position: 'absolute',
    borderColor: theme.color.primary,
  },
  tabsCont: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

export default OnBoarding;
