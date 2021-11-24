import Categorias from '../screens/Categorias'
import Functions from '../screens/Functions'
import { NavigationContainer } from "@react-navigation/native";
import Recipes from '../screens/Recipes'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import react from "react";

const Stack = createNativeStackNavigator();

const Navigator = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Categorias" component={Categorias}/>
            <Stack.Screen name="Functions" component={Functions}/> 
            <Stack.Screen name="Recipes" component={Recipes}/>             
        </Stack.Navigator>

    </NavigationContainer>

);

export default Navigator;
