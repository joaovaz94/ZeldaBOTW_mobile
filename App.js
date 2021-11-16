import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Avatar, Button, Card, Divider, List, Paragraph, Title } from 'react-native-paper';
import Home from './src/screens/Home';
import CriaturasIndice from './src/screens/Criaturas/CriaturasIndice';
import MateriaisIndice from'./src/screens/Materiais/MateriaisIndice';
import MateriaisDetalhes from'./src/screens/Materiais/MateriaisDetalhes';

const Stack = createNativeStackNavigator();

export default function App(props) {
  return (
    < NavigationContainer>
      <Stack.Navigator initialRouteName="filmes/populares">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Criaturas" component={CriaturasIndice} options={{ title: 'Índice de Criaturas' }} />
        <Stack.Screen name="Materiais" component={MateriaisIndice} options={{ title: 'Índice de Materiais' }} />
        <Stack.Screen name="Materiais/Detalhes" component={MateriaisDetalhes} options={{ title: 'Detalhes de Material' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
