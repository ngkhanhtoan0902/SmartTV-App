import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import TVs from '../../consts/TVs';
import {color} from 'react-native-reanimated';
import CartScreen from './CartScreen';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {
  const [sltCategories, setSltCategories] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            onPress={() => setSltCategories(index)}>
            <View
              style={
                sltCategories === index
                  ? style.checkcategoryBtn
                  : style.categoryBtn
              }>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 30, width: 30, resizeMode: 'center'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginLeft: 2,
                  color: sltCategories === index ? COLORS.green : COLORS.white,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({TVs}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', TVs)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top: -40}}>
            <Image source={TVs.image} style={{height: 120, width: 120}} />
          </View>
          <View style={{marginHorizontal: 20}}>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: COLORS.green}}>
              {TVs.name}
            </Text>
            <Text style={{fontSize: 14, color: COLORS.grey, marginTop: 2}}>
              {TVs.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: COLORS.green,
                fontSize: 16,
                fontWeight: 'bold',
                top: 5,
              }}>
              {TVs.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon
                name="add"
                size={16}
                color={COLORS.white}
                onPress={() => navigation.navigate('Cart')}
              />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{backgroundColor: '#33907C'}}>
        <View style={style.header}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 18, color: '#FFFF'}}>Welcome to</Text>
            </View>
            <Text
              style={{
                marginTop: 5,
                fontSize: 30,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Smart TV
            </Text>
          </View>
          <Icon
            onPress={() => navigation.navigate('Cart')}
            name="shopping-cart"
            size={35}
            color={'white'}
          />
        </View>

        <View
          style={{
            marginTop: 40,
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={style.inputContainer}>
            <Icon name="search" size={28} color={'#33907C'} />
            <TextInput
              style={{flex: 1, fontSize: 18}}
              placeholder="Search Products"
            />
          </View>
        </View>

        <View>
          <ListCategories />
        </View>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={TVs}
        renderItem={({item}) => <Card TVs={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  categoriesListContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryBtn: {
    height: 45,
    width: 120,
    marginRight: 5,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.white,
    color: COLORS.green,
  },
  checkcategoryBtn: {
    height: 45,
    width: 120,
    marginRight: 5,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',

    backgroundColor: COLORS.white,
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.green,
    borderRadius: 30,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
