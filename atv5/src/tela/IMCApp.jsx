import React, {Component} from "react";
import {View, Text, TextInput, Button} from 'react-native'





export default class IMCApp extends Component{

    constructor(props){
        super(props)
        this.state = {altura:null, peso:null}
    }

    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                
                <TextInput
                style={{height:50, width: 300, backgroundColor: "#e7e7e6", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite sua altura"
                onChangeText={(altura)=> this.setState({altura})}
                >
                </TextInput>

                <TextInput
                style={{height:50, width: 300, backgroundColor: "#e7e7e6", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite seu peso"
                onChangeText={(peso)=> this.setState({peso})}>
                </TextInput>
                
                <View  style={{marginBottom: 20, marginTop: 10, width: 300}}>
                <Button
                    title='Calcular IMC'
                    onPress={() => this.props.navigation.navigate('ModalResultadoIMC',{altura: this.state.altura, peso: this.state.peso})} 
                />
                </View>    
            
            </View>
        )
    }


}