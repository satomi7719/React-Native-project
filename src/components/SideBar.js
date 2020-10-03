import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Container,
  Header,
  Content,
  ListItem,
  Text,
  Left,
  Body,
  Button,
  H1,
} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../theme/theme';

const navInfo = [
  {
    name: 'Home',
    screen: 'Home',
    icon: 'home',
  },
  {
    name: 'Hotel Reservations',
    screen: 'HotelReservations',
    icon: 'assignment-turned-in',
  },
  {
    name: 'FAQ',
    screen: 'FAQ',
    icon: 'contact-support',
  },
  {
    name: 'Contact',
    screen: 'Contact',
    icon: 'contact-page',
  },
];

function SideBar({navigation, closeDrawer}) {
  const renderNav = (nav, index) => (
    <ListItem
      key={index}
      onPress={() => {
        navigation.navigate(nav.screen);
        closeDrawer();
      }}
      icon
      itemDivider={false}>
      <Left>
        <Button style={{backgroundColor: Colors.primary}}>
          <Icon size={22} color={Colors.white} name={nav.icon} />
        </Button>
      </Left>
      <Body>
        <Text style={styles.text}>{nav.name}</Text>
      </Body>
    </ListItem>
  );

  return (
    <Container style={styles.container}>
      <Header androidStatusBarColor={Colors.primary} style={styles.header}>
        <H1 style={{color: Colors.white}}>Hawaii Travel</H1>
      </Header>
      <Content>{navInfo.map((nav, index) => renderNav(nav, index))}</Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.primary},
  header: {
    backgroundColor: Colors.primary,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    letterSpacing: 1,
    color: Colors.white,
    fontSize: 21,
    margin: 10,
    padding: 15,
  },
});
export default SideBar;
