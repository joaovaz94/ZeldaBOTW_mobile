import React, { useEffect, useState } from 'react'
import { Button, Card, Title } from 'react-native-paper'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const TesourosIndice = ({navigation}) => {

    const [tesouros, setTesouros] = useState([])

    useEffect(() => {
        apiZelda.get('/category/treasure').then(resultado => {
            setTesouros(resultado.data.data)
        })
    }, [])

    return (
        <>
            
           <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button> 

            <ScrollView margin={10}>
                {tesouros.length == 0 &&
                    <>
                        <Image source={require('../../../assets/img/link_escalando.gif')} />
                        <Text>Carregando ...</Text>
                    </>
                }
                {tesouros.length > 0 &&
                <Row>
                  {tesouros.map(tesouro => (
                        <Col size={49} key={tesouro.id} >
                            <TouchableOpacity
                                onPress={() => navigation.push('Tesouros/Detalhes', { id: tesouro.id })}>
                                <Image
                                    style={{ height: 300, margin: 5 }}
                                    source={{ uri: tesouro.image }}
                                />
                            </TouchableOpacity>
                            <Text>{tesouro.name}</Text>
                        </Col>
                    ))} 
                </Row>
                }
            </ScrollView>
        </>
    )
}

export default TesourosIndice