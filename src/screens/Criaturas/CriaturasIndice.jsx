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
            
           <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Criaturas')}>
                Criaturas
            </Button> 
           <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Materiais')}>
                Materiais
            </Button> 

            <ScrollView margin={10}>
                <Row>
                  {criaturas.map(criatura => (
                        <Col size={49} key={criatura.id} >
                            <Text>{criatura.name}</Text>
                        </Col>
                    ))} 
                </Row>
            </ScrollView>
        </>
    )
}

export default CriaturasIndice
