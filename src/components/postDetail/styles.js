import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
container:{
    flex:1,
    margin:20,
    marginTop:40
},
image:{
    width:"100%",
    // aspectRatio:3/2,
    height:200,
    resizeMode:"cover",
    borderRadius:10
},
bedrooms:{
    fontSize:20,
    marginVertical:10,
    color:"#000"
},
description:{
    fontSize:16,
    color:"#000",
    marginTop:10,
    lineHeight:20,
    textAlign:"justify"
},

prices:{
    flexDirection:"row",
    marginVertical:7,
    fontSize:18,
},
oldPrice:{
    textDecorationLine:"line-through",
    color:"#5b5b5b"
},
newPrice:{
    color:"#000",
    fontWeight:"bold"
},
totalPrice:{
    fontSize:18,
    textDecorationLine:"underline",
    color:"#5b5b5b"
}

})


export default styles