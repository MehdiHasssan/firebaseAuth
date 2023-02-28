import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const UpdateCar = ({route}) => {
  const [carname, setCarName] = useState(route.params.name || '');
  const [carId, setcarId] = useState(route.params.id || '');

  const handleUpdate = () => {
    console.warn('Not in work');
  };
  // console.log(route.params.id)
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', top: 100}}>
      <TextInput
        placeholder="Id"
        style={{
          borderBottomWidth: 1,
          backgroundColor: '#fff',
          width: '70%',
          marginHorizontal: 123,
          top: 13,
        }}
        value={carId.toString()}
        onChangeText={text => setcarId(text)}
      />
      <TextInput
        placeholder="Car name"
        style={{
          borderBottomWidth: 1,
          backgroundColor: '#fff',
          width: '70%',
          marginHorizontal: 123,
          top: 23,
        }}
        value={carname}
        onChangeText={text => setCarName(text)}
      />
      <View style={{top: 28}}>
        <TouchableOpacity
          onPress={handleUpdate}
          style={{
            backgroundColor: 'green',
            width: '100%',
            padding: 6,
            borderRadius: 12,
          }}
        >
          <Text
            style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateCar;

const styles = StyleSheet.create({});
