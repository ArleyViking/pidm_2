import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native';
import IMCApp from './IMCApp';




export default function App() {

    return (
    <View style={{ padding: 32, flex:1, justifyContent: "center"}}>
      <View style={{}}>
        <Text style={{fontSize: 24, fontWeight: "600", marginBottom:10 }}>CALCULADORA DE IMC</Text>
        <IMCApp></IMCApp>

      </View>
      
       
    </View>
  );
}


const styles = StyleSheet.create({
  texto_b: {
    color: "white",
  },
  botao: {
    padding: 12,
    backgroundColor: "blue",
    color: "#FFF",
    alignItems: 'center',
    borderRadius: 5,
  },
  texto_d:{
    lineHeight: 20,
    fontSize: 14,
  },
  div_texto:{
    margin: 20,
    padding: 20,
    borderRadius: 10,
  }
});
