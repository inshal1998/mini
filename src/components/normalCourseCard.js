import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet,  TouchableOpacity,  TouchableWithoutFeedback } from 'react-native'
import { Card , Title, Paragraph} from 'react-native-paper';
import Axios from "axios";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const normalCourseCard = () => {
    const [api, setApi] = useState([])
    const navigation = useNavigation(); 

    useEffect(() => {
        const getKind= async()=> {
            try {
                const {data} =await Axios.get('https://randomuser.me/api/?results=10')
                const details = data.results
                setApi(details)
                console.log("This is Details : ", details);
        }            
        catch (error) {
            console.log(error);            
        }
    }   
    getKind();      

    }, []);

  return (
      <FlatList
        horizontal={true}
        data={api}
        keyExtractor={(x,i)=>i}  
        renderItem={({item})=>
            <LinearGradient colors={['#94c997', '#daacec']} style={styles.linearGradient}> 
                <TouchableOpacity 
                    onPress={() =>{ navigation.navigate('detailScreen' , {
                        itemId : item.cell,
                        email:item.email,
                        image : item.picture.large
                    })}}>
                        <Card style={{width:"auto" , height:"auto"}}>
                            <Card.Cover style={{width:"auto"}} source={{ uri: item.picture.large }} />
                                <Card.Content>
                                    <Title>{item.cell}</Title>
                                    <Paragraph>{item.email}</Paragraph>
                                </Card.Content>
                        </Card>
                </TouchableOpacity>
            </LinearGradient>
}
/> 
  );
};

export default normalCourseCard

const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      background :{
        flex: 1,
      },
})
