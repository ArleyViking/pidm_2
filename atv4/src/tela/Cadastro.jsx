import React, {Component} from "react";
import {View, Text, TextInput, Button, Alert} from 'react-native'


export default class Cadastro extends Component{
    
    
    
    constructor(props){
        super(props)
        this.state = {nome:null, idade:null, email: null}
    }

    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                style={{height:30, width: 300, backgroundColor: "#e7e7e6", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite seu nome"
                onChangeText={(nome)=> this.setState({nome})}
                >
                </TextInput>

                <TextInput
                style={{height:30, width: 300, backgroundColor: "#e7e7e6", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite sua idade"
                onChangeText={(idade)=> this.setState({idade})}>
                    
                </TextInput>

                <TextInput
                style={{height:30, width: 300, backgroundColor: "#e7e7e6", marginTop:10 , marginBottom: 5, padding: 20, borderRadius: 5}}
                placeholder="Digite seu email"
                onChangeText={(email)=> this.setState({email})}>
                </TextInput>
                
                <View  style={{marginBottom: 20, marginTop: 10, width: 300}}>
                <Button
                    title='OK'
                    onPress = {() => this.props.navigation.navigate('Perfil',{nome:this.state.nome,idade:this.state.idade,email:this.state.email})}
                />
                </View>    
            
            </View>
        )
    }


}