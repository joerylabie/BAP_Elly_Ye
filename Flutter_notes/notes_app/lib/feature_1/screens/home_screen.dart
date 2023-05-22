import 'package:flutter/material.dart';
import '../widgets/card1_widget.dart';
import '../widgets/card2_widget.dart';
import '../widgets/home_header.dart';

class HomeScreen extends StatelessWidget {
  final List<Map<String, dynamic>> cardData = [
    {"id": 1, "title": "TODO"},
    {"id": 2, "title": "LEGEN"},
    {"id": 3, "title": "LOGISTIEK"},
    {"id": 4, "title": "DO NOT FORGET"},
    {"id": 5, "title": "Handig"},
    {"id": 6, "title": "AAA"},
    {"id": 7, "title": "BBB"},
    {"id": 8, "title": "CCC"},
    {"id": 9, "title": "rzafrf"},
    {"id": 10, "title": "HandigBBBBBB"},
    {"id": 11, "title": "HandigIAZGYCVAZU"},
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Builder(
        builder: (context) => Scaffold(
          body: Column(
            mainAxisSize: MainAxisSize.max,
            children: [
              HomeHeader(),
              Expanded(
                child: ListView.builder(
                  itemCount: cardData.length,
                  itemBuilder: (context, index) {
                    final card = cardData[index];
                    return Column(
                      children: [
                        Card1Widget(title: card['title']),
                        Card2Widget(title: card['title']),
                      ],
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
