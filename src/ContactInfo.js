import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ContactInfo({route}) {

  const {data} = route.params;
  let dataString = JSON.parse(data)

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{fontSize: 20, color: "white", letterSpacing: 2.5, marginTop: 25}}>My Profile</Text>
        </View>
        <View style={styles.body}>
            <View style={{height: 80, width: "100%", flexDirection: "row", marginBottom: 20}}>
                <Image style={{height: 80, width: 80, borderRadius: 50, marginRight: 15, }} source={{uri: dataString.image }} />
                <View style={{justifyContent: "space-around",paddingVertical:8}}>
                    <Text style={{fontSize: 17}}>{dataString.name}</Text>
                    <Text style={{fontSize: 17, color: "darkgrey"}}>{dataString.role}</Text>
                </View>
            </View>
           <View style={styles.row}>
             <Entypo name="twitter-with-circle" size={35} color="black" style={{marginRight: 15}} />
             <Entypo name="linkedin-with-circle" size={35} color="black" />
           </View>
           <View style={[styles.row, styles.info]}>
                <Feather name="phone" size={22} color="black" style={{marginRight: 8}}/>
                <Text>{dataString.phone}</Text>
           </View>
           <View style={[styles.row,styles.info]}>
                <Feather name="mail" size={22} color="black" style={{marginRight: 8}}/>
                <Text>{dataString.email}</Text>
           </View>
           <View style={[styles.row,styles.info]}>
                <Ionicons name="ios-location-outline" size={22} color="black" style={{marginRight: 8}} />
                <Text>{dataString.location}</Text>
           </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: '#f4f5f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info:{
      height: 30,
      width: "100%",
      alignItems: "center",
  },
  row: {
    flexDirection: "row",  
    marginBottom: 20,

  },
  header:{
      width: "100%",
      backgroundColor: "#ef474f",
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
    //   paddingTop: 25
  },
  body:{
      paddingTop: 50,
      paddingHorizontal: 20,
      width: "100%",
      flex: 6.7,
  },
});
