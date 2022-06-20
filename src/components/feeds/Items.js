import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';



function Item({ item }) {
  return (

    <TouchableOpacity style={[tw`flex flex-row bg-white h-28 mb-2 mr-2 ml-2 rounded-xl shadow-md`]}>
      <Image
        style={tw`w-28 rounded-l-xl m-2`}
        source={{ uri: 'https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg' }}
      />
      <View style={tw`justify-center`} >
        <Text style={tw`text-base font-bold mb-3`}>{item.title}</Text>
        <View style={tw`flex-row`}>
          <Icon name='thumbs-up' size={20} color='#ccc'>
            <Text style={tw`text-base`}>
              Likes {item.likes}
            </Text>
          </Icon>
          <Text style={tw`text-base font-bold ml-5`}>{item.price}/Person</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Item;