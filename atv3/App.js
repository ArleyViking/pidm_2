import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native';
import IMCApp from './src/tela/IMCApp';




export default function App() {

    return (
    <View style={{ padding: 32, flex:1, justifyContent: "center"}}>
      <View>
        
        <IMCApp></IMCApp>

      </View>
      
       
    </View>
  );
}

