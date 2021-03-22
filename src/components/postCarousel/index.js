import React from 'react'
import { Image, View, Text, Pressable } from 'react-native'
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions'
import styles from './styles'
import {useNavigation} from '@react-navigation/native'

export default function PostCarousel(props) {

    const {post} = props

    const width = useWindowDimensions().width
    const navigation = useNavigation()

    const goToDetailPost = () =>{
        navigation.navigate('Accomodation',{postId:post.id})
    }

    return (
<Pressable onPress={goToDetailPost} style={[styles.container, { width: width - 60}]}>
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{uri: post.image}}
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
          {/* Bed & Bedroom  */}
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>

          {/* Type & Description */}
          <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>

          {/*  Old price & new price */}
          <Text style={styles.prices}>
            <Text style={styles.price}>${post.newPrice} </Text>
            / night
          </Text>
        </View>
      </View>
    </Pressable>
    )
}
