import Categorias from '../screens/Categorias'
import Functions from '../screens/Functions'
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Recipes from '../screens/Recipes'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navegador = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="App">
            <Stack.Screen name="Categorias" component={Categorias}/>
            <Stack.Screen name="Functions" component={Functions}/> 
            <Stack.Screen name="Recipes" component={Recipes}/>             
        </Stack.Navigator>
    </NavigationContainer>

);

export default Navegador;
