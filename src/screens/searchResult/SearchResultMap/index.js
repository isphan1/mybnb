import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import places from '../../../../assets/data/feed'
import CustomMarker from '../../../components/CustomMarker/'
import PostCarousel from '../../../components/postCarousel';
export default function SearchResultMapScreen(props) {

    const [selectedId,setSelectedId] = React.useState(null)

    const width = useWindowDimensions().width

    const flatList = React.useRef()
    const map = React.useRef()

    const viewConfig = React.useRef({itemVisiblePercentThreshold: 70})

    const onViewChanged = React.useRef(({viewableItems}) => {
        if (viewableItems.length > 0) {
          const selectedPlace = viewableItems[0].item;
          setSelectedId(selectedPlace.id)
        }
      })

    React.useEffect(()=>{

        if(!selectedId || !flatList){
            return
        }

        const index = places.findIndex(place=> place.id === selectedId)

        flatList.current.scrollToIndex({index})
        
        const selectedPlace = places[index];

        const region = {
          latitude: selectedPlace.coordinate.latitude,
          longitude: selectedPlace.coordinate.longitude,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);


    },[selectedId,flatList])

    return (
        <View style={{flex:1}}>
            <MapView
                ref={map}
                style={{flex:1}}
                initialRegion={{
                latitude: 28.3279822,
                longitude: -16.5124847,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
                }}
            >
             {
                 places.map(item=>(
                     <CustomMarker key={item.id} 
                     
                     coordinate={item.coordinate} 
                     price={item.newPrice}
                     isSelected = {item.id === selectedId}
                     onPress = {()=>setSelectedId(item.id)}
                     />
                 ))
             }   
            </MapView>  
            <View style={{
                position:"absolute",
                bottom:10,
            }}>
                <FlatList
                    ref={flatList}
                    data={places}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item=>item.id}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    renderItem={({item})=>(
                        <PostCarousel post={item}/>
                    )}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
            </View>     
    )
}
