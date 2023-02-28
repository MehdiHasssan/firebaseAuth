import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'

const UpdateCar = ({route}) => {
    const [carname, setCarName] = useState(route.params.name || '')
    const [carId, setcarId] = useState(route.params.id || '')
    // console.log(route.params.id)
  return (
    <View style={{alignItems:'center',justifyContent:'center',top:100}}>
      <TextInput 
      placeholder='Id' 
      style={{
        borderBottomWidth:1,
         backgroundColor:'#fff',
         width:'70%',
         marginHorizontal:123,
         top:13}} 
         value={carId.toString()}
          onChangeText={(text)=>setcarId(text)}
          />
      <TextInput 
      placeholder='Car name' style={{borderBottomWidth:1,backgroundColor:'#fff',width:'70%',marginHorizontal:123,top:23}} value={carname} onChangeText={(text)=>setCarName(text)}/>
    </View>
  )
}

export default UpdateCar

const styles = StyleSheet.create({})