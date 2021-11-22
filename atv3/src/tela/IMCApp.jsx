import React, {Component} from "react";
import {View, Text, TextInput, Button} from 'react-native'
import CalculadoradeIMC from "../components/ImcCalc";




export default class IMCApp extends Component{

    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou: false}
    }

    acaoBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
    }

    fazerIMC(){
        if(this.state.apertou == true)
        {
            return(
                <CalculadoradeIMC altura={this.state.altura} peso={this.state.peso}> </CalculadoradeIMC>
            )
        }   
        return(
            <View>
            <Text style={{color: "gray", alignSelf: "center", fontSize: 16}}>  Aguardando os dados para o cálculo...</Text>
            </View>
        )
    }

    render(){
        return(
            <View>
                <Text style={{fontSize: 24, fontWeight: "600", marginBottom:10 }}>CALCULADORA DE IMC</Text>
                <TextInput
                style={{height:30, backgroundColor: "#e7e7e6", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite sua altura"
                onChangeText={(altura)=> this.setState({altura})}
                >
                </TextInput>

                <TextInput
                style={{height:30, backgroundColor: "#e7e7e6", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite seu peso"
                onChangeText={(peso)=> this.setState({peso})}>
                </TextInput>
                
                <View  style={{marginBottom: 20, marginTop: 10}}>
                <Button
                    title='Calcular IMC'
                    onPress={this.acaoBotao} 
                />
                </View>
            {this.fazerIMC()}

            </View>
        )
    }


}