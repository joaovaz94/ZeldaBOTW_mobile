import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Text, ScrollView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Home from './src/screens/Home';
import CriaturasIndice from './src/screens/Criaturas/CriaturasIndice';
import MateriaisIndice from'./src/screens/Materiais/MateriaisIndice';
import MateriaisDetalhes from'./src/screens/Materiais/MateriaisDetalhes';
import CriaturasDetalhes from './src/screens/Criaturas/CriaturasDetalhes';
import EquipamentosIndice from './src/screens/Equipamentos/EquipamentosIndice';
import EquipamentosDetalhes from './src/screens/Equipamentos/EquipamentosDetalhes';
import MonstrosIndice from './src/screens/Monstros/MonstrosIndice';
import MonstrosDetalhes from './src/screens/Monstros/MonstrosDetalhes';
import TesourosIndice from './src/screens/Tesouros/TesourosIndice';
import TesourosDetalhes from './src/screens/Tesouros/TesourosDetalhes';

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  // Specify custom property
  dark: false,
  // Specify custom property in nested object
  colors: {
    background: '#031835',
  }
};

export default function App(props) {
  return (
    <PaperProvider theme={theme}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="filmes/populares">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="Criaturas" component={CriaturasIndice} options={{ title: 'Índice de Criaturas' }} />
        <Stack.Screen name="Criaturas/Detalhes" component={CriaturasDetalhes} options={{ title: 'Detalhes de Criatura' }} />
        <Stack.Screen name="Materiais" component={MateriaisIndice} options={{ title: 'Índice de Materiais' }} />
        <Stack.Screen name="Materiais/Detalhes" component={MateriaisDetalhes} options={{ tiyle: 'Detalhes de Material' }} />
        <Stack.Screen name="Equipamentos" component={EquipamentosIndice} options={{ title: 'Índice de Equipamentos' }} />
        <Stack.Screen name="Equipamentos/Detalhes" component={EquipamentosDetalhes} options={{ tiyle: 'Detalhes de Equipamentos' }} />
        <Stack.Screen name="Monstros" component={MonstrosIndice} options={{ title: 'Índice de Monstros' }} />
        <Stack.Screen name="Monstros/Detalhes" component={MonstrosDetalhes} options={{ tiyle: 'Detalhes de Monstros' }} />
        <Stack.Screen name="Tesouros" component={TesourosIndice} options={{ title: 'Índice de Tesouros' }} />
        <Stack.Screen name="Tesouros/Detalhes" component={TesourosDetalhes} options={{ tiyle: 'Detalhes de Tesouros' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );
}
