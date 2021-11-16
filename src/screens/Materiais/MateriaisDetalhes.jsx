import { Button, Card, Title, Paragraph  } from 'react-native-paper'
import { Image, ScrollView, TouchableHighlight } from 'react-native'
import React, { useEffect, useState } from 'react'
import apiZelda from '../../services/apiZelda'
import { Row, Column as Col } from 'react-native-responsive-grid'

const MateriaisDetalhes = ({ navigation, route }) => {

    const [material, setMaterial] = useState({})

    useEffect(() => {

        const id = route.params.id

        apiZelda.get('/entry/' + id).then(resultado => {
            setMaterial(resultado.data.data)
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
                        source={{uri: material.image}}
                    />
                    <Title>{material.name}</Title>
                    <Paragraph>{material.description}</Paragraph>
                    <Title>Categoria: 
                        <TouchableHighlight 
                            onPress={() => navigation.push('Materiais')}>
                         <Title> {material.category}</Title>
                        </TouchableHighlight>
                    </Title>
                    <Paragraph>Efeitos ao cozinhar: {material.cooking_effect}</Paragraph>
                </Card>
                
            </ScrollView> 
            
        </>
    )
}

export default MateriaisDetalhes
