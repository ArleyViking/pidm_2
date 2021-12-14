import React, { Component } from "react";
import { View, Button, Text } from 'react-native';


export default class Home extends Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{ width: 320}}>

                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Button title="Cadastro" onPress={() => this.props.navigation.navigate('Cadastro')} />
                    </View>

                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Button title="Calculadora de IMC" onPress={() => this.props.navigation.navigate('Calcular')} />
                    </View>

                    <View style={{ marginBottom: 20, marginTop: 10 }}>
                        <Button title="Sobre" onPress={() => this.props.navigation.navigate('Sobre',{...this.props.route.params})} />
                    </View>
                </View>

            </View>
        )
    }
}