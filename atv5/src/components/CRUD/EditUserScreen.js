import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, ScrollView, Button, ActivityIndicator, StyleSheet } from 'react-native'


import firebase from '../../firebase/firebase_config'



const EditUserScreen = (props)=>{
    
    const initialState = {id:'',name:'', sobrenome:'', curso:'', ira: ''}
    const [user, setUser] = useState(initialState)
    
    useEffect(
        ()=>{
            const id = props.route.params.userId
            getUserById(id)
        }, 
        []
    )

    const getUserById = async (id)=>{
        const dbRet = firebase.db.collection('alunos').doc(id)
            const doc = await dbRet.get()
            const userP = doc.data()
            setUser({...userP, id: doc.id})
    }

    const deleteUserById = async()=>{
        const dbRet = firebase.db.collection('alunos').doc(props.route.params.userId)
        await dbRet.delete()
        props.navigation.navigate('ListUserScreen')
    }

    const updateUser = async() =>{ 
        const userRet = firebase.db.collection('alunos').doc(user.id)
        await userRet.set({
            name: user.name,
            sobrenome: user.sobrenome,
            curso: user.curso,
            ira: user.ira
        })
        setUser(initialState)
        props.navigation.navigate('ListUserScreen')

    }
    const handleChangeText = (value, prop)=>{
        setUser({...user, [prop]:value})
    }

    return(
       <ScrollView style={styles.container}>
          <TextInput placeholder='Nome' style={styles.inputGroup} value={user.name} onChangeText={(value)=>handleChangeText(value,'name')}/>
           
           <TextInput placeholder='Sobrenome' style={styles.inputGroup} value={user.sobrenome}  onChangeText={(value)=>handleChangeText(value,'sobrenome')}/>
           <TextInput placeholder='Curso' style={styles.inputGroup} value={user.curso}  onChangeText={(value)=>handleChangeText(value,'curso')}/>
           <TextInput placeholder='IRA' style={styles.inputGroup} value={user.ira}  onChangeText={(value)=>handleChangeText(value,'ira')}/>
           
           <View style={{padding:5, backgroundColor: 'purple', marginVertical: 10}}>
            <Button  onPress={()=>updateUser()} title='Editar  Perfil' color='purple'></Button>
            </View>
            <View style={{padding:5, backgroundColor: 'gray', marginVertical: 10, color:'#000000'}}>
            <Button  onPress={()=>deleteUserById()} title='Excluir aluno' color='gray'></Button>
            </View>
        

       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35

    },
    loader: {

    },
    inputGroup: {
        height: 40,
        backgroundColor: "#fafafa",
        padding: 10,
        marginBottom: 10,

    }
})

export default EditUserScreen
