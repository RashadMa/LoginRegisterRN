import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import TwoFactorAuthView from './screens/Confirm'
import LoginScreen from './screens/Login'
import ProfileScreen from './screens/Profile'
import SignUpScreen from './screens/SignUp'
const Stack = createNativeStackNavigator()

const index = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='signup' component={SignUpScreen} />
                <Stack.Screen name='login' component={LoginScreen} />
                <Stack.Screen name='confirm' component={TwoFactorAuthView} />
                <Stack.Screen name='profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})