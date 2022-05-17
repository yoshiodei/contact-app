import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContactInfo from './src/ContactInfo';
import ScanInfo from './src/ScanInfo';
import Register from './src/Register';
import Home from './src/Home';
import Main from './src/Main';
import SignIn from './src/SignIn';
import BarcodeScanner from './src/BarcodeScanner';
// import ImagePickerEg from './src/ImagePicker';

 const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>

         <Stack.Navigator>
              <Stack.Screen name="Home" component={Home} 
                options={{
                  
                  headerShown:false,
                  
                  }}
              /> 
              <Stack.Screen name="Main" component={Main}
                options={{
                  headerBackTitleVisible: false,
                  title: "",
                  headerTransparent: true,
                  headerTintColor: "white",
                }}
              />
               <Stack.Screen name="SignIn" component={SignIn} 
                  options={{
                    headerBackTitleVisible: false,
                    title: "",
                    headerTransparent: true,
                    headerTintColor: "white",
                  }}
               />
               <Stack.Screen name="Register" component={Register} 
                  options={{
                    headerBackTitleVisible: false,
                    title: "",
                    headerTransparent: true,
                    headerTintColor: "white",
                  }}
               />    
               <Stack.Screen name="ScanInfo" component={ScanInfo} 
                options={{
                  headerBackTitleVisible: false,
                  title: "",
                  headerTransparent: true,
                  headerTintColor: "white",
                }}
               />     
               <Stack.Screen name="ContactInfo" component={ContactInfo} 
                options={{
                  headerBackTitleVisible: false,
                  title: "",
                  headerTransparent: true,
                  headerTintColor: "white",
                }}
               />
               <Stack.Screen name="Scanner" component={BarcodeScanner}
                options={{
                  headerBackTitleVisible: false,
                  title: "",
                  headerTransparent: true,
                  headerTintColor: "white",
                }}
                />
         </Stack.Navigator>    
          
       </NavigationContainer> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
})

