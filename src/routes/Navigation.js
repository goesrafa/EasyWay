import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { AppContext } from '../themes/ThemeProvider'

import Configuracoes from '../screen/Configuracoes'
import Sobre from '../screen/Sobre'
import Tabs from './Tabs'
import ListaProdutos from '../screen/ListaProdutos'

const Stack = createStackNavigator()

export default function Navigation(){
    const { tema } = React.useContext(AppContext)
    return(
            <NavigationContainer theme={tema}>
                <Stack.Navigation inicialRouteName="Tabs">

                        <Stack.Screen  name="Home" component={Tabs}   options={{headerShown: false}}/>
                        <Stack.Screen  name="Sobre" component={Sobre} options={{headerShown: false}}/>
                        <Stack.Screen  name="Configurações" component={Configuracoes} options={{headerShown: false}}/>
                        <Stack.Screen  name="ListaProdutos" component={ListaProdutos} options={{headerShown: false}}/>
                </Stack.Navigation>
            </NavigationContainer>
    )
}