import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';

const PrivacyPolicy = ({navigation}) => {
  const Section = ({title, des}) => {
    return (
      <View>
        <Text style={{fontFamily: theme.fontFamily.semiBBold, marginTop: 10}}>
          {title}
        </Text>
        <Text
          style={{
            fontFamily: theme.fontFamily.medium,
            marginTop: 10,
            color: theme.color.darkGrey,
          }}>
          {des}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,

          width: '95%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity
            style={{
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 2,
              marginRight: 20,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/icons/left.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: theme.fontFamily.bold,
              fontSize: 28,
              borderBottomWidth: 1,
              alignItems: 'flex-start',
            }}>
            Privacy Policy
          </Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Section
            title={'1. Information We Collect:'}
            des="- Personal Information: When you create an account, we may collect your name, email address, and any additional information you choose to provide. 
- Recipe Information: When you use our app, we may collect the recipes you save, create, or share."
          />
          <Section
            title="2. How We Use Your Information:"
            des={`- Personalization: We use the information you provide to personalize your app experience, such as recommending recipes based on your preferences. 
- Communication: We may use your email address to send you updates, newsletters, or important information related to our app. - Analytics: We may collect anonymous usage data to improve our app's performance and features.`}
          />
          <Section
            title="3. Data Security:"
            des={`- We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or alteration. 
- However, please note that no method of transmission over the internet or electronic storage is 100% secure.`}
          />
          <Section
            title="4. Third-Party Services:"
            des={`- Our app may contain links to third-party websites or services. Please note that we are not responsible for their privacy practices. We encourage you to review their privacy policies.`}
          />
          <Section
            title="5. Children's Privacy:"
            des={`- Our app is not intended for children under the age of 13. We do not knowingly collect personal information from children.`}
          />
          <Section
            title="6. Changes to the Privacy Policy:"
            des={`- We may update our Privacy Policy from time to time. Any changes will be posted on this page.`}
          />
          <View style={{height: 100}} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
