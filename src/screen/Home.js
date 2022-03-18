import React from 'react'
import {View, Text, Button} from 'react-native'


export default function Home({navigation}){
    return(
        <View>
            <Text>Bem vindo ao EasyWay</Text>
            <Button  title='Sobre o App' onPress={()=> navigation.navigate('Sobre')}/>
        </View>
    )
}