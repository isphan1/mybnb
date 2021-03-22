import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import {useNavigation} from "@react-navigation/native";

export default function GuestScreen() {
  const [adults, setAdults] = React.useState(0);
  const [children, setChildren] = React.useState(0);
  const [infants, setInfants] = React.useState(0);

  const navigation = useNavigation()

  const onClickItem = () =>{
      navigation.navigate('Home',{
        screen:"Explore",
        params:{
          screen:"SearchResults"
        }
      }
      )
  }

  return (
    <View style={{justifyContent:"space-between",height:"100%"}}>
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.title}>Adults</Text>
          <Text style={styles.subTitle}>Ages 13 or avobe</Text>
        </View>
        <View style={styles.itemAction}>
          <Pressable
            style={styles.button}
            size={30}
            onPress={() => setAdults(Math.max(0,adults - 1))}
          >
            <Text style={styles.pressText}>-</Text>
          </Pressable>
          <Text style={styles.itemText}>{adults}</Text>
          <Pressable
            style={styles.button}
            size={30}
            onPress={() => setAdults((prev) => prev + 1)}
          >
            <Text style={styles.pressText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.title}>Children</Text>
          <Text style={styles.subTitle}>Ages 2-12</Text>
        </View>
        <View style={styles.itemAction}>
          <Pressable
            style={styles.button}
            size={30}
            onPress={() => setChildren(Math.max(0, children - 1))}
          >
            <Text style={styles.pressText}>-</Text>
          </Pressable>
          <Text style={styles.itemText}>{children}</Text>
          <Pressable
            style={styles.button}
            size={30}
            onPress={() => setChildren((prev) => prev + 1)}
          >
            <Text style={styles.pressText}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.title}>Infants</Text>
          <Text style={styles.subTitle}>Under 2</Text>
        </View>
        <View style={styles.itemAction}>
          <Pressable
            style={styles.button}
            size={30}
            onPress={() => setInfants(Math.max(0, infants - 1))}
          >
            <Text style={styles.pressText}>-</Text>
          </Pressable>
          <Text style={styles.itemText}>{infants}</Text>
          <Pressable
            style={styles.button}
            size={30}
            onPress={() => setInfants((prev) => prev + 1)}
          >
            <Text style={styles.pressText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
    <View>
      <Pressable
        onPress={onClickItem}
        style={{
          marginBottom:20,
          backgroundColor:"#f15454",
          marginHorizontal:20,
          height:50,
          alignItems:"center",
          justifyContent:"center",
          borderRadius:10
        }}
      >
        <Text style={{fontSize:20,fontWeight:"bold",color:"#fff"}}>Search</Text>
      </Pressable>
    </View>
    </View>
  );
}
