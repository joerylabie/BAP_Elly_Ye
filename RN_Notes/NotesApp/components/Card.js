import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


export default function Card({ title }) {
  return(
    <View style={styles.cardBox}>
    <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>1 mei verlofdag</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Met klant afspreken</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Lopen</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Spelen</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Drinken</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Eten</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Verspringen</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Zwemmen</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Tuinieren</Text>
    </View>
    <View style={styles.contentContainer}>
        <Entypo name="heart" size={24} color="black" />
        <Text style={styles.contentText}>Bomen planten</Text>
    </View>
</View>
);
  };


const styles = StyleSheet.create({
    cardBox: {
      backgroundColor: 'pink',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      padding: 16,
      margin: 16,
    },
    titleContainer: {
      marginBottom: 16,
    },
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#333',
    },
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    contentText: {
      marginLeft: 8,
      fontSize: 16,
      color: '#555',
    },
    image: {
      width: '100%',
      height: 200,
      marginBottom: 16,
    },
  });