import React from 'react'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-paper'

const Home = ({ navigation }) => {
    return (
        <>
           <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Criaturas')}>
                Criaturas
            </Button> 
           <Button marginTop={10} icon="home" mode="contained" onPress={() => navigation.push('Materiais')}>
                Materiais
            </Button> 

            <ScrollView margin={10}>

            </ScrollView>
        </>
    )
}

export default Home
