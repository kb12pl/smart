import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Picture from './picture'
import Layout from './layout'
import Flex  from './flex'

const Stack = createNativeStackNavigator();

const ButtonGoTo=({label,navigation})=>{
  return (
    <View style={{margin:20}}>
    <Button title={label} onPress={() => {navigation.navigate(label);}}/>      
    </View>
  );
}

const Home=({ navigation })=>{    
  return (      
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,
    flexDirection:"column",padding:10 }}>    
      <ButtonGoTo label="Picture" navigation={navigation}/>      
      <ButtonGoTo label="Flex" navigation={navigation}/>      
      <ButtonGoTo label="Layout" navigation={navigation}/>      
    </View>      
  );
}

const options=({navigation})=> ({    
  headerRight: () => (
    <View>
    <Button title="Home" onPress={()=>navigation.navigate(Home)}   />        
    </View>
  ),
})


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