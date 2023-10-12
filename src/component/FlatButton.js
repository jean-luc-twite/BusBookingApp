import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'

const FlatButton = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style ={styles.button}>
      <Text style={styles.ButtonText}>{text}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default FlatButton

const styles = StyleSheet.create({
  button:{
    padding:10,
    borderRadius:8,
    paddingVertical:14,
    paddingHorizontal:10,
    backgroundColor:'#F5A522',
    borderWidth: 1,
    bottom:170,
    width:200
  },
  ButtonText: {
    color:'white',
    fontWeight:'bold',
    textTransform:'uppercase',
    textSize:16,
    textAlign:'center',
    fontSize:18,

  }
})