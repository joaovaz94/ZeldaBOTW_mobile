import React from 'react'
import { ScrollView, TouchableHighlight, Image  } from 'react-native'
import { Button, Divider, Title } from 'react-native-paper'
import { Row, Column as Col } from 'react-native-responsive-grid'

const Home = ({ navigation }) => {
    return (
        <>
            <Row>
                <Col>
                    <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Criaturas')}>
                        Criaturas
                    </Button>
                </Col>
                <Col>
                    <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Materiais')}>
                        Materiais
                    </Button>
                </Col>
                <Col>
                    <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Equipamentos')}>
                        Equipamentos
                    </Button>
                </Col>
                <Col>
                    <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Monstros')}>
                        Monstros
                    </Button>
                </Col>
                <Col>
                    <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Tesouros')}>
                        Tesouros
                    </Button>
                </Col>
            </Row>

            <ScrollView margin={10}>
                <Title>Wiki de Zelda Breath of the Wild</Title>
                <Image source={require('../../assets/img/BotW_NA_Logo_White.png')}></Image>
                    <Title>Categorias: 
                        <TouchableHighlight 
                            onPress={() => navigation.push('Materiais')}>
                         <Title>Materiais</Title>
                        </TouchableHighlight>
                        <Divider/>
                        <TouchableHighlight 
                            onPress={() => navigation.push('Criaturas')}>
                         <Title>Criaturas</Title>
                        </TouchableHighlight>
                        <Divider/>
                        <TouchableHighlight 
                            onPress={() => navigation.push('Equipamentos')}>
                         <Title>Equipamentos</Title>
                        </TouchableHighlight>
                        <Divider/>
                        <TouchableHighlight 
                            onPress={() => navigation.push('Monstros')}>
                         <Title>Monstros</Title>
                        </TouchableHighlight>
                        <Divider/>
                        <TouchableHighlight 
                            onPress={() => navigation.push('Tesouros')}>
                         <Title>Tesouros</Title>
                        </TouchableHighlight>
                        <Divider/>
                    </Title>

            </ScrollView>
        </>
    )
}

export default Home
