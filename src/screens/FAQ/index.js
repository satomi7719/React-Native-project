import React from 'react';
import {View, StyleSheet} from 'react-native';
import {H1, Content, Accordion} from 'native-base';

const QAS = [
  {
    title: 'What is the time difference from the continental US?',
    content:
      'Hawaii follows Hawaii Standard Time (GMT-10 hours). Since Hawaii does not observe Daylight Savings Time, during the majority of the year (March-November), Hawaii is six (6) hours behind Eastern Standard Time and three (3) hours behind Pacific Standard Time. During non-DST months Hawaii is five and two hours behind each respective time zone.',
  },
  {
    title: 'How much money will I need per day?',
    content:
      'Food is a lot pricier on the islands whether you buy it and cook at your place or go out to eat for your meals.  There are budget-friendly places available for accommodations as well as restaurants.  We tend to stay at places with a small kitchen so we can eat both breakfast and some dinners at “home” then pack our lunch to go while we go adventuring around the island.  A ballpark amount might be, and this is including accommodations at a small B&B and food at non-pricey restaurants, $200.00/day for two people.',
  },
  {
    title: 'What languages are spoken in Hawaii?',
    content:
      'Hawaii’s official language is both English and Hawaiian, but English is the most common. Other languages such as Chinese, Japanese, and Portuguese, are often spoken too. Here are some common Hawaiian words to know when visiting Hawaii. Pidgin, a hybrid island language, can also be heard throughout Hawaii. And while it may be tempting to start rambling off your own pidgin words – trust us when we say, ‘Leave dat kine talk to the locals who can speak it mo’bettah than you can brah.',
  },
];
const FAQ = () => {
  return (
    <View style={styles.container}>
      <H1 style={styles.header}>HAWAII FREQUENTLY ASKED QUESTIONS</H1>
      <Content padder>
        <Accordion
          dataArray={QAS}
          expanded={0}
          icon="add"
          expandedIcon="remove"
        />
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
    alignItems: 'center',
  },
});
export default FAQ;
