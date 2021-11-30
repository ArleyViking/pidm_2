import React, {Component} from "react";
import {View, Text} from 'react-native';

export default class Sobre extends Component{

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize:30, fontWeight: 700, marginBottom: 15}}> PIKACHU</Text>
                <View style={{ width: 340}}>
                <Text style={{fontSize:20}}>Pikachu é uma espécie fictícia pertencente à franquia de mídia Pokémon da Nintendo. Ele apareceu pela primeira vez no Japão em 1996, nos jogos eletrônicos Pokémon Red and Blue, e foi criado por Satoshi Tajiri.</Text>
                </View>
            </View>
        )
    }
}