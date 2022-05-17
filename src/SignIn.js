
import React, {useState} from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignIn({navigation}) {

 const user = {email: "messi@mail.com", password: "123456789"}
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 let data = {
   name: "Lionel Messi",
   image: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564",
   email: "messi@mail.com",
   location: "Paris, France",
   role: "GOAT",
   phone: "0266-419-419"
 }



 const handleSignIn = () =>{
   if(email == user.email && password == user.password){
     navigation.navigate("ScanInfo", {data})
   }
   else{
    alert(`This user cannot be identifed!!!`);
    setEmail("");
    setPassword("");
   }
 }


  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{fontSize: 20, color: "white", letterSpacing: 2.5, marginTop: 25}}>Sign In</Text>
        </View>
        <View style={styles.body}>
           <Image source={require("./../assets/lounge.jpg")} style={{width: "100%", height: 200, backgroundColor: "grey",}} />
           <View style={{flex:1, paddingHorizontal: 15, paddingTop: 80 }}>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 9, left: 7 , fontSize: 18}}>Email</Text>
                   <TextInput onChangeText={(text)=>setEmail(text)} style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}} placeholder="yoshi.odei@mail.com"/>
               </View>
               <View style={styles.inputView}>
                   <Text style={{position: "absolute", top: 9, left: 7, fontSize: 18}}>Password</Text>
                   <TextInput onChangeText={(text)=>setPassword(text)} secureTextEntry style={{width: "100%", height: "100%", textAlign: "right", paddingRight: 10, borderBottomWidth: 1.5, borderBottomColor: "lightgrey"}}/>
               </View>
              
               <TouchableOpacity style={styles.signInBtn} onPress={handleSignIn}>
                   <Text style={{fontSize: 18, color: "#fff", letterSpacing: 4}}>SIGN IN</Text>
               </TouchableOpacity>
               
               <View style={{marginTop: 20, flexDirection: "row",}}>
                   <Text>Forgot? </Text>
                   <TouchableOpacity style={{borderBottomColor: "#ef474f", borderBottomWidth: 1.5}}>
                      <Text style={{paddingBottom: 5}}>Rest Password</Text>
                   </TouchableOpacity>
               </View>
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
  signInBtn:{
    justifyContent: "center",
    alignItems: "center",  
    width: "100%",
    height: 50,
    backgroundColor: "#ef474f",
    marginTop: 5,
    borderRadius: 4,
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
      width: "100%",
      flex: 6.7,
  },
  inputView: {
      width: "100%",
      height: 40,
      marginVertical: 10,
    //   backgroundColor: "darkgrey",
      position: "relative",
  },
  
});
