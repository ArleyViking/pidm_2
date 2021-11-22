import React from 'react'
import { View, Text } from 'react-native'
import ImcMsg from './IMCMsg'


const CalculadoradeIMC = (props) => {

    const imc = props.peso / (props.altura * props.altura)
 
    if (props.altura != null && props.peso != null)
        return (
            <View>
                <Text style={{ fontSize: 24, fontWeight: "600" }}>
                    Seu IMC é: {imc}
                </Text>
                <ImcMsg imc={imc}></ImcMsg>
            </View>
        )
    return null
}


export default CalculadoradeIMC