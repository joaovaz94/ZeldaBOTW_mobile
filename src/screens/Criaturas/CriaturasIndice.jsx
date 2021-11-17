import React, { useEffect, useState } from 'react'
import { Button, Card, Title } from 'react-native-paper'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const CriaturasIndice = ({navigation}) => {

    const [criaturas, setCriaturas] = useState([])

    useEffect(() => {
        apiZelda.get('/category/creatures').then(resultado => {
            setCriaturas(resultado.data.data.non_food)
        })
    }, [])

    return (
        <>

            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button>

            <ScrollView margin={10}>
                {criaturas.length == 0 &&
                    <>
                        <Image source={require('../../../assets/img/link_escalando.gif')} />
                        <Text>Carregando ...</Text>
                    </>
                }
                {criaturas.length > 0 &&
                    <Row>
                        {criaturas.map(criatura => (
                            <Col size={49} key={criatura.id} >
                                <TouchableOpacity
                                    onPress={() => navigation.push('Criaturas/Detalhes', { id: criatura.id })}>
                                    <Image
                                        style={{ height: 300, margin: 5 }}
                                        source={{ uri: criatura.image }}
                                    />
                                </TouchableOpacity>
                                <Text>{criatura.name}</Text>
                            </Col>
                        ))}
                    </Row>
                }
            </ScrollView>
        </>
    )
}

export default CriaturasIndice
