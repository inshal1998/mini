import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Background from '../components/Background'

const detailScreen = ({ route,navigation}) => {
    const { itemId, email,image } = route.params;

    return (
    <View style={styles.container}>
        <ImageBackground
              source={require('../assets/background_dot.png')}
              style={styles.background}>
        </ImageBackground>
        {/* <View>
            <Image style={{height:130 , width:130}} source={{uri:image}}/>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>itemId: {JSON.stringify(email)}</Text>
        </View> */}
    </View>
    )
}

export default detailScreen

const styles = StyleSheet.create({})
