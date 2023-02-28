import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Signup = ({navigation}) => {
  const [displayName,setDisplayName ] =useState('');
  // const [lname,setLName ] =useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confpassword, setConfPassword] = useState('');
  const [ermessage, setErmessage] =useState(false)
  const [passmessage,setpassMessage]= useState('');

  const handleSignUpScreen = () => {
    const auth = getAuth();
    if(password === confpassword ){
      createUserWithEmailAndPassword(auth, email, password,displayName)
      .then((userCredential) => {
        // Signed in 
        console.log(userCredential,'userCredential')
        const user = userCredential.user.toJSON();
        // ...
        console.log(user.providerData,'kkkk')
        setErmessage('Register Succuessfully')
        setTimeout(()=>{
          navigation.navigate('login')
          setErmessage('')
        },2000)
      })
      .catch((error) => {
        setErmessage(error.message)
        setTimeout(()=>{
          setErmessage('')
        },2000)
        const errorCode = error.code;
    
        const errorMessage = error.message;
        // ..
      });
    }else {
      setpassMessage('password and confpass is not matched')
      setTimeout(()=>{
        setpassMessage('')
      },2000)
    }  


  }
  return (
    <View>
      <View style={{top: 43}}>

        <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'green',fontSize:23}}>
          SignUp
        </Text>
      <Text style ={{top:5, color: ermessage ==='Register Succuessfully' ? 'green': 'red',fontSize:13,fontWeight:'bold',left:27}}>{ermessage}</Text>

        <View style={styles.input}>
        <View style={styles.textInput}>
            <TextInput
              placeholder="Name"
              value={displayName}
              onChangeText={setDisplayName}
            />
          </View>
          
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
          <View style={styles.textInput}>
            <TextInput
              value={confpassword}
              onChangeText={setConfPassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>
          <Text style ={{top:12, color:'red',fontSize:13,fontWeight:'bold'}}>{passmessage} </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center', top: 23}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'green',
              width: '65%',
              padding: 6,
              borderRadius: 12,
            }}
            onPress={handleSignUpScreen}
          >
            <Text
              style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}
            >
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
     
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  input:{
    justifyContent:"center",
    alignItems:'center',
    marginHorizontal:23,


  },
  textInput:{
    borderBottomWidth:1,
    padding:1,
    top:10,
    width:'100%',
    backgroundColor:'#fff',
    margin:6,
    height:38,
    borderRadius:7
  }
});
