
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Main({navigation}) {
  return (
    <View style={styles.containerMain}>
        <View style={styles.imgView}>
           <Image resizeMode="stretch" source={require("./../assets/mainImg.jpg")} style={styles.img} /> 

        </View>
        <View style={styles.main}>
            <Text style={styles.textTop}>KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND</Text>
            <Text style={styles.textBottom}>Sign in or register with your Ampersand email</Text>
            <View style={styles.subMain}>
              <View style={{flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20}}>
                <TouchableOpacity style={styles.innerTextBtn}
                  onPress={()=> navigation.navigate("Register")}
                >
                  <Text style={styles.innerText}>REGISTER</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.innerTextBtn}
                  onPress={()=> navigation.navigate("SignIn")}
                >
                  <Text style={styles.innerText}>SIGN IN</Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    width: "100%",
    flex: 1,
    backgroundColor: '#f4f5f0',
  },
  innerTextBtn:{
    borderBottomColor: "red",
    borderBottomWidth: 2,
    minWidth: 80,
  },
  innerText:{
    textAlign: "center",
    fontSize: 18,
    marginBottom: 5,
  },
  img: {
      width: "100%",
      height: "100%",
      
  },
  subMain:{
    paddingBottom: 25,
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
  },
  imgView:{
    width: "100%",
    flex: 8,
    backgroundColor: 'lightgrey',
  },
  main: {
    flex: 5,
    width: "100%",
    padding: 15,
    
  },
  textTop:{
      fontSize: 17,
      letterSpacing: 1,
      marginBottom: 8, 
  },
  textBottom:{
    letterSpacing: 1,
    color: "grey",
  }
});
