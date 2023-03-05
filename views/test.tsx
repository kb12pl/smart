import React, { Component  } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';

import {kb} from "../kb"



export default class Post extends Component {
  
  async componentDidMount() {
     //await this.postData('Post Sample')
  }
  state={text:"123"}
  

  postData = (str) => {      
    

    

  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.postData('POST Button Click')} style={{ padding: 20, backgroundColor: 'yellow' }}>
          <Text>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>this.setState({text:123 })}>
          <Text>Clear</Text>
        </TouchableOpacity>
        <Text style={styles.text}>  {this.state.text}     </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ecf0f1',    
    
  },
  button: {
    padding: 20,
    backgroundColor: 'yellow'      
  },
  text: {
    flex: 1,
    backgroundColor: '#ecffff',    
  },
});
