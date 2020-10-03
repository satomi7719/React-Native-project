import React from 'react';
import {Header, Title, Button, Right, Body, Icon} from 'native-base';
import {Colors} from '../theme/theme';

const HeaderComponent = (props) => {
  return (
    <Header
      androidStatusBarColor={Colors.primary}
      style={{backgroundColor: Colors.primary}}>
      <Body>
        <Title style={{fontSize: 22}}>Hawaii Travel</Title>
      </Body>
      <Right>
        <Button transparent onPress={() => props.openDrawer()}>
          <Icon
            name={!props.isDrawerOpen ? 'menu' : 'close'}
            style={{fontSize: 30}}
          />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderComponent;