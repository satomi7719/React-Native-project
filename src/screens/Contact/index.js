import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Text,
  H1,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';

const Contact = () => {
  return (
    <View style={styles.container}>
      <H1 style={styles.header}>Contact Us!</H1>
      <Content>
        <Card>
          <CardItem header bordered>
            <Text>Contact Details </Text>
          </CardItem>
          <CardItem>
            <Text>
              1234 ABCDEF DR {`\n`}
              HI, United States 96830
            </Text>
          </CardItem>
          <CardItem>
            <Text>Phone: </Text>
            <Text>(123) 456-7890</Text>
          </CardItem>
          <CardItem>
            <Text>Email: </Text>
            <Text>name@example.com</Text>
          </CardItem>
          <CardItem>
            <Text>Hours: </Text>
            <Text>Monday - Friday: 9:00 AM to 5:00 PM</Text>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
            <Text>Send Us A Message </Text>
          </CardItem>
          <Form>
            <Item floatingLabel>
              <Label>Full Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Phone Number</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Message</Label>
              <Input style={{height: 150}} />
            </Item>
            <Button success style={styles.button}>
              <Text>Send Message</Text>
            </Button>
          </Form>
        </Card>
      </Content>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  button: {alignSelf: 'center', marginTop: 10, marginBottom: 10},
});
export default Contact;
