import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button,  Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function Register({navigation}) {

    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [location, setLocation] = useState("");
    const [role, setRole] = useState("");
    const [twitter, setTwitter] = useState("");
    const [linkedin, setLinkedin] = useState("");

    const data = {image, name, email, phone, role, twitter, linkedin, password, location};

    const handlePress = () => {
            if(image && name && email && phone && role && twitter && linkedin && password && location)
            { navigation.navigate('ScanInfo', {data})}
            }

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
      
  return (
    <KeyboardAwareScrollView>  
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{fontSize: 20, color: "white", letterSpacing: 2.5, marginTop: 25}}>Register</Text>
        </View>
        <View style={styles.body}>
           <View style={{width: "100%", height: 170, backgroundColor: "#ebeaea",justifyContent:"center", alignItems:"center", position: "relative"}} >
                    {image &&  <TouchableOpacity style={styles.editBtn} onPress={pickImage}><Text
                    style={{color: "white", textAlign: "center", fontWeight: "bold"}}
                    >EDIT PHOTO</Text></TouchableOpacity>}
                    {image && <Image source={{ uri: image }} style={{ width: "100%", height: 170, position: "absolute", top: 0, left: 0, zIndex: 3 }} />}
                    <TouchableOpacity onPress={pickImage} style={{width: 200, height: 120,justifyContent:"center", alignItems:"center" }}>
                        <Ionicons name="person-add-outline" size={60} color="#ef474f" />
                        <Text style={{marginTop: 6, fontSize: 10, fontWeight: "bold", color: "#ef474f", }}>ADD PROFILE PHOTO</Text>
                    </TouchableOpacity>

           </View>
           <View style={{flex:1, padding: 15, }}>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>Full Name</Text>
                   <TextInput onChangeText={(text)=>setName(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="Yoshi Odei"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>Email</Text>
                   <TextInput onChangeText={(text)=>setEmail(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, 
                   borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="yoshi.odei@mail.com"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>Password</Text>
                   <TextInput secureTextEntry onChangeText={(text)=>setPassword(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, 
                   borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="choose a strong password"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>Phone Number</Text>
                   <TextInput onChangeText={(text)=>setPhone(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="057-294-0523"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>Location</Text>
                   <TextInput onChangeText={(text)=>setLocation(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="Accra, Ghana"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>Role</Text>
                   <TextInput onChangeText={(text)=>setRole(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="Human Resource Manager"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>Twitter</Text>
                   <TextInput onChangeText={(text)=>setTwitter(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="@kvzu_"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 5, left: 7 , fontSize: 14}}>LinkedIn</Text>
                   <TextInput onChangeText={(text)=>setLinkedin(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="/yoshiodei"/>
               </View>

               <TouchableOpacity style={styles.RegisterBtn} onPress={handlePress}>
                   <Text style={{fontSize: 18, color: "#fff", letterSpacing: 4}}>REGISTER</Text>
               </TouchableOpacity>
           </View>
        </View>
    </View>
    </KeyboardAwareScrollView>
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
  editBtn:{
      borderWidth: 1.5,
      borderColor: "white",
      height: 28,
      width: 120,
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      zIndex: 4,
      borderRadius: 4,
      backgroundColor: "#06060659",
  },
  RegisterBtn:{
    justifyContent: "center",
    alignItems: "center",  
    width: "100%",
    height: 50,
    backgroundColor: "#ef474f",
    marginTop: 15,
    borderRadius: 4,
  },
  header:{
      width: "100%",
      height: 60,
      backgroundColor: "#ef474f",
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    //   paddingTop: 25
  },
  body:{
      width: "100%",
      flex: 6.7,
  },
  inputView: {
      width: "100%",
      height: 33,
      marginVertical: 4,
    //   backgroundColor: "darkgrey",
      position: "relative",
  },
  
});
