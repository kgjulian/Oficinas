import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  function buttonPress() {

  }
  return (
    <View style={styles.container}>
      <View style={styles.loginForm}>
        <View style={styles.nameTitle}>
          <View style={styles.header}>
          <Text style={styles.headerText}>Log In</Text>
          </View>
          <Text>Usuario</Text>
          <TextInput onChangeText={newUserName => setUserName(newUserName)} style={styles.tyler}/>
          <Text>Password</Text>
          <TextInput secureTextEntry={true} onChangeText={newPassword => setPassword(newPassword)} style={styles.tyler}/>
          <Button onPress={buttonPress} title={'Iniciar Sesion'} style={styles.logIn}/>
        </View>
        <StatusBar style="auto" />
      {/* <View style={styles.} */}
      </View>
      
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
  loginForm: {
    borderRadius: 20,
    backgroundColor: 'white',
    // height:'22%',
    width: '70%',
    borderWidth: 1, 
    borderColor: 'lightgrey',
    shadowColor: "#000",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 8, 
  },
  tyler: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 2.4,
    paddingLeft: 7,
    borderRadius:6,
    marginBottom: 15,
  },
  nameTitle: {
    padding: 30,
  },
  header:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText:{
    fontWeight:'800',
    fontSize:22,
    paddingBottom:15
  },
})
