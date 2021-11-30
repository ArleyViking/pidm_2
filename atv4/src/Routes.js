import Home from "./tela/Home";
import Sobre from "./tela/Sobre";
import IMCApp from "./tela/IMCApp"
import Cadastro from "./tela/Cadastro";

//Versão 5.x com modal
import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const StackPrincipal = createStackNavigator()
const StackRaiz = createStackNavigator()

import Modal from "./components/Perfil";
import ModalResultadoIMC from "./components/ModalResultadoIMC";

function StackPrincipalTela(){
    return (
        <StackPrincipal.Navigator initialRouteName='Home'>
            <StackPrincipal.Screen name='Home' component={Home}/>
            <StackPrincipal.Screen name='Sobre' component={Sobre}/>
            <StackPrincipal.Screen name='Cadastro' component={Cadastro}/>
            <StackPrincipal.Screen name='Calcular' component={IMCApp}/>
        </StackPrincipal.Navigator>
    )
}

function StackRaizTela(){
    return(
        <NavigationContainer>
            <StackRaiz.Navigator>
                <StackRaiz.Screen name='Principal' component={StackPrincipalTela} options={{headerShown: false}}/>
                <StackRaiz.Screen name='Perfil' component={Modal} options={{headerShown: false}}/>
                <StackRaiz.Screen name='ModalResultadoIMC' component={ModalResultadoIMC} options={{headerShown: false}}/>
            </StackRaiz.Navigator>
        </NavigationContainer>
    )
}

export default StackRaizTela

//Versão 5.x sem modal
/*import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator() //navegação do tipo pilha
function  Routes(){
    return (
           <NavigationContainer>
               <Stack.Navigator initialRouteName='Home'>
                   <Stack.Screen name='Home' component={Home} />   
                   <Stack.Screen name='Calcular' component={IMCApp} options={{title: 'Calculadora de IMC'}}/>
                   <Stack.Screen name='Cadastro' component={Cadastro} options={{title: 'Cadastro'}}/>
                   <Stack.Screen name='Sobre' component={Sobre} options={{title: 'Sobre mim'}}/>
               </Stack.Navigator>
           </NavigationContainer> 
    )
}

export default Routes
*/