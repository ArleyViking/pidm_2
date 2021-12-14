import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'

import ListUserScreen from "./ListUserScreen";
import EditUserScreen from "./EditUserScreen";
import AddUserScreen from "./AddUserScreen";

const MainStack = createStackNavigator()

function MainStackScreen() {

    return(
        <NavigationContainer>
            <MainStack.Navigator initialRouteName="ListUserScreen">
                <MainStack.Screen name='AddUserScreen' component={AddUserScreen} options={{title:'Adicionar aluno'}} >

                </MainStack.Screen>
                <MainStack.Screen name='ListUserScreen' component={ListUserScreen} options={{title:'Lista de alunos'}} >

                </MainStack.Screen>
                <MainStack.Screen name='EditUserScreen' component={EditUserScreen} options={{title:'Perfil'}} >

                </MainStack.Screen>
            </MainStack.Navigator>

        </NavigationContainer>
    )
}

export default MainStackScreen