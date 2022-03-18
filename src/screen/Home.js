import React from 'react'
import {View, Text, Button, FlatList} from 'react-native'
import { Colors, withTheme , List} from 'react-native-paper'


//Componente criado
import Header from '../components/Header'



 function Home({navigation, theme}){
     const {colors} = theme
     const opcoes = [
         {id: 1, nome: 'Cadastro', descricao: 'Cadastro de produtos', icon: 'blur', menu: 'ListaProdutos'},
         {id: 2, nome: 'Configurações', descricao: 'Configurações do app', icon: 'cog', menu: 'Configurações'}
     ]
    return(
    <>
        <Header  titulo="Área do administrador " subtitulo="EasyWay" back={false}/>
        <View style={{backgroundColor: colors.surface}}>
            <List.Subheader>Selecione uma das opções: </List.Subheader>
            <FlatList  data={opcoes} renderItem={({item}) =>{
                <List.Item 
                        title={item.nome}
                        style={{backgroundColor: colors.background}}
                        titlestyle={{fontSie: 20}}
                        description={item.descricao}
                        descriptionStyle={{marginBottom: 5}}
                        onPress={() => navigation.navigate(item.menu)}
                        left={props => <List.Icon {...props} icon={item.icone} />}
                 />

            }} 
                keyExtractor={item => item.id.toString()}
            />

        </View>
    </>
    )
}

export default withTheme(Home)