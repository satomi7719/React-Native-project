import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image';

const ImageSlider = () => {
  const images = [
    require('../assets/images/285593.jpg'),
    require('../assets/images/285598.jpg'),
    require('../assets/images/285639.jpg'),
    require('../assets/images/aloha1.jpg'),
  ];

  return (
    <SliderBox
      ImageComponent={FastImage}
      images={images}
      dotStyle={{
        width: 30,
        height: 7,
        borderRadius: 0,
        marginHorizontal: 10,
        padding: 0,
        margin: 0,
      }}
      autoplay
      autoplayTimeout={3000}
      loop
    />
  );
};

export default ImageSlider;
