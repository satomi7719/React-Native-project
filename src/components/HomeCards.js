import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Content, Card, CardItem, Text, Body} from 'native-base';
import {Grande, LuauDancers, News, Shopping, VacationSuitcase, Resturants } from '../assets/images';

const cardInfo = [
  {
    image: VacationSuitcase,
    title: 'Plan Your Trip!',
    text:
      'Keep up to date with new destination and product developments that will help you book inspired vacations for your clients!',
    url: '#',
  },
  {
    image: News,
    title: 'Hawaii News',
    text:
      'Click here for breaking news, severe weather forecasts and traffic updates.',
    url: '#',
  },
  {
    image: Grande,
    title: 'Local Gifts',
    text:
      'Whether you’re looking for Hawaiian-made handicrafts to remember your trip by or high-end fashion labels you can’t find at home, Honolulu is a shopper’s paradise; you may even want to pack an extra suitcase for all the treasures you’ll find.',
    url: '#',
  },
  {
    image: LuauDancers,
    title: 'Local Activities',
    text:
      'We believe that every visitor to Hawaii should experience our unique paradise and spirit of aloha, and as we connect you to 795 local tours and activities, you will support our island community while enjoying the best Hawaii has to offer.',
    url: '#',
  },
  {
    image: Resturants,
    title: 'Resturants',
    text:
      'From traditional Hawaiian cuisine to refined New American fare and a variety of Asian cuisines, the choices are as vast as the landscape. No matter where you eat, a cup of locally grown coffee is the perfect way to finish off any meal on the island of Hawaii.',
    url: '#',
  },
  {
    image: Shopping,
    title: 'Shopping',
    text:
      'If a little retail therapy is on your vacation to-do list, Oahu’s diverse shopping centers have you covered. There’s something for everyone and every budget, whether you’re looking to splurge on luxury goods, need locally made souvenirs for family and friends back home or you’re a bargain shopper on the hunt.',
    url: '#',
  },
];

const renderCard = (card, index) => (
  <Card key={index}>
    <CardItem bordered>
      <Image
        resizeMode="contain"
        source={card.image}
        style={{height: 200, width: null, flex: 1}}
      />
    </CardItem>
    <CardItem header bordered>
      <Text style={[styles.text, {fontWeight: '700'}]}>{card.title}</Text>
    </CardItem>
    <CardItem bordered>
      <Body>
        <Text style={styles.text}>{card.text}</Text>
      </Body>
    </CardItem>
  </Card>
);
const HomeCards = () => {
  return (
    <Content
      style={{flex: 1}}
      padder={false}
      contentContainerStyle={{backgroundColor: '#fff'}}>
      {cardInfo.map((image, index) => renderCard(image, index))}
    </Content>
  );
};

const styles = StyleSheet.create({
  text: {
    letterSpacing: 1,
  },
});
export default HomeCards;
