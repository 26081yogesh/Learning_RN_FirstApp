import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Pressable} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.defaultText}>Hello My Name is Yogesh Yadav</Text>
        <Pressable
          style={styles.btn}
          onPress={() => {
            console.log('Button is Pressed');
          }}>
          <Text style={styles.btnText}>Press</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {backgroundColor: '#000000', height: '100%'},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  defaultText: {fontSize: 20, fontWeight: 'bold', color: '#ffffff'},
  btn: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 10,
    fontWeight: 'bold',
    marginTop: 10,
  },
  btnText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
