import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, H2, Text, CardItem, View} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import FastImage from 'react-native-fast-image';

const HomeMapText = () => {
  return (
    <Container>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <H2 style={styles.text}>Hawaii Welcomes You</H2>
        <Text style={styles.text}>
          There are six major islands to visit in Hawaii:
        </Text>
      </View>
      <View
        style={{
          paddingLeft: 20,
        }}>
        <CardItem style={styles.cardItem}>
          <Icon name="dot-single" size={25} />
          <Text style={styles.text}>Kauai</Text>
        </CardItem>

        <CardItem style={styles.cardItem}>
          <Icon name="dot-single" size={25} />
          <Text style={styles.text}>Oahu</Text>
        </CardItem>

        <CardItem style={styles.cardItem}>
          <Icon name="dot-single" size={25} />
          <Text>Molokai</Text>
        </CardItem>

        <CardItem style={styles.cardItem}>
          <Icon name="dot-single" size={25} />
          <Text style={styles.text}>Lanai</Text>
        </CardItem>

        <CardItem style={styles.cardItem}>
          <Icon name="dot-single" size={25} />
          <Text style={styles.text}>Maui</Text>
        </CardItem>
        <Text style={styles.info}>
          Let us be the first to say aloha and e komo mai (welcome) to The
          Hawaiian Islands. Before you make your journey to Hawaii, use the
          information featured in this section to plan your trip and make the
          most of your time here, from entry requirements and how to get around
          to weather conditions and resources for travelers with disabilities.
        </Text>
      </View>
      <FastImage
        style={{width: '100%', height: '100%', flex: 1, margin: 10}}
        source={require('../assets/images/mapofhawaii.png')}
        resizeMode={FastImage.resizeMode.contain}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  cardItem: {marginBottom: 0, paddingBottom: 0},
  info: {
    marginTop: 10,
    textAlign: 'left',
    letterSpacing: 2,
  },
  text: {
    letterSpacing: 1,
  },
});
export default HomeMapText;
