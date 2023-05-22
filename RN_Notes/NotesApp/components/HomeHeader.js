import { StyleSheet, View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';


function HomeHeader(){
    return(
    <View style={styles.flexRow}>
        <View style={{marginLeft:13}}>
            <Text style={{fontSize:20}}>Hoi, Gebruiker!</Text>
            <Text style={{fontSize:13}}>Tijd om notities te nemen?</Text>
        </View>
        <View>
            <Entypo name="dot-single" size={70} color="black" style={{position:"absolute", left:45, top:0, zIndex:2}} />
            <Entypo name="dot-single" size={70} color="black" style={{position:"absolute", left:65, top:-20, zIndex:2}} />
            <Entypo name="dot-single" size={70} color="black" style={{position:"absolute", left:95, top:-27, zIndex:2}} />
        </View>
    </View>
    );

};

export default HomeHeader;

const styles = StyleSheet.create({
    flexRow:{
        flexDirection:"row"
    }
})