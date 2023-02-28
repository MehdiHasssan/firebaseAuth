import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  getAuth,
  signOut,
} from 'firebase/auth';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialIcons';


const DashboardScreen = ({navigation, route}) => {
  const [apiData, setApiData] = useState('');

  const handleDelete = async () => {
    console.warn('Not in work')
  };


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

      <View style={{justifyContent: 'flex-end', alignItems: 'flex-end',top:43,right:23}}>
        <TouchableOpacity
          onPress={handleLogout}
          style={{
            backgroundColor: 'green',
            width: '35%',
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

      <View style={{top: 100}}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Row>
              <Text>ID</Text>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{left: 22}}>Car_Name</Text>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{left: 52}}>Update</Text>
            </DataTable.Row>
            <DataTable.Row>
              <Text style={{left: 52}}>Delete</Text>
            </DataTable.Row>
          </DataTable.Header>
          <View>
            <FlatList
              data={apiData}
              keyExtractor={item => item.id}
              renderItem={item => (
                <View style={{paddingBottom: 44}}>
                  <DataTable.Row>
                    <DataTable.Cell style={{left: 21}}>
                      {item.item.id}
                    </DataTable.Cell>
                    <DataTable.Cell style={{right: 77}}>
                      {item.item.name}
                    </DataTable.Cell>
                    <View
                      style={{
                        right: 53,
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                        top: 14,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('updatecar', {
                            id: item.item.id,
                            name: item.item.name,
                          })
                        }
                      >
                        <Icon name="edit" size={22} right={32} />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={handleDelete}>
                        <Icons name="delete" size={22} color="red" left={21} />
                      </TouchableOpacity>
                    </View>
                  </DataTable.Row>
                </View>
              )}
            />
          </View>
        </DataTable>
        
      </View>

      
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
