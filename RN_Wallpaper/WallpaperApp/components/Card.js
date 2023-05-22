import { StyleSheet, View, Text, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Card({ imgURL }) {
    return (
      <View style={styles.cardBox}>
        <Image style={styles.image} source={imgURL} />
      </View>
    );
  };


const styles = StyleSheet.create({
    cardBox: {
      elevation: 5,
      margin: 16,
      marginBottom: 0,
    },
    image: {
      borderRadius: 8,
      width: '100%',
      height: 500,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
  });