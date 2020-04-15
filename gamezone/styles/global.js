import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    titleText: {
        fontFamily: 'poppins-bold',
        fontSize: 18,
    },
    paraText: {
        marginVertical: 8,
        lineHeight: 20,
        fontFamily: 'poppins-regular'
    }
})

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}