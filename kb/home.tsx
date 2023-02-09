import React from 'react';
import {Alert,  View, Text,Button } from 'react-native';

export function Home({ navigation }) {    
    return (      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to 12"
          onPress={() => {navigation.navigate('Picture'); console.log(123);}}
        />        
      </View>      
    );
  }