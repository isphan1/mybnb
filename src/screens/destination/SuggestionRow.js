import React from 'react'
import { View, Text } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './styles'

export default function SuggestionRow(props) {
    const {item} = props
    return (
        <View style={styles.row}>
            <Entypo style={styles.location} name="location-pin" size={30}/>
            <Text style={styles.locationText}>{item.description}</Text>
        </View>
    )
}
