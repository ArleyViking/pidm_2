import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default class ImcMsg extends Component {
    
    constructor(props){
        super(props)
        console.log("PROPS:" + props)
        console.log("IMC DA PESSOA:" + props.imc)
    }
    
    render(){
        if(this.props.imc < 17)
        return(
            <View>
                <Text style={styles.texto_2}>Muito abaixo do peso</Text>
            </View>
        )

        if(this.props.imc >= 17 && this.props.imc <=18.49)
        return(
            <View>
                <Text style={styles.texto_2}>Abaixo do peso</Text>
            </View>
        )
        
        if(this.props.imc >= 18.5 && this.props.imc <=24.99)
        return(
            <View>
                <Text style={styles.texto_1}>Peso normal</Text>
            </View>
        )

        if(this.props.imc >= 25 && this.props.imc <=29.99)
        return(
            <View>
                <Text style={styles.texto_2}> Acima do peso</Text>
            </View>
        )

        if(this.props.imc >= 30 && this.props.imc <=34.99)
        return(
            <View>
                <Text style={styles.texto_2}>Obesidade 1</Text>
            </View>
        )

        if(this.props.imc >= 35 && this.props.imc <=39.99)
        return(
            <View>
                <Text style={styles.texto_2}>Obesidade 2</Text>
            </View>
        )

        if(this.props.imc > 40)
        return(
            <View>
                <Text style={styles.texto_2}>Obesidade 3</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    texto_1: {
        marginTop: 10,
        lineHeight: 24,
        fontSize: 16,
        color: "blue"
    },
    texto_2: {
        marginTop: 10,
        lineHeight: 24,
        fontSize: 16,
        color: "red"
    }
})
