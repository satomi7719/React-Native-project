import React from 'react';
import {Image, StyleSheet, Alert} from 'react-native';
import {
  Container,
  H1,
  H3,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
} from 'native-base';
import {
  royalhawaiianheader,
  RoyalHawaiianCard,
  sharaton,
  moanasurf,
} from '../../assets/images';

const hotels = [
  {
    name: 'THE ROYAL HAWAIIAN',
    desc:
      'The royal Hawaiian, a luxury collection resort will keep you entertained &amp; immersed in a cultural adventure throughout your stay.',
    image: RoyalHawaiianCard,
  },
  {
    name: 'THE SHERATON WAIKIKI',
    desc:
      'Book your next tropical island getaway at Sheraton Waikiki to experience stylishly-designed hotel accommodations and spacious oceanfront rooms in Hawaii.',
    image: sharaton,
  },
  {
    name: 'MOANA SURFRIDER',
    desc:
      'Book your stay at Moana Surfrider, A Westin Resort &amp; Spa, Waikiki Beach to benefit from elegant hotel rooms and a stellar beachfront location in Honolulu.',
    image: moanasurf,
  },
];

const HotelReservations = () => {
  const renderHotel = (hotel, index) => (
    <Card key={index}>
      <CardItem header bordered>
        <H3 style={[styles.text, {fontWeight: '700'}]}>{hotel.name}</H3>
      </CardItem>
      <CardItem bordered>
        <Image
          resizeMode="contain"
          source={hotel.image}
          style={{height: 200, width: null, flex: 1}}
        />
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text style={styles.text}>{hotel.desc}</Text>
        </Body>
      </CardItem>
      <CardItem footer style={{alignSelf: 'center'}}>
        <Button
          primary
          onPress={() =>
            Alert.alert(
              'Hotel Reservations',
              `${hotel.name} would be reserved for you. \n\n Thanks for using our App.`,
            )
          }>
          <Text style={styles.butonText}>Reserve Now</Text>
        </Button>
      </CardItem>
    </Card>
  );
  return (
    <Container style={styles.container}>
      <H1>Hotels Reservations</H1>
      <Image
        source={royalhawaiianheader}
        resizeMode="cover"
        style={styles.hotelImage}
      />
      <Content
        style={{flex: 1}}
        padder={false}
        contentContainerStyle={{backgroundColor: '#fff'}}>
        {hotels.map((hotel, index) => renderHotel(hotel, index))}
      </Content>
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  hotelImage: {
    borderRadius: 5,
    width: '100%',
    height: 100,
    marginTop: 10,
  },
  text: {
    letterSpacing: 1,
  },
  butonText: {
    letterSpacing: 1,
    textTransform: 'capitalize',
  },
});
export default HotelReservations;
