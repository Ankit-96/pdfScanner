import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Button } from 'react-native-paper'

import { Login } from '../modules/containers/Login'
import { Home } from '../modules/containers/Home'
import { Biller } from '../modules/containers/Biller'
import { Camera } from '../modules/containers/Camera'

let Stack = createStackNavigator()

let screens = (function () {
  let screen = [
    <Stack.Screen
      name={'Login'}
      component={Login}
      options={{
        header: () => null
      }}
    />,
    <Stack.Screen
      name={'Home'}
      component={Home}
      options={{
        headerLeft: () => null
      }}
    />,
    <Stack.Screen name={'Biller'} component={Biller} />,
    <Stack.Screen name={'Camera'} component={Camera} />
  ]

  return screen
})()

const mainScreen = (
  <NavigationContainer initialRouteName="Login">
    <Stack.Navigator>{screens}</Stack.Navigator>
  </NavigationContainer>
)

class RootRouter extends Component {
  render() {
    return mainScreen
  }
}

export default RootRouter
