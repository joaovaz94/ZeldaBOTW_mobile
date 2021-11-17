import { Button, Card, Title, Paragraph, List, Divider  } from 'react-native-paper'
import { Image, ScrollView, TouchableHighlight,  View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const TesourosDetalhes = ({ navigation, route }) => {

    const [detalhe, setDetalhe] = useState({})
    const [locais, setLocais] = useState([])
    const [drops, setDrops] = useState([])

    useEffect(() => {

        const id = route.params.id

        apiZelda.get('/entry/' + id).then(resultado => {
            setDetalhe(resultado.data.data)
        })

        apiZelda.get('/entry/' + id).then(resultado => {
            setLocais(resultado.data.data.common_locations)
        })

        apiZelda.get('/entry/' + id).then(resultado => {
            setDrops(resultado.data.data.drops)
        })
    }, [])
    return (
        <>

            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button>

           <ScrollView margin={9}>
                {!detalhe.id  && 
                    <>
                        <Image source={require('../../../assets/img/link_escalando.gif')}/>
                        <Text>Carregando ...</Text>
                    </>
                }
                {detalhe.id  &&
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
                    <Title>Materiais:</Title>
                    <Paragraph>
                        {drops.map((drop, indiceDrop) => (
                            <View key={indiceDrop}>
                                <List.Item title={drop} />
                                <Divider/>
                            </View>
                        ))}
                    </Paragraph>
                </Card>
                } 
            </ScrollView> 
            
        </>
    )
}

export default TesourosDetalhes