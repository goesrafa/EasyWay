import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'

import Home from '../screen/Home'
import Sobre from '../screen/Sobre'

const Stack = createStackNavigator()

export default function Navigation(){
    return(
            <NavigationContainer>
                <Stack.Navigation inicialRouteName="Home">
                        <Stack.Screen  name="Home" component={Home} 
                        options={{
                            title: 'EasyWay',
                            headerStyle: {backgroundColor: '#2F4F4F' },
                            headerTintColor: '#FFF'}}/>
                            
                        <Stack.Screen  name="Sobre" component={Sobre}/>
                </Stack.Navigation>
            </NavigationContainer>
    )
}