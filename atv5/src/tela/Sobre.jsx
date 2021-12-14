import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Sobre extends Component{

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize:30, fontWeight: 700, marginBottom: 15}}> PIKACHU</Text>
                <View style={{ width: 340, paddingLeft: 10}}>
                <Text style={{fontSize:20}}>Quem é?</Text>
                <Text style={{fontSize:20, color: 'gray'}}>Pikachu é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo.</Text>
                <Text style={{fontSize:20, marginTop: 20}}>Primeira aparição:</Text>
                <Text style={{fontSize:20, color: 'gray'}}>Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red and Blue, e foi criado por Satoshi Tajiri.</Text>
                </View>
            </View>
        )
    }
}