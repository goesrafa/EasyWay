import React, { useState, useEffect } from 'react'
import { View , ActivityIndicator, Text, StyleSheet,  FlatList, RefreshControl} from 'react-native'
import { ActivityIndicator, withTheme } from 'react-native-paper'

//Criadas
import { Header } from '../components/Header'
import { BACKEND } from '../constants'

function ListaProdutos({navigation, theme}){
    const { colors } = theme
    const [ produtos, setProdutos] = useState([])
    const [carregandoProdutos, setCarregandoProdutos] = useState(false)
    const [refreshing, setRefreshing] = useState(false)

    useEffect(()=>{
        obterProdutos()
    },[])

    async function obterProdutos(){
        setCarregandoProdutos(true)
        let url = `${BACKEND}/produtos`
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            setProdutos(data)
            console.log('Produtos obtidos com sucesso')
        })
        .catch(function (error) {
            console.err(`Houve um problema ao obter os produtos: ${error.message}`)
        })

        setCarregandoProdutos(false)
    }

    const onRefresh = React.useCallback(async() => {
        setRefreshing(true)
        try{
            await obterProdutos()
        }catch (error){
            console.error(error)
        }
        setRefreshing(false)
    }, [refreshing])
    return(
        <>
            <Header  titulo="Produtos cadastrados" back={true}  navigation={navigation}/>
            <View>
                    {carregandoProdutos && <ActivityIndicator size="small" color={colors.primary}/>}
                    {produtos.length === 0 && !carregandoProdutos ? (
                        <View style={styles.tituloAviso}>
                            <Text style={styles.titulo}>Ainda não tem nenhum produto cadastrado</Text>
                        </View>
                    ) : (
                        <FlatList 
                            data={produtos}
                            renderItem={({item}) => {
                                <ListaProduto data={item} navigation={navigation}/>
                            }}
                            keyExtractor={item => item._id.toString()}
                            refreshControl={<RefreshControl  refreshing={refreshing} onRefresh={onRefresh}/>
                        
                        }
                        />
                    )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tituloAviso: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    titulo: {
        fontSize: 20
    }
})

export default withTheme(ListaProdutos)