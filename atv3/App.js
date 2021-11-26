import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native';
import IMCApp from './src/tela/IMCApp';




export default function App() {

    return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <View>
        
       <IMCApp></IMCApp>

      </View>
      
       
    </View>
  );
}

