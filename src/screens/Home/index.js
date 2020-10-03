import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import ImageSlider from '../../components/ImageSlider';
import HomeMapText from '../../components/HomeMapText';
import HomeCards from '../../components/HomeCards';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageSlider />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeMapText />
        <HomeCards />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
