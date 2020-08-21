import React from 'react';
import {View, Text, StyleSheet, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const ResultsDetail = ({ result }) =>{

return (
<View style={Styles.container}>

   <Image style={Styles.image} source={{uri: result.image_url}} />
   <Text> {result.name} </Text>
   <Text>{result.rating} <Entypo name="star-outlined" size={21} color="black" />, {result.review_count} Reviews </Text> 
</View>
)


};

const Styles = StyleSheet.create({
  
    image:{

        width: 250,
        borderRadius: 4,
        height: 120
    },

    container:{
     
        marginLeft: 15

    }
   
});

export default ResultsDetail;