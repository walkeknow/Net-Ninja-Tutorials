import {createStackNavigator} from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'

const screens = {
    // When we navigeate to Home, it should how the screen that is called home
    // Whichever is at top is the default screen
    About: {
        screen: About,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About'></Header>,
            } 
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
        }
    }
})

export default AboutStack