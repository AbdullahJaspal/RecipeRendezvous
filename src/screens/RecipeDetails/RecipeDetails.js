import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';
const {width, height} = Dimensions.get('screen');

const RecipeDetails = () => {
  const [tab, setTab] = useState('Ingredients');

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{
          height: height / 1.7,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
        borderBottomLeftRadius={15}
        borderBottomRightRadius={15}
        source={require('../../assets/images/egg.png')}></ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            width: '95%',
            alignSelf: 'center',
            paddingVertical: 10,
            justifyContent: 'space-between',
            borderBottomWidth: 1,
          }}>
          <View>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 26,
                color: theme.color.primary,
              }}>
              Egg Benedict
            </Text>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 14,
                color: theme.color.darkGrey,
              }}>
              Master the king of breakfast dishes
            </Text>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 12,
                color: theme.color.darkGrey,
              }}>
              (2.564 Review)
            </Text>
          </View>
          <View style={{justifyContent: 'space-between', paddingVertical: 5}}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 12,
                color: theme.color.darkGrey,
                textAlign: 'center',
              }}>
              8.3 K{'\n'}Cooked
            </Text>
            <View
              style={{
                backgroundColor: theme.color.lightPrimary,
                paddingHorizontal: 10,
                borderRadius: 20,
                paddingVertical: 2,
                borderWidth: 1,
                borderColor: theme.color.primary,
              }}>
              <Text
                style={{
                  fontFamily: theme.fontFamily.medium,
                  fontSize: 10,
                  color: theme.color.darkGrey,
                }}>
                Add to fav
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '95%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '28%',
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              height: 55,
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                color: theme.color.darkGrey,
              }}>
              Serving
            </Text>
            <Text style={{fontFamily: theme.fontFamily.medium}}>2 pp</Text>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              justifyContent: 'space-evenly',
              height: 55,
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                color: theme.color.darkGrey,
              }}>
              Prep Time
            </Text>
            <Text style={{fontFamily: theme.fontFamily.medium}}>25 min</Text>
          </View>
          <View
            style={{
              width: '28%',
              alignItems: 'flex-end',
              justifyContent: 'space-evenly',
              height: 55,
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                color: theme.color.darkGrey,
              }}>
              Cook Time
            </Text>
            <Text style={{fontFamily: theme.fontFamily.medium}}>20 min</Text>
          </View>
        </View>
        <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
          <Text
            style={{
              fontFamily: theme.fontFamily.medium,
              color: theme.color.darkGrey,
              fontSize: 18,
            }}>
            Description
          </Text>
          <Text style={{fontFamily: theme.fontFamily.medium, marginTop: 5}}>
            The classic pile-up of toasted English mufffins topped with Canadian
            bacon, poached eggs and creamy hollandaise sauce you usually reserve
            for weekend brunch plans.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#E3E3E3',
            height: 40,
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              setTab('Ingredients');
            }}
            style={{
              width: '50%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 2,
              borderColor:
                tab === 'Ingredients'
                  ? theme.color.primary
                  : theme.color.darkGrey,
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 18,
                color:
                  tab === 'Ingredients'
                    ? theme.color.primary
                    : theme.color.darkGrey,
              }}>
              Ingredients
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTab('Directions');
            }}
            style={{
              width: '50%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              borderBottomWidth: 2,
              borderColor:
                tab === 'Directions'
                  ? theme.color.primary
                  : theme.color.darkGrey,
            }}>
            <Text
              style={{
                fontFamily: theme.fontFamily.medium,
                fontSize: 18,
                color:
                  tab === 'Directions'
                    ? theme.color.primary
                    : theme.color.darkGrey,
              }}>
              Directions
            </Text>
          </TouchableOpacity>
        </View>
        {tab === 'Ingredients' ? (
          <View>
            <FlatList
              data={[
                '2 - stick unsalted butter',
                '3 - English muffins, opened',
                '6 - Eggs, plus 3 egg yolks, divided',
                '2 - Tablespoons lemon juice',
                '3 - English muffins, opened',
              ]}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      height: 40,
                      borderColor: theme.color.darkGrey,
                      justifyContent: 'center',
                      paddingHorizontal: 10,
                    }}>
                    <Text style={{fontFamily: theme.fontFamily.medium}}>
                      {item}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View>
            <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
              <Text
                style={{
                  fontFamily: theme.fontFamily.medium,
                  color: theme.color.primary,
                  fontSize: 18,
                  marginLeft: 10,
                }}>
                1. Make the clarified butter
              </Text>
              <Text
                style={{
                  fontFamily: theme.fontFamily.regular,
                  marginTop: 5,
                  fontSize: 12,
                }}>
                The classic pile-up of toasted English mufffins topped with
                Canadian bacon, poached eggs and creamy hollandaise sauce you
                usually reserve for weekend brunch plans.
              </Text>
            </View>
            <View style={{width: '95%', alignSelf: 'center', marginTop: 10}}>
              <Text
                style={{
                  fontFamily: theme.fontFamily.medium,
                  color: theme.color.primary,
                  fontSize: 18,
                  marginLeft: 10,
                }}>
                2. Make the sauce
              </Text>
              <Text
                style={{
                  fontFamily: theme.fontFamily.regular,
                  marginTop: 5,
                  fontSize: 12,
                }}>
                The classic pile-up of toasted English mufffins topped with
                Canadian bacon, poached eggs and creamy hollandaise sauce you
                usually reserve for weekend brunch plans.
              </Text>
            </View>
          </View>
        )}
        <View style={{height: 50}} />
      </ScrollView>
    </View>
  );
};

export default RecipeDetails;
