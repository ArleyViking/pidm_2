
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class Cabecalho extends Component{

    render(){
        return(
            <View>
                <Text style={{fontWeight: '700', marginBottom: 5}}>Aluno</Text>
                <Text>Nome: {this.props.nome}</Text>
                <Text>Curso: {this.props.curso}</Text>
            </View>
            
        );
    }
}


export default Cabecalho
