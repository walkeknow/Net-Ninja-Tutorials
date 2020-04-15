import React, {useState} from 'react';
import Home from './screens/home'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import Navigator from './routes/drawer'

const getFonts = () => Font.loadAsync({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-bold': require('./assets/fonts/Poppins-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator></Navigator>
    );
  } else {
    return (
      <AppLoading 
      startAsync={getFonts}
      onFinish={()=>setFontsLoaded(true)}>
      </AppLoading>
    )}
}