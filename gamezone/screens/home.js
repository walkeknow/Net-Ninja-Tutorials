import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native'
import {globalStyles} from '../styles/global'
import { FlatList } from 'react-native-gesture-handler'
import Card from '../shared/card'

export default function Home({navigation}) {
    const [reviews, setReviews] = useState([
        {title: 'A', rating: 5, body: 'abc', key: '1'},
        {title: 'B', rating: 2, body: 'bcd', key: '2'},
        {title: 'C', rating: 3, body: 'cde', key: '3'}
    ])

    const pressHandler = () => {
        //navigation.navigate('Review')
        navigation.push('Review')
    }
    
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            
            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    // Passing Data Between Screens
                    <TouchableOpacity onPress={() => navigation.navigate('Review', item)}>
                        <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            >
            </FlatList>
            <Button title='Read Reviews' onPress={pressHandler}></Button>
        </View>
    )
}