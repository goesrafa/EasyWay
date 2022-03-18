import react from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

import Home from '../screen/Home'
import Sobre from '../screen/Sobre'


export default function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen nome="Usuário" component={Home}
                options={{tabBarIcon: ()=>(
                    <FontAwesome name="user" size={24} color="black"/>)
                }}/>
                 <Tab.Screen  name='Sobre' component={Sobre} options={{tabBarIcon: () => (
                        <FontAwesome name="cogs" size={24} color="black"/>)
                 }}/>
        </Tab.Navigator>
    )
}