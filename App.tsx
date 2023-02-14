import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { Picture  } from './kb/picture'
import Layout from './kb/layout'
import Flex  from './kb/flex'

const Stack = createNativeStackNavigator();

const ButtonGoTo=({label,navigation})=>{
  return (
    <Button title={label} onPress={() => {navigation.navigate(label);}}/>      
  );
}

const Home=({ navigation })=>{    
  return (      
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>    
      <ButtonGoTo label="Picture" navigation={navigation}/>      
      <ButtonGoTo label="Flex" navigation={navigation}/>      
      <ButtonGoTo label="Layout" navigation={navigation}/>      
    </View>      
  );
}

const options={    
  headerRight: () => (
    <View>
    <Button onPress={() => alert('This is a button!')} title="Info" color="#fff"  />        
    </View>
  ),
}


function App() {  
  return (        
    <NavigationContainer>            
      <Stack.Navigator>                
        <Stack.Screen name="Home" component={Home}  />
        <Stack.Screen name="Picture" component={Picture} options={options}/>
        <Stack.Screen name="Flex" component={Flex} options={options}/>
        <Stack.Screen name="Layout" component={Layout} options={options}/>
      </Stack.Navigator>      
    </NavigationContainer>
  );
}

export default App;