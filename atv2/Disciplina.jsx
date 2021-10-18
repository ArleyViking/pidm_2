
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class Disciplina extends Component{

    render(){
        return(
            <View>
                <Text>Nome: {this.props.nome}</Text>
            </View>
            
        );
    }
}

class Disciplinas extends Component{

    render(){
        return(
            <View style={Styles.disciplinas}>
                <Text style={{fontWeight: '700', marginBottom: 5}}>Disciplinas matriculadas</Text>
                <Disciplina nome="Matemática Básica"></Disciplina>
                <Disciplina nome="Projeto de Interface Web"></Disciplina>
            </View>
            
        );
    }
}

const Styles = StyleSheet.create({
    disciplinas: {
        marginTop: 20,
    }
})

export default Disciplinas
