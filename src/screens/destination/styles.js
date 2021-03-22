import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding: 20,
        height: '100%',
    },

    textInput:{
        fontSize:24,
        backgroundColor:"#fff",
        padding:5,
        borderRadius:5,
        paddingHorizontal:10
    },
    row:{
        flexDirection:"row",
        marginTop:10,
        paddingBottom:10,
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"lightgrey"
    },
    location:{
        backgroundColor:"#d4d4d4",
        padding:10,
        marginRight:20,
        borderRadius:10
    },
    locationText:{
        fontSize:20,
        fontWeight:"bold"
    }
})

export default styles