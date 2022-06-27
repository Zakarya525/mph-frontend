import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, FlatList, StyleSheet, View, Button } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import Item from '../components/feeds/Items';
import Search from '../components/filters/Search';



const items = [
  {
    id: uuidv4(),
    title: 'Karachi Biryani',
    price: '$79',
    likes: '332'
  },
  {
    id: uuidv4(),
    title: 'Kabali Piloa',
    price: '$44',
    likes: '332K'
  },
  {
    id: uuidv4(),
    title: 'Chicken Karhahi',
    price: '$30',
    likes: '23K'
  },
  {
    id: uuidv4(),
    title: 'Super Data',
    price: '$20',
    likes: '33K'
  },
  {
    id: uuidv4(),
    title: 'Pist Achar',
    price: '$3',
    likes: '3K'
  },
  {
    id: uuidv4(),
    title: 'Meamy Dipper Keer',
    price: '$8',
    likes: '32K'
  },
  {
    id: uuidv4(),
    title: 'Grills',
    price: '$80',
    likes: '52K'
  },
  {
    id: uuidv4(),
    title: 'Lamb Karahi',
    price: '$80',
    likes: '500K'
  },
  {
    id: uuidv4(),
    title: 'Poor Nahsa',
    price: '$45',
    likes: '3K'
  },
  {
    id: uuidv4(),
    title: 'Jalparazi',
    price: '$79',
    likes: '7K',
  },
  {
    id: uuidv4(),
    title: 'Jalparazi',
    price: '$79',
    likes: '7K',
  }
];

export default function Feeds({ navigation }) {
  const [newItems, setNewItems] = useState(items);

  const searchFood = (text) => {
    if (text) {
      const newItems = items.filter(item => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setNewItems(newItems);
    } else {
      setNewItems(items);
    }
  };

  return (

    <View style={style.container}>
      <Search value="Search Foods" searchFood={searchFood} />
      <FlatList
        data={newItems}
        renderItem={({ item }) => <Item item={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );

}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    paddingTop: 50
  }
}
)

