import 'package:flutter/material.dart';

import '../widgets/card1_widget.dart';
import '../widgets/home_header.dart';

class CardData {
  final int id;
  final String imgURL;

  CardData({required this.id, required this.imgURL});
}

final List<CardData> cardData = generateCardData();

List<CardData> generateCardData() {
  final List<CardData> cardData = [];

  for (int i = 1; i <= 99; i++) {
    int counter = i%9 + 1;
    cardData.add(CardData(id: i, imgURL: "assets/images/img$counter.png"));
  }

  return cardData;
}

class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Column(
          children: [
            HomeHeader(),
            Expanded(
              child: ListView.builder(
                itemCount: cardData.length,
                itemBuilder: (context, index) {
                  return CardWidget(imgURL: cardData[index].imgURL);
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
