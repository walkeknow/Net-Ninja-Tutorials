import React from 'react'
import { StyleSheet, View, Text, Button, Image } from 'react-native'
import { globalStyles, images } from '../styles/global'
import Card from '../shared/card'

export default function Review({ navigation }) {
    const rating = navigation.getParam('rating')

    const pressHandler = () => {
        navigation.goBack()
    }

    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Review Screen</Text>
                <Text>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('body')}</Text>
                <View style={styles.rating}>
                    <Text>Gamezone Rating: </Text>
                    <Image source={images.ratings[rating]}></Image>
                </View>
            </Card>
            <Button title='Go to Homescreen' onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})
