import 'package:flutter/material.dart';

class CardWidget extends StatelessWidget {
  final String imgURL;

  const CardWidget({ required this.imgURL });

  @override
  Widget build(BuildContext context) {
    return Card(
      elevation: 5,
      margin: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Image.asset(
            imgURL,
            fit: BoxFit.cover,
            height: 500,
          ),
        ],
      ),
    );
  }
}
