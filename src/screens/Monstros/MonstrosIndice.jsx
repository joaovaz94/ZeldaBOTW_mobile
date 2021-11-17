import React, { useEffect, useState } from 'react'
import { Button, Card, Title } from 'react-native-paper'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const MonstrosIndice = ({navigation}) => {

    const [monstros, setMonstros] = useState([])

    useEffect(() => {
        apiZelda.get('/category/monsters').then(resultado => {
            setMonstros(resultado.data.data)
        })
    }, [])

    return (
        <>
            
           <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button> 

            <ScrollView margin={10}>
                {monstros.length == 0 &&
                    <>
                        <Image source={require('../../../assets/img/link_escalando.gif')} />
                        <Text>Carregando ...</Text>
                    </>
                }
                {monstros.length > 0 &&
                <Row>
                  {monstros.map(monstro => (
                        <Col size={49} key={monstro.id} >
                            <TouchableOpacity
                                onPress={() => navigation.push('Monstros/Detalhes', { id: monstro.id })}>
                                <Image
                                    style={{ height: 300, margin: 5 }}
                                    source={{ uri: monstro.image }}
                                />
                            </TouchableOpacity>
                            <Text>{monstro.name}</Text>
                        </Col>
                    ))} 
                </Row>
                }
            </ScrollView>
        </>
    )
}

export default MonstrosIndice