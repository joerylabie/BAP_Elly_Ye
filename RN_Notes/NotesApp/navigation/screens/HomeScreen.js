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
import Card2 from "../../components/Card2";

const cardData = [
  { id: 1, title: "TODO" },
  { id: 2, title: "LEGEN" },
  { id: 3, title: "LOGISTIEK" },
  { id: 4, title: "DO NOT FORGET" },
  { id: 5, title: "Handig" },
  { id: 6, title: "AAA" },
  { id: 7, title: "BBB" },
  { id: 8, title: "CCC" },
  { id: 9, title: "rzafrf" },
  { id: 10, title: "HandigBBBBBB" },
  { id: 11, title: "HandigIAZGYCVAZU" },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <HomeHeader />
      <ScrollView>
        {cardData.map((card) => {
          return (
            <React.Fragment key={card.id}>
              <Card title={card.title} />
              <Card2 title={card.title} />
            </React.Fragment>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
