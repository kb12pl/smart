import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './kb/home'
import { Picture  } from './kb/picture'



const Stack = createNativeStackNavigator();

function App() {  
  return (        
    <NavigationContainer>            
      <Stack.Navigator>                
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Picturer" component={Picture} />
      </Stack.Navigator>      
    </NavigationContainer>

  );
}

export default App;