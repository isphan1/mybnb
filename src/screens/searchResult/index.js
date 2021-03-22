import React from 'react'
import { FlatList, View } from 'react-native'
import Post from '../../components/post'
import feed from '../../../assets/data/feed'

export default function SearchResultScreen() {
    return (
        <View>
            <FlatList
                data={feed}
                keyExtractor={item => item.id}
                renderItem={({item})=>(
                    <Post item={item}/>
                )}
            />
        </View>
    )
}
