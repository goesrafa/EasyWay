import React from 'react'
import {View, Text} from 'react-native'
import { withTheme } from 'react-native-paper'

 function Sobre({route, theme}){
     const { colors } = theme
    return(
        <View style={{backgroundColor: colors.surface}}>
            <Text tyle={{color: colors.text}}>Sobre o app EasyWay</Text>
        </View>
    )
}
export default withTheme(Sobre)