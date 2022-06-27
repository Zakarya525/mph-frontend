import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';

function FoodDetails({ image }) {
  return (

    <View style={styles.card} >
      <Text style={tw`text-base font-bold mb-3`}>{image.title}</Text>
      <View style={tw`flex-row`}>
        <Icon name='thumbs-up' size={20} color='#ccc'>
          <Text style={tw`text-base`}>
            Likes {image.likes}
          </Text>
        </Icon>
        <Text style={tw`text-base font-bold ml-5`}>{image.price}/Person</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 270,
    height: 100,
    marginTop: -80,
    marginStart: 43,
    marginEnd: 30,
    borderRadius: 15,
    elevation: 8
  }
})

export default FoodDetails;