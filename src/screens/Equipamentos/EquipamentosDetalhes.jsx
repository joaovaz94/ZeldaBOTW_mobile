import { Button, Card, Title, Paragraph, List, Divider  } from 'react-native-paper'
import { Image, ScrollView, TouchableHighlight,  View } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const EquipamentosDetalhes = ({ navigation, route }) => {

    const [detalhe, setDetalhe] = useState({})
    const [locais, setLocais] = useState([])

    useEffect(() => {

        const id = route.params.id

        apiZelda.get('/entry/' + id).then(resultado => {
            setDetalhe(resultado.data.data)
        })

        apiZelda.get('/entry/' + id).then(resultado => {
            setLocais(resultado.data.data.common_locations)
        })

    }, [])
    return (
        <>

            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button>

           <ScrollView margin={9}>
                <Card>
                    <Image
                        style={{height: 300, margin: 5}}    
                        source={{uri: detalhe.image}}
                    />
                    <Title>{detalhe.name}</Title>
                    <Paragraph>{detalhe.description}</Paragraph>
                    <Title>Categoria: 
                        <TouchableHighlight 
                            onPress={() => navigation.push('Criaturas')}>
                         <Title> {detalhe.category}</Title>
                        </TouchableHighlight>
                    </Title>
                    <Paragraph>Efeitos ao cozinhar: {detalhe.cooking_effect}</Paragraph>
                    <Title>Locais:</Title>
                    <Paragraph>
                        {locais.map((local, indice) => (
                            <View key={indice}>
                                <List.Item title={local} />
                                <Divider/>
                            </View>
                        ))}
                    </Paragraph>
                </Card>
                
            </ScrollView> 
            
        </>
    )
}

export default EquipamentosDetalhes
