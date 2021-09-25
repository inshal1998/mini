import React from 'react'
import { StyleSheet, View,ImageBackground, Image, Text } from 'react-native'
import BackButton from '../components/BackButton';

const detailScreen = ({ route,navigation}) => {
    const { itemId, email,image } = route.params;

    return (
        <View style={styles.container}>
        <ImageBackground
              source={require('../assets/background_dot.png')}
              style={styles.background}>
            <BackButton goBack={navigation.goBack}   />
        <View>
            <Image style={styles.image} source={{uri:image}}/>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>itemId: {JSON.stringify(email)}</Text>
        </View  >
        </ImageBackground>
    </View>
    )
}

export default detailScreen

const styles = StyleSheet.create({
    background :{
        flex: 1,
        paddingHorizontal:20,
    },  
    container :{
        flex:1,
        width: '100%',
        height: 800,
      },
    image :{
        height:"50%" ,
        width:"100%",
        borderRadius:10 ,
        marginTop:60 
    }
})