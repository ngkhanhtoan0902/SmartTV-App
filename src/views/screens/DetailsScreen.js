import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {SecondaryButton} from '../components/Button';
import Slider from '../components/Slider';
import SliderScreen from '../components/Slider';

const DetailsScreen = ({navigation, route}) => {
  const item = route.params;

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon
          name="arrow-back-ios"
          color={COLORS.green}
          size={28}
          onPress={navigation.goBack}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: COLORS.green,
            left: 120,
          }}
          onPress={navigation.goBack}>
          Details
        </Text>
      </View>
      <Slider />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 280,
        }}></View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: COLORS.white}}>
              {item.name}
            </Text>
            <View style={style.iconContainer}>
              <Icon name="favorite-border" color={'red'} size={25} />
            </View>
          </View>
          <Text style={style.detailsText}>Kích thước mànhình: 65"</Text>
          <Text style={style.detailsText}>Độ phân giải: 7,680 x 4,320</Text>
          <Text style={style.detailsText}>Kích Thước Màn Hình: 65"</Text>
          <Text style={style.detailsText}>Kích Thước Màn Hình: 65"</Text>
          <Text style={style.detailsText}>Kích Thước Màn Hình: 65"</Text>
          <Text style={style.detailsText}>Kích Thước Màn Hình: 65"</Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            <SecondaryButton
              backgroundColor={'#33907C'}
              color={'#33907C'}
              title="Add To Cart"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: COLORS.green,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});

export default DetailsScreen;
