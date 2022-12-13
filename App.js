import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import CadastroScreen from './screens/Cadastro';
import ListaScreen from './screens/Listar';
import InserirScreen from './screens/Inserir';
import AlterarScreen from './screens/Alterar';

const Stack = createNativeStackNavigator();
function App() {
    return (
        //configuração da rota
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="Listar" component={ListaScreen} options={{ headerShown: false }}  />
                <Stack.Screen name="Inserir" component={InserirScreen} />
                <Stack.Screen name="Alterar" component={AlterarScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
