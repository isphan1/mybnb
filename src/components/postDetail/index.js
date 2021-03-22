import React from 'react'
import { Image, View, Text , Pressable } from 'react-native'
import styles from './styles'

export default function PostDetail(props) {

    const {item} = props

    return (
       <View style={styles.container}>
           <Image
                style={styles.image}
                source={{uri:item.image}}
           />
           <Text style={styles.bedrooms}>{item.bed} bed {item.bedroom} bedroom</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                <Text style={styles.newPrice}> ${item.newPrice} </Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>${item.totalPrice}</Text>
            <Text style={styles.description}>{item.description}</Text>
       </View>
    )
}
