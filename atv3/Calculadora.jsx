import React, {Component} from "react";
import {View, Text, TextInput} from 'react-native'


const Calculo = (props)=>{

        return(
            <View>
                <Text>IMC: {props.peso / (props.altura*props.altura)}</Text>
            </View>
        )
}

export default class CalculadoraApp extends Component {
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null}
    }
    render(){
        return(
            <View>
                <TextInput
                style={{height:30, backgroundColor: "#e7e7e6", margin: 20, marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite sua altura"
                onChangeText={(valorDoCampo)=> this.setState({altura:valorDoCampo})}
                >
                </TextInput>

                <TextInput
                style={{height:30, backgroundColor: "#e7e7e6", margin: 20, padding: 20, borderRadius: 5}}
                placeholder="Digite seu peso"
                onChangeText={(valorDoCampo2)=> this.setState({peso:valorDoCampo2})}>
                </TextInput>

                <Calculo altura={this.state.altura} peso={this.state.peso}></Calculo>
            </View>
        )
    }
}
