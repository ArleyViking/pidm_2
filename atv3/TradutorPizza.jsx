import React, {Component} from "react";
import {View, Text, TextInput} from 'react-native'

export default class Tradutor extends Component{
    
    constructor(props){
        super(props)
        this.state = {frase:''}
    }

    render(){
        return(
            <View style={{padding:10}}>
                <TextInput style={{height: 40}} placeholder="Digite a frase" onChangeText={(frase)=>this.setState({frase})}></TextInput>

                <Text style={{padding:10, fontSize: 22}}>
                    Tradução: {
                        this.state.frase.split(' ')
                        .map(
                            (palavra)=> palavra && "🍕"
                        ).join(" ")
                            }
                </Text>
            
            
            </View>
        )
    }
}