import React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import PostDetail from '../../components/postDetail'
import places from '../../../assets/data/feed'

export default function PostDetailScreen(props) {
    return (
        <ScrollView>
            <PostDetail item={places[props.route.params.postId]}/>
        </ScrollView>
    )
}
