
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.logoView}>
          <Image resizeMode="stretch" source={require("./../assets/ampersand.png")} style={styles.img} />
        </View>
        <View style={styles.titleView}>
           <Text style={styles.titleTop}>AMPERSAND</Text>
           <Text style={styles.titleBottom}>CONTACTS</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity activeOpacity="0.5" style={
            {
              paddingVertical: 6, 
              borderBottomWidth: 2,
              borderBottomColor: "red",
            }
          }

          onPress={()=> navigation.navigate("Main")}
          
          >
            <Text style={styles.btnText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: "60%",
    height: 55,
  },
  logoView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "pink"
  },
  titleView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    // backgroundColor: "hotpink"
  },
  btnView: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    // backgroundColor: "pink"
  },
  titleTop:{
    fontSize: 18,
    letterSpacing: 1.5,
    marginBottom: 7,
  },
  titleBottom:{
    fontSize: 18,
    letterSpacing: 1.5,
  },
  btnText: {
    fontSize: 16,
    
    }
});
