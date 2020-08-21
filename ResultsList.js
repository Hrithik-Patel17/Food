import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({title, results, navigation }) =>{
 
    if (!results.length){   // Use for Showing the only actual possible result
        return null;
    }

return (

<View style={Styles.container}>

 <Text style={Styles.title}>{title}</Text>

 <FlatList
   horizontal
   data={results}
   keyExtractor={(result) => result.id}
   renderItem={({ item }) => {

     return(
             <TouchableOpacity onPress={() => navigation.navigate('ResultsShow' , {id: item.id } )}>
                <ResultsDetail result={item} />
            </TouchableOpacity>


     )
    
    }}
 />
</View>

)

};

const Styles = StyleSheet.create({

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
     
        marginBottom: 15

    }

});

export default withNavigation(ResultsList);