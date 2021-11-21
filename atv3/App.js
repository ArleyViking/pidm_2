import React from 'react';
import { StyleSheet, Text, View, Button, TouchableHighlight, FlatList } from 'react-native';
import CalculadoraApp from './Calculadora';
import Tradutor from './TradutorPizza';


export default function App() {

  function ApertouBotao(){ 
    alert("voce apertou")
  }
    return (
    <View style={{flex: 1,backgroundColor: '#FAFAFA', padding: 32, paddingTop: 64}}>
      <View>
        <Text style={styles.texto}>PIDM AULA 06</Text>
        <TouchableHighlight underlayColor='#c1c1c1'  style={styles.botao} onPress={ApertouBotao}>
          <Text style={styles.texto_b}> SOU UM BOTÃO</Text>  
        </TouchableHighlight>

        <FlatList
          data={
            [
            {nome: 'arleu', key: '1'},
            {nome: 'arleu', key: '2'},
            {nome: 'arleu', key: '3'},
            {nome: 'arleu', key: '4'},
            {nome: 'arleu', key: '5'},
            {nome: 'arleu', key: '6'},
            {nome: 'arleu', key: '7'},
            {nome: 'arleu', key: '8'},
            {nome: 'arley', key: '9'},
            {nome: 'arley', key: '10'}
          ]
        }
        renderItem = {
          ({item})=>{
            return  (
              <View>
                <Text style={{padding: 15, fontSize: 14}}> {item.nome}</Text>
              </View>
            )
          }
        }
        />
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
  texto:{
    fontWeight: "400",
    marginBottom: 4,
    fontSize: 20,
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
