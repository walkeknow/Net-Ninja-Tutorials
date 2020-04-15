import {createStackNavigator} from 'react-navigation-stack'
import Home from '../screens/home'
import Review from '../screens/review'
import Header from '../shared/header'
import React from 'react'

const screens = {
    // When we navigeate to Home, it should how the screen that is called home
    // Whichever is at top is the default screen
    Home: {
        screen: Home,
        navigationOptions : ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='GameZone'></Header>,
            } 
        }
    },
    Review: {
        screen: Review,
        navigationOptions :{
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {
            backgroundColor: '#eee',
        }
    }
})

export default HomeStack
// export default createAppContainer(HomeStack)