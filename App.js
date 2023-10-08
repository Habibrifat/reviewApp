import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { useState, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ReviewScreen from './screens/ReviewScreen';
import Home from './screens/home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from './shared/header';
import About from './screens/about';



// SplashScreen.preventAutoHideAsync();

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {

  // const [isLoaded] = useFonts({
  //   'Poppins': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
  //   'Nunito': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
  //   'Dancing': require('./assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf'),
  // });

  // const handleOnLayout = useCallback(async () => {
  //   if (isLoaded) {
  //     await SplashScreen.hideAsync(); //hide the splashscreen
  //   }
  // }, [isLoaded]);

  // if (!isLoaded) {
  //   return null;
  // }

  return(
    <>
    {/*onLayout={handleOnLayout}  */}
    {/* <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"  component={Home} options={{
          title: 'Home',
          headerTitleStyle: headerStyles.headerTitleStyle,
        }} />
        <Stack.Screen name="Review" component={ReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer> */}

    {/* <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer> */}
    <NavigationContainer>
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={ Home } options={{
          title: 'Home',
          // headerTitleStyle: ()=>{ <Header/>},
          headerTitleStyle: headerStyles.headerTitleStyle,
        }} />
         <Drawer.Screen name="Review" component={ ReviewScreen } />
         <Drawer.Screen name="About" component={ About } />
      </Drawer.Navigator>
   </NavigationContainer>

  </>
  )
}

const styles = StyleSheet.create({
  //  container:{
  //       padding:10,
  //   },
  //   title:{
  //       fontFamily: 'Poppins',
  //       fontSize:32,
  //       textAlign:"center"
  //     }
})
const headerStyles = StyleSheet.create({
  headerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor:'red',
  },
  headerTitleStyle: {
    // fontFamily: 'Poppins',
    fontSize: 32,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor:'#eee',
    
  },
});