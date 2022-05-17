import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { QRCode } from 'react-native-custom-qr-codes-expo';
import { Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';

export default function ScanInfo({route, navigation}) {
    
  const {data} = route.params;
  let dataString = JSON.stringify(data);
  
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={require("./../assets/ampersand_white.png")} style={styles.headerImg} resizeMode="stretch" />
            <TouchableOpacity style={{position: "absolute" ,right: 10, top: 30, width: 23, height: 23}} 
              onPress={()=>navigation.navigate("ContactInfo", {data})}
            >
                <Ionicons name="person-add-outline" size={22} color="#fff" />
            </TouchableOpacity>
            
        </View>
        <View style={styles.body}>
            <View style={[styles.bodyView,{flex:2,  justifyContent: "flex-end"}]}>
                <Text style={{fontSize: 18}}>Exchange Contact Information</Text>
                <Text style={{fontSize: 18, marginTop: 10, color: "darkgrey"}}>Scan this QR below to share your contacts</Text>
            </View>
            <View style={{flex:4 , justifyContent: "center", alignItems:"center"}}>
                <QRCode content={dataString} logo={require('./../assets/goat.png')} style={{height: 240,width: 240}}/>
                {/* <QRCode codeStyle='square' style={{height: 240,width: 240}}/> */}
                {/* <Image source={{uri: "https://pngimg.com/uploads/qr_code/qr_code_PNG25.png"}} style={{height: 240,width: 240}} resizeMode="cover"/> */}
            </View>
            <View style={[styles.bodyView,{flex:2, }]}>
                <View style={{height: 70, width: "100%", flexDirection: "row", }}>
                    <Image style={{height: 70, width: 70, borderRadius: 50, marginRight: 15}} source={{uri:data.image}} />
                    <View style={{justifyContent: "space-around",paddingVertical:7}}>
                        <Text style={{fontSize: 17}}>{data.name}</Text>
                        <Text style={{fontSize: 17, color: "darkgrey"}}>{data.role}</Text>
                    </View>
                </View>
            </View>
            <View style={[,{flex:1,  paddingHorizontal:20,borderTopColor: "darkgrey", borderTopWidth: 1.2, justifyContent: "space-between", alignItems: "center", flexDirection: "row" }]}>
                <Text>Want to add a new connection?</Text>
                <TouchableOpacity style={styles.pressed} onPress={()=>navigation.navigate("Scanner",{data})}>
                    <Text style={{color: "#ef474f", textAlign: "center", fontSize: 14}}>Scan QR</Text>
                </TouchableOpacity>
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
  },
  btnPressed:{
    height: 35, 
    width: 100, 
    color: "white",
    borderRadius: 5, 
    borderWidth: 1.3, 
    backgroundColor: "#ef474f",
    borderColor: "#ef474f", 
    justifyContent: "center", 
    alignContent: "center"
  },
  pressed:{
      height: 35, 
      width: 100, 
      borderRadius: 5, 
      borderWidth: 1.3, 
      borderColor: "#ef474f", 
      justifyContent: "center", 
      alignContent: "center"
    },
  bodyView:{
      marginHorizontal: 20,
  },
  header:{
      position: "relative",
      width: "100%",
      backgroundColor: "#ef474f",
      height: 60,
      
      alignItems: 'center',
      flexDirection: "row",
      justifyContent: 'center',
    //   paddingTop: 25
  },
  headerImg:{
      marginTop: 18,
      width: "33%",
      height: 32,
  },
  body:{
      width: "100%",
      flex: 6.7,
  },
  inputView: {
      width: "100%",
      height: 40,
      marginVertical: 6,
    //   backgroundColor: "darkgrey",
      position: "relative",
  },
  
});
