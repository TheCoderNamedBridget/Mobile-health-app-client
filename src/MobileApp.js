import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native';
import {Alert} from 'react-native';
//import socketIOClient from "socket.io-client";
//import {express} from 'react-native-elements';

export default function MobileApp() {
  const [value, onChangeText] = React.useState('Enter App Name');
  //var client = App;
  return (
    <View style={styles.container}>
      <Text>Mobile Health Application Security</Text>
      <Button title = 'Search' icon={{name: 'code'}}
      onPress={() => Alert.alert('Search Button Pressed')}/>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
