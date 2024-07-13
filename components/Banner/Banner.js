import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {SliderBox} from 'react-native-image-slider-box'

const Banner = () => {
  this.state = {
    images: [
      require("../../assets/galaxyAi.jpg"),
      require("../../assets/Iphone15.jpg"),
      require("../../assets/S24 Ultra.jpg"),
      require("../../assets/fold5flip5.jpg"),
      require("../../assets/bud2pro.jpg"),
      require("../../assets/airpodpro.png"),
      require("../../assets/sony.png"),
      require("../../assets/razer.png"),
      require("../../assets/Alienware.webp")
    ],
  };
  return (
    <View>
    
    <SliderBox
        images={this.state.images}
        circleLoop
        dotColor="white"
        inactiveDotColor="gray"
        ImageComponentStyle={{
          borderRadius: 6,
          width: "94%",
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
