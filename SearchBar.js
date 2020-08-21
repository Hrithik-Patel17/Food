import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons'; 


const SearchBar = ({term,onTermChange, onTermSubmit}) =>{

    return (
        <View style ={Styles.background}>
            <Feather name="search" size={24} color="black" style={Styles.iconStyle}/>
            <TextInput
             style={Styles.inputText}
             placeholder="Search"
             autoCapitalize="none"
             autoCorrect = {false}
             value={term}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit}
              />
        </View>
    );

};

const Styles = StyleSheet.create({

background:{
    marginTop: 15,
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
},
inputText:{

    // borderColor:'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18
},

iconStyle:{
 
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15

}



});

export default SearchBar;