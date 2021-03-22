import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        margin:20,
        marginTop:30,

    },
    itemContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderColor:"#d4d4d4",
        paddingBottom:30,
        marginBottom:30
    },
    button:{
        width:40,
        height:40,
        borderWidth:1,
        borderColor:"#d4d4d4",
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center"
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    subTitle:{
        fontSize:18
    },
    itemAction:{
        flexDirection:"row",
        alignItems:"center"
    },
    itemText:{
        fontSize:24,
        marginHorizontal:15
    },
    pressText:{
        fontSize:30,
    }
})

export default styles