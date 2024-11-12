import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "../Pages/Login/Index";
import { createStackNavigator } from "@react-navigation/stack";
import { NovaConta } from "../Pages/NovaConta/Index";
import { RecuperarSenha } from "../Pages/RecuperarSenha/Index";

const Stack = createStackNavigator();

export function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        title: 'Login',
                        headerShown:false,
                    }}
                />
                <Stack.Screen 
                    name="NovaConta"
                    component={NovaConta}
                    
                    options={{
                        headerTintColor: "white",
                        headerStyle: {
                            backgroundColor: "#2B1D62",
                        },
                        title: "Nova Conta",
                        headerTitleStyle: {
                            fontFamily: "AveriaLibre-Bold",
                            fontSize: 30,
                        }
                    }}
                />
                <Stack.Screen 
                    name="RecuperarSenha"
                    component={RecuperarSenha}
                    
                    options={{
                        headerTintColor: "white",
                        headerStyle: {
                            backgroundColor: "#2B1D62",
                        },
                        title: "Recuperar Senha",
                        headerTitleStyle: {
                            fontFamily: "AveriaLibre-Bold",
                            fontSize: 30,
                        }
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}