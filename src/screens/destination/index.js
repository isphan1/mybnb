import React from 'react'
import { Text, TextInput, View, Keyboard, FlatList, Pressable } from 'react-native'
import styles from './styles'
import search from '../../../assets/data/search'
import Entypo from 'react-native-vector-icons/Entypo'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {useNavigation} from "@react-navigation/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SuggestionRow from './SuggestionRow'

export default function DestinationSearchScreen() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{height:"100%"}}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    navigation.navigate("Guests")
                }}
                fetchDetails
                styles={{
                    textInput:styles.textInput
                }}
                query={{
                    key: 'AIzaSyBAPUhnGpx9OCtMreyyG41oCojb77IS-m4',
                    language: 'en',
                    types:'(cities)'
                }}
                
                suppressDefaultStyles
                renderRow={(data) => <SuggestionRow item={data} />}

                />
            </View>
        </View>
    )
}
