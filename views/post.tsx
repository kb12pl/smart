import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableOpacity, Text} from 'react-native';

export default class Post extends Component {
  
  async componentDidMount() {
    // await this.postData('Post Sample')
  }
  
  postData = async(str) => {
    try {
      let res = await fetch('https://postman-echo.com/post', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          str,
        }),
      });
      res = await res.json();
      console.log(res)
      //Alert.alert('onPress', res.json.str);
    } catch (e) {
      console.error(e);
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.postData('POST Button Click')} style={{ padding: 20, backgroundColor: 'yellow' }}>
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: "center",
    alignItems: "center",
  },
});
