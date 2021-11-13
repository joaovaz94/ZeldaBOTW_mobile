import { Button, Card, Title} from 'react-native-paper'
import { Image, ScrollView, Paragraph } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

function MateriaisIndice({ navigation, route }) {

    const [material, setMaterial] = useState({})

    useEffect(() => {

        const id = route.params.id

        apiZelda.get('/entry/materials' + id).then(resultado => {
            setMaterial(resultado.data.data)
            console;log(resultado.data.data)
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

                <Card>
                    <Image
                        style={{ height: 300, margin: 5 }}
                        source={{ uri: material.image }}
                    />
                    <Title>{material.name}</Title>
                    <Paragraph>{material.name}</Paragraph>
                    <Paragraph>Categoria: {material.category}</Paragraph>
                </Card>
            </ScrollView>
        </>
    )
}

export default MateriaisIndice
