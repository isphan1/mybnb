import React from 'react'
import { ImageBackground, Pressable, SafeAreaView, Text, View } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from "@react-navigation/native";

export default function HomeScreen(props) {
    const navigation = useNavigation()

    const onClickItem = () =>{
        navigation.navigate('Search')
    }
    return (
            <View>              
                 <ImageBackground 
                    source = {require("../../../assets/images/w.jpg")}
                    style={styles.image}    
                >
                    <Pressable
                        style={styles.searchButton}
                        onPress={onClickItem}
                    >
                        <Fontisto name="search" size={24} color={"#f15454"}/>
                        <Text style={styles.searchButtonText}>Where are you going?</Text>
                    </Pressable> 
                    <Text style={styles.title}>Go Near</Text>
                    <Pressable
                        style={styles.button}
                        onPress={()=>console.warn("working......")}
                    >
                        <Text style={styles.buttonText}>Explore near by stays</Text>
                    </Pressable>
                </ImageBackground>
            </View>
    )
}
