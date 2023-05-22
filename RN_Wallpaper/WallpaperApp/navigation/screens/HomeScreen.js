import * as React from "react";
import { useFonts } from "expo-font";
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Platform,
  View,
} from "react-native";
import HomeHeader from "../../components/HomeHeader";
import Card from "../../components/Card";

const cardData = [
  { id: 1, imgURL: require("../../assets/img1.png") },
  { id: 2, imgURL: require("../../assets/img2.png") },
  { id: 3, imgURL: require("../../assets/img3.png") },
  { id: 4, imgURL: require("../../assets/img4.png") },
  { id: 5, imgURL: require("../../assets/img5.png") },
  { id: 6, imgURL: require("../../assets/img6.png") },
  { id: 7, imgURL: require("../../assets/img7.png") },
  { id: 8, imgURL: require("../../assets/img8.png") },
  { id: 9, imgURL: require("../../assets/img9.png") },
  { id: 10, imgURL: require("../../assets/img1.png") },
  { id: 21, imgURL: require("../../assets/img2.png") },
  { id: 31, imgURL: require("../../assets/img3.png") },
  { id: 41, imgURL: require("../../assets/img4.png") },
  { id: 51, imgURL: require("../../assets/img5.png") },
  { id: 61, imgURL: require("../../assets/img6.png") },
  { id: 71, imgURL: require("../../assets/img7.png") },
  { id: 81, imgURL: require("../../assets/img8.png") },
  { id: 91, imgURL: require("../../assets/img9.png") },
  { id: 12, imgURL: require("../../assets/img1.png") },
  { id: 22, imgURL: require("../../assets/img2.png") },
  { id: 32, imgURL: require("../../assets/img3.png") },
  { id: 42, imgURL: require("../../assets/img4.png") },
  { id: 52, imgURL: require("../../assets/img5.png") },
  { id: 62, imgURL: require("../../assets/img6.png") },
  { id: 72, imgURL: require("../../assets/img7.png") },
  { id: 82, imgURL: require("../../assets/img8.png") },
  { id: 92, imgURL: require("../../assets/img9.png") },
  { id: 13, imgURL: require("../../assets/img1.png") },
  { id: 23, imgURL: require("../../assets/img2.png") },
  { id: 33, imgURL: require("../../assets/img3.png") },
  { id: 43, imgURL: require("../../assets/img4.png") },
  { id: 53, imgURL: require("../../assets/img5.png") },
  { id: 63, imgURL: require("../../assets/img6.png") },
  { id: 73, imgURL: require("../../assets/img7.png") },
  { id: 83, imgURL: require("../../assets/img8.png") },
  { id: 93, imgURL: require("../../assets/img9.png") },
  { id: 14, imgURL: require("../../assets/img1.png") },
  { id: 24, imgURL: require("../../assets/img2.png") },
  { id: 34, imgURL: require("../../assets/img3.png") },
  { id: 44, imgURL: require("../../assets/img4.png") },
  { id: 54, imgURL: require("../../assets/img5.png") },
  { id: 64, imgURL: require("../../assets/img6.png") },
  { id: 74, imgURL: require("../../assets/img7.png") },
  { id: 84, imgURL: require("../../assets/img8.png") },
  { id: 94, imgURL: require("../../assets/img9.png") },
  { id: 15, imgURL: require("../../assets/img1.png") },
  { id: 25, imgURL: require("../../assets/img2.png") },
  { id: 35, imgURL: require("../../assets/img3.png") },
  { id: 45, imgURL: require("../../assets/img4.png") },
  { id: 55, imgURL: require("../../assets/img5.png") },
  { id: 65, imgURL: require("../../assets/img6.png") },
  { id: 75, imgURL: require("../../assets/img7.png") },
  { id: 85, imgURL: require("../../assets/img8.png") },
  { id: 95, imgURL: require("../../assets/img9.png") },
  { id: 16, imgURL: require("../../assets/img1.png") },
  { id: 26, imgURL: require("../../assets/img2.png") },
  { id: 36, imgURL: require("../../assets/img3.png") },
  { id: 46, imgURL: require("../../assets/img4.png") },
  { id: 56, imgURL: require("../../assets/img5.png") },
  { id: 66, imgURL: require("../../assets/img6.png") },
  { id: 76, imgURL: require("../../assets/img7.png") },
  { id: 86, imgURL: require("../../assets/img8.png") },
  { id: 96, imgURL: require("../../assets/img9.png") },
  { id: 17, imgURL: require("../../assets/img1.png") },
  { id: 27, imgURL: require("../../assets/img2.png") },
  { id: 37, imgURL: require("../../assets/img3.png") },
  { id: 47, imgURL: require("../../assets/img4.png") },
  { id: 57, imgURL: require("../../assets/img5.png") },
  { id: 67, imgURL: require("../../assets/img6.png") },
  { id: 77, imgURL: require("../../assets/img7.png") },
  { id: 87, imgURL: require("../../assets/img8.png") },
  { id: 97, imgURL: require("../../assets/img9.png") },
  { id: 18, imgURL: require("../../assets/img1.png") },
  { id: 28, imgURL: require("../../assets/img2.png") },
  { id: 38, imgURL: require("../../assets/img3.png") },
  { id: 48, imgURL: require("../../assets/img4.png") },
  { id: 58, imgURL: require("../../assets/img5.png") },
  { id: 68, imgURL: require("../../assets/img6.png") },
  { id: 78, imgURL: require("../../assets/img7.png") },
  { id: 88, imgURL: require("../../assets/img8.png") },
  { id: 98, imgURL: require("../../assets/img9.png") },
  { id: 19, imgURL: require("../../assets/img1.png") },
  { id: 29, imgURL: require("../../assets/img2.png") },
  { id: 39, imgURL: require("../../assets/img3.png") },
  { id: 49, imgURL: require("../../assets/img4.png") },
  { id: 59, imgURL: require("../../assets/img5.png") },
  { id: 69, imgURL: require("../../assets/img6.png") },
  { id: 79, imgURL: require("../../assets/img7.png") },
  { id: 89, imgURL: require("../../assets/img8.png") },
  { id: 99, imgURL: require("../../assets/img9.png") },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <HomeHeader />
      <ScrollView>
        {cardData.map((card) => {
          return (
            <React.Fragment key={card.id}>
              <Card imgURL={card.imgURL} />
            </React.Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
