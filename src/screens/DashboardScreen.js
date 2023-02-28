import {StyleSheet, Text, View, TouchableOpacity, FlatList,TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AuthCredential, FacebookAuthProvider, getAuth, signOut} from 'firebase/auth';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';
import firebase, {auth} from './firebase'
import  Firestore  from "firebase/firestore";


const DashboardScreen = ({navigation,route}) => {
  const [apiData, setApiData] = useState('');
  const [CarName, setCarName] = useState('')
  const [Id, setId] = useState('')
  

  const handleDelete =async()=>{
    const Car_Name = doc(db, 'Car', '55');

    // Remove the 'capital' field from the document
    await updateDoc(Car_Name, {
        Car_Name: deleteField()
    });
  }

  // console.log(auth.uid)
  // const handleUpdate =()=>{
  //   console.log()
  // }d
 console.log(firebase.auth.currentUser.uid,'useriddddddddddddddddd')
  

  useEffect(()=>{
    const ReadData =async()=>{
      const docRef = Firestore.collection();
      
      const docSnap = await Firestore.getDoc(docRef);
      if (docSnap.exists()) {
        const carData = docSnap.data();
        // Use `carData` to display the data from the `Car` document
        console.log(carData)
      }

    }
    ReadData()

  },[])

  const resgisterCar =async()=>{
    const docRef = await addDoc(collection(db, 'Car'), {
      Car_Name: 'My Car',
      // id : '12'
    });
    const docId = docRef.id;
    console.log(docId)
  }
  

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('logout');
        setTimeout(() => {
          navigation.navigate('login');
        }, 1500);
      })
      .catch(error => {
        // An error happened.
        console.log(error.message);
      });
  };

  const fetchApiData = () => {
    fetch('https://carapi.app/api/makes')
      .then(response => response.json())
      .then(json => {
        setApiData(json.data);
      });
  };
  useEffect(() => {
    fetchApiData();
  }, []);
  // console.log(apiData);


 

  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          top: 23,
          fontWeight: 'bold',
          fontSize: 23,
          color: 'green',
        }}
      >
        DashboardScreen
      </Text>

      <View style={{top: 100}}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Row>
              <Text>ID</Text>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{left:22}}>Car_Name</Text>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{left:52}}>Update</Text>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{left:52}}>Delete</Text>
            </DataTable.Row>
          </DataTable.Header>
          <View>
            <FlatList
              data={apiData}
              keyExtractor={item => item.id}
              renderItem={item => (
                <View style={{paddingBottom:44}}>
                  <DataTable.Row>
                    <DataTable.Cell style={{left:21}}>{item.item.id}</DataTable.Cell>
                    <DataTable.Cell style={{right:77}}>{item.item.name}</DataTable.Cell>
                    <View style ={{right:53,justifyContent:'space-around',flexDirection:'row',top:14}}>
                      <TouchableOpacity  onPress={()=> navigation.navigate('updatecar',{
                      id:item.item.id,
                      name:item.item.name
                      })}>
                      <Icon name = "edit" size={22} right={32}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={resgisterCar}> 
                      <Icons name = "delete" size={22} color='red' left={21} />
                      </TouchableOpacity>
                    </View>
                   

                  </DataTable.Row>

                </View>
              )}
            />
          </View>
        </DataTable>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', top: 23}}>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: 'green',
            width: '65%',
            padding: 6,
            borderRadius: 12,
            // paddingBottom:34
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 13,
              color: '#fff',
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
