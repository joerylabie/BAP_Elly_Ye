import 'package:flutter/material.dart';

class Card2Widget extends StatelessWidget {
  final String title;

  Card2Widget({required this.title});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.lightBlue,
        borderRadius: BorderRadius.circular(8),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.25),
            offset: Offset(0, 2),
            blurRadius: 3.84,
          ),
        ],
      ),
      padding: EdgeInsets.all(16),
      margin: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            margin: EdgeInsets.only(bottom: 16),
            child: Text(
              title,
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Colors.black,
              ),
            ),
          ),
          _buildContentRow(Icons.star, "1 mei verlofdag"),
          _buildContentRow(Icons.star, "Met klant afspreken"),
          _buildContentRow(Icons.star, "Lopen"),
        ],
      ),
    );
  }

  Widget _buildContentRow(IconData iconData, String content) {
    return Container(
      margin: EdgeInsets.only(bottom: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Icon(
            iconData,
            size: 24,
            color: Colors.black,
          ),
          SizedBox(width: 8),
          Text(
            content,
            style: TextStyle(
              fontSize: 16,
              color: Colors.grey[700],
            ),
          ),
        ],
      ),
    );
  }
}
