import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
image:{
    width:"100%",
    height:500,
    resizeMode:"cover",
    justifyContent:"center",
},
title:{
    fontSize:80,
    fontWeight:"bold",
    color:"#fff",
    width:"70%",
    marginLeft:30
},
searchButton:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    width:Dimensions.get('screen').width - 20,
    marginHorizontal:10,
    backgroundColor:"#fff",
    padding:10,
    borderRadius:20,
    top:40,
},
button:{
    padding:10,
    marginLeft:30,
    marginTop:20,
    backgroundColor:"#fff",
    width:200,
    borderRadius:5
},
buttonText:{
    color:"#000",
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold"
},
searchButtonText:{
    color:"#000",
    fontSize:20,
    marginLeft:10
}

})

export default styles