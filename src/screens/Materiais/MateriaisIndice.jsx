import { Button, Card, Title} from 'react-native-paper'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const MateriaisIndice = ({ navigation }) => {

    const [materiais, setMateriais] = useState([])

    useEffect(() => {
        apiZelda.get('/category/materials').then(resultado => {
            setMateriais(resultado.data.data)
        })
    }, [])
    return (
        <>

            <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button>

            <ScrollView margin={10}>
                {materiais.length == 0 && 
                    <>
                        <Image source={require('../../../assets/img/link_escalando.gif')}/>
                        <Text>Carregando ...</Text>
                    </>
                }
                {materiais.length > 0 &&
                <Row>
                    {materiais.map(material => (
                        <Col size={49} key={material.id} >
                            <TouchableOpacity
                                onPress={() => navigation.push('Materiais/Detalhes', { id: material.id })}>
                                <Image
                                    style={{ height: 300, margin: 5 }}
                                    source={{ uri: material.image }}
                                />
                            </TouchableOpacity>
                            <Text>{material.name}</Text>
                        </Col>
                    ))} 
                </Row>
                }
            </ScrollView>
        </>
    )
}

export default MateriaisIndice
