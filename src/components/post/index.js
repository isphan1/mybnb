import React from 'react'
import { Image, View, Text , Pressable } from 'react-native'
import styles from './styles'

import {useNavigation} from '@react-navigation/native'

export default function Post(props) {

    const {item} = props

    const navigation = useNavigation()

    const goToDetailPost = () =>{
        navigation.navigate('Accomodation',{postId:item.id})
    }

    return (
       <Pressable onPress={goToDetailPost} style={styles.container}>
           <Image
                style={styles.image}
                source={{uri:item.image}}
           />
           <Text style={styles.bedrooms}>{item.bed} bed {item.bedroom} bedroom</Text>
           <Text style={styles.description}>{item.description.substring(1, 70)}</Text>
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${item.oldPrice}</Text>
                <Text style={styles.newPrice}> ${item.newPrice} </Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>${item.totalPrice}</Text>

       </Pressable>
    )
}
