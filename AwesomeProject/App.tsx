import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import MainStack from './src/navigation/index'
import store from './src/store'

const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})