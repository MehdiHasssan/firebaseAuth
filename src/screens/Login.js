import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from './firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loggedId, setLoggedId]= useState('')
  

  // console.log(loggedId,'from login screen')

  const handleLoginScreen = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const uid = user.uid
        // setLoggedId(uid)
        // console.log(uid)
        // ...
        setMessage('Login Successfully')
        setTimeout(()=>{
          navigation.navigate('dashboard',{
            uid:uid
          })
          setMessage('')
          setEmail('')
          setPassword('')
        },1000)
        // console.log(user,'login successfully')
      })
      .catch((error) => {
        setMessage(error.message)
        setTimeout(()=>{
          setMessage('')
          navigation.navigate('')
        },2000)
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };

  return (
    <View style={{marginTop: 43}}>
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'green',
          fontSize: 23,
        }}
      >
        Login
      </Text>
      <Text style={{ color: message === "Login Successfully" ? 'green':'red',fontWeight:'bold',left:23}}> {message} </Text>
      <View style={styles.input}>
        <View style={styles.textInput}>
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.textInput}>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="password"
            secureTextEntry={true}
          />
        </View>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center', top: 23}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            width: '65%',
            padding: 6,
            borderRadius: 12,
          }}
          onPress={handleLoginScreen}
        >
          <Text
            style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{top: 32}}>
        <Text style={{color: 'gray', textAlign: 'center'}}>
          {' '}
          Create an Account ?
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{color: 'green'}}>SignUp</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    marginHorizontal: 23,
    alignItems: 'center',
  },
  textInput: {
    borderBottomWidth: 1,
    padding: 1,
    top: 10,
    width: '100%',
    backgroundColor: '#fff',
    margin: 6,
    height: 38,
    borderRadius: 7,
  },
});

export default Login;
