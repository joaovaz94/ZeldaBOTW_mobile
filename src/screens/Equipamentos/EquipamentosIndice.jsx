import React, { useEffect, useState } from 'react'
import { Button, Card, Title } from 'react-native-paper'
import { Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const EquipamentosIndice = ({navigation}) => {

    const [equipamentos, setEquipamentos] = useState([])

    useEffect(() => {
        apiZelda.get('/category/equipment').then(resultado => {
            setEquipamentos(resultado.data.data)
        })
    }, [])

    return (
        <>
            
           <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Home')}>
                Home
            </Button> 

            <ScrollView margin={10}>
                <Row>
                  {equipamentos.map(equipamento => (
                        <Col size={49} key={equipamento.id} >
                            <TouchableOpacity
                                onPress={() => navigation.push('Equipamentos/Detalhes', { id: equipamento.id })}>
                                <Image
                                    style={{ height: 300, margin: 5 }}
                                    source={{ uri: equipamento.image }}
                                />
                            </TouchableOpacity>
                            <Text>{equipamento.name}</Text>
                        </Col>
                    ))} 
                </Row>
            </ScrollView>
        </>
    )
}

export default EquipamentosIndice
