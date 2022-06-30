import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Samsung from '../../consts/imageDetail';
import COLORS from '../../consts/colors';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const SliderScreen = () => {
  const [imageActive, setimageActive] = useState(0);

  const onChange = (nativeEvent) => {
    if (nativeEvent) {
      const slider = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slider != imageActive) {
        setimageActive(slider);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({nativeEvent}) => onChange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}>
          {Samsung.map((item, index) => (
            <View key={index}>
              <Image
                source={item.image}
                resizeMode="contain"
                style={styles.wrap}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {Samsung.map((item, index) => (
            <View style={styles.viewDot} key={'viewDot' + index}>
              <Text
                key={'wrapDot' + index}
                style={
                  imageActive === index ? styles.dotActive : styles.dotUnActive
                }>
                ●
              </Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SliderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.25,
  },
  wrapDot: {
    position: 'absolute',
    bottom: -50,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotActive: {
    height: 8,
    width: 20,
    borderRadius: 10,
    backgroundColor: COLORS.green,
  },
  dotUnActive: {
    height: 8,
    width: 8,
    borderRadius: 50,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});
