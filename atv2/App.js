import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Disciplinas from './Disciplina';
import Disciplina from './Disciplina';


export default function App() {

  return (
    <View style={styles.container}>
     <Cabecalho nome="Arley Gomes de Sousa" curso="Design Digital"></Cabecalho>
      <Corpo></Corpo>
      <Disciplinas></Disciplinas>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
