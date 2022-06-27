import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts, Inter_300Light } from '@expo-google-fonts/inter';
import { v4 as uuidv4 } from 'uuid';
import FoodDetails from '../components/FoodDetails';
import Item from '../components/feeds/Items';


const images = [
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

const mealType = [
  {
    id: uuidv4(),
    name: 'Breakfast',
    icon: 'weibo'
  },
  {
    id: uuidv4(),
    name: 'Lunch',
    icon: 'tachometer'
  },
  {
    id: uuidv4(),
    name: 'Dinner',
    icon: 'cutlery'
  },
  {
    id: uuidv4(),
    name: 'Desart',
    icon: 'coffee'
  },
  {
    id: uuidv4(),
    name: 'Burger Cheese',
    icon: 'empire'
  },
  {
    id: uuidv4(),
    name: 'Rost Meat',
    icon: 'birthday-cake'
  },
  {
    id: uuidv4(),
    name: 'Melon Slice',
    icon: 'life-bouy'
  },
  {
    id: uuidv4(),
    name: 'Melon Slice',
    icon: 'life-bouy'
  },
  {
    id: uuidv4(),
    name: 'Melon Slice',
    icon: 'life-bouy'
  },
  {
    id: uuidv4(),
    name: 'Melon Slice',
    icon: 'life-bouy'
  },
  {
    id: uuidv4(),
    name: 'Melon Slice',
    icon: 'life-bouy'
  },
]

const Home = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.headingLarge}>Platter</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {images.map((image) => {
          return (

            <View key={image.id}>
              <Image style={tw`w-80 h-48 m-5 rounded-xl`}
                source={require('../../Images/food2.jpg')}
              />
              <FoodDetails style={styles.card} image={image} />
            </View>

          )
        })}
      </ScrollView>

      <Text style={styles.headingMedium}>Meal Type</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {mealType.map((meal) => {
          return (
            <View style={tw`justify-center items-center m-2 shadow-md`}>
              <View key={meal.id} style={styles.mealTypeView}>
                <Icon name={meal.icon} size={30} color='orange' />
              </View>
              <Text style={styles.mealTypeText}>{meal.name}</Text>
            </View>
          )
        })}
      </ScrollView>

      <View style={tw`flex-row justify-between`}>
        <Text style={styles.headingMedium}>Popular Items</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Feeds", { screen: 'PopularItems' })}
        ><Text style={{ color: 'orange', marginTop: 10, marginEnd: 10, fontWeight: 'bold' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>

        <ScrollView style={tw`h-64`}>
          {images.map((item) => {
            return (
              <Item key={item.id} item={item} />
            )
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>

  )
}

const styles = StyleSheet.create({
  headingLarge: {
    fontWeight: 'bold',
    fontSize: 25,
    fontFamily: 'normal',
    marginTop: 40,
    marginStart: 10
  },

  headingMedium: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'normal',
    marginTop: 10,
    marginStart: 10,
    marginBottom: 5
  },

  card: {
    backgroundColor: '#fff',
    width: 270,
    height: 100,
    marginTop: -80,
    marginStart: 43,
    marginEnd: 30,
    borderRadius: 15,
  },

  innerTextStyle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30
  },
  mealTypeView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    width: 60,
    height: 60
  },
  mealTypeText: {
    fontWeight: 'bold',
    marginTop: 10,
  }
});

export default Home;


