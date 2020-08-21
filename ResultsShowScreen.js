import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
  const [result , SetResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id) =>{

  const response = await yelp.get(`/${id}`);
   SetResult(response.data);

  };

  useEffect ( () => {
    
     getResult(id);


  }, []);

  if (!result){

    return null;
  }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
       keyExtractor={(photo)=> photo}
       data={result.photos}
       renderItem={ ({item}) => {
        
        return <Image style={styles.Image}
                      source={{uri: item }}/>   // {{}} outer brackets is for javaScript expreesion, And inner one is actual object.

       }}
        />
    </View>
  );
};

const styles = StyleSheet.create({

  Image:{


    height: 200,
    width: 300
  }

});

export default ResultsShowScreen;
