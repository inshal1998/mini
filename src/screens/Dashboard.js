import React from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import CardView from '../components/cardView'
import { theme } from '../core/theme'


const Dashboard = ({navigation}) => {
  return (  
      <View style={styles.container}>
          <ImageBackground
              source={require('../assets/background_dot.png')}
              style={styles.background}>
                <View style={styles.trending}>
                  <Text style={styles.trendingtxt}>Trending</Text>
                </View>
                  <View style={{marginLeft:20,marginRight:20}}>
                    <CardView/>
                </View>
          </ImageBackground>  
      </View>
       
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container :{
    flex:1,
    width: '100%',
    height: 900,
  },
  background :{
    flex: 1,
  },
  trending :
  {
    backgroundColor:theme.colors.backdrop ,
    margin:15 , 
    borderRadius:10
  } ,
  trendingtxt :{
    padding:10,
    fontWeight:"900",
    fontSize:15
  }
})
