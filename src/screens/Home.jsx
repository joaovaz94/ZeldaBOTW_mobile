import React from 'react'
import { ScrollView, TouchableHighlight, Image  } from 'react-native'
import { BottomNavigation, Button, Divider, List, Paragraph, Title, Text } from 'react-native-paper'
import { Row, Column as Col } from 'react-native-responsive-grid'




const Home = ({ navigation }) => {
    return (
        <>
            <Row>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <TouchableHighlight
                        onPress={() => navigation.push('Materiais')}>
                        <Title>Materiais |</Title>
                    </TouchableHighlight>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <TouchableHighlight
                        onPress={() => navigation.push('Equipamentos')}>
                        <Title> Equipamentos |</Title>
                    </TouchableHighlight>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <TouchableHighlight
                        onPress={() => navigation.push('Criaturas')}>
                        <Title> Criaturas |</Title>
                    </TouchableHighlight>
                </Col>
                </Row>
                <Row>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <TouchableHighlight
                        onPress={() => navigation.push('Monstros')}>
                        <Title> Monstros |</Title>
                    </TouchableHighlight>
                </Col>
                <Col xs={2} sm={2} md={2} lg={2}>
                    <TouchableHighlight
                        onPress={() => navigation.push('Tesouros')}>
                        <Title> Tesouros |</Title>
                    </TouchableHighlight>
                </Col>
            </Row>

            <ScrollView margin={10}>
                <Title>Wiki de Zelda Breath of the Wild</Title>
                <Image source={require('../../assets/img/logo_botw.png')} style={{width: 350, height: 250}} ></Image>
                <List.Section>
                    <Title>Categorias:</Title>

                    <TouchableHighlight
                        onPress={() => navigation.push('Materiais')}>
                        <Paragraph>        Materiais</Paragraph>
                    </TouchableHighlight>
                    <Divider />
                    <TouchableHighlight
                        onPress={() => navigation.push('Criaturas')}>
                        <Paragraph>        Criaturas</Paragraph>
                    </TouchableHighlight>
                    <Divider />
                    <TouchableHighlight
                        onPress={() => navigation.push('Equipamentos')}>
                        <Paragraph>        Equipamentos</Paragraph>
                    </TouchableHighlight>
                    <Divider />
                    <TouchableHighlight
                        onPress={() => navigation.push('Monstros')}>
                        <Paragraph>        Monstros</Paragraph>
                    </TouchableHighlight>
                    <Divider />
                    <TouchableHighlight
                        onPress={() => navigation.push('Tesouros')}>
                        <Paragraph>        Tesouros</Paragraph>
                    </TouchableHighlight>
                    <Divider />
                </List.Section>

            </ScrollView>

        </>
    )
};

export default Home;