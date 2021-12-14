import React, {useEffect, useState} from 'react'
import { View, Text, Button } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import firebase from '../../firebase/firebase_config'

const ListUserScreen = (props)=>{
    const [users, setUsers] = useState([])

    useEffect(
        ()=>{
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot)=>{
                        const users=[]
                        queryOnSnapshot.docs.forEach(
                            (doc)=>{
                                const {name, sobrenome, curso, ira} = doc.data()
                                users.push({id: doc.id,name,sobrenome,curso,ira})
                            }//doc
                        )//forEach

                        setUsers(users)
                }//queryOnSnapshot
            ) //onSnapshot
        }, //interna do useEffect
        []
    ) 

    return(
        <ScrollView>
            <View><Text style={{fontSize: 16, marginBottom: 8, lineHeight: 20, marginLeft: 12, marginTop: 10}}>Todos os alunos</Text></View>
            <View style={{margin: 12, padding:5, backgroundColor: 'purple'}}>
            <Button onPress={()=>props.navigation.navigate('AddUserScreen')} title='+ Novo Aluno' color='purple'></Button>
            </View>
            {
               users.map(
                   (user)=>{
                       
                        return (
                            <ListItem
                                key={user.id}
                                bottomDivider
                                onPress={()=>props.navigation.navigate('EditUserScreen', {userId: user.id})}
                            >
                                <Avatar source={{
                                    uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png'
                                }}/>
                                <ListItem.Content>
                                    <ListItem.Title>{user.name} {user.sobrenome}</ListItem.Title>
                                    <ListItem.Subtitle>{user.curso}</ListItem.Subtitle>
                                </ListItem.Content>
                                <ListItem.Chevron/>
                            </ListItem>
                        )
                   }
               )
            }
        </ScrollView>
    )
}
export default ListUserScreen
