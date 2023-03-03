import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Test  from './test'
import Picture from './picture'
import Post  from './post'
import todo from '../todo/todo' 

const values={Todo:todo,Picture:Picture,Post:Post,Test:Test}

const Stack = createNativeStackNavigator();

const ButtonGoTo=({label,navigation})=>{
  return (
    <View style={{margin:20}}>
    <Button title={label} onPress={() => {navigation.navigate(label);}}/>      
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


const Home=({ navigation })=>{    
  return (      
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,
    flexDirection:"column",padding:10 }}>        
    {
    Object.keys(values).filter(val=>val!='Home').map(val=>(<ButtonGoTo key={val} label={val} navigation={navigation}/> ))  
    }        
    </View>      
  );
}


function App() {  
  return (        
    <NavigationContainer>            
      <Stack.Navigator>     
        <Stack.Screen name="Home" component={Home}/>
        {
        Object.entries(values).map(([key,val])=>(<Stack.Screen key={key} name={key} component={val}  options={ key!='Home'  && options }  />))
        }
      </Stack.Navigator>      
    </NavigationContainer>
  );
}



export default App;