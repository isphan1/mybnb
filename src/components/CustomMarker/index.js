import React from 'react'
import { Text, View } from 'react-native'
import { Marker } from 'react-native-maps';

export default function CustomMarker(props) {

    const {coordinate,price,isSelected,onPress} = props
    return (
        <Marker
        onPress={onPress} 
        coordinate={coordinate}
    >
    <View
        style={{
            backgroundColor:isSelected ? "#000":"#fff",
            padding:5,
            borderRadius:20,
            borderColor:"grey",
            borderWidth:1
        }}
    >
        <Text style={{color:isSelected ? "#fff":"#000",fontWeight:"bold",fontSize:14}}>${price}</Text>
    </View>
    </Marker>
    )
}
