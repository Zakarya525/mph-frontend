import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { v4 as uuidv4 } from 'uuid';
import FoodDetails from '../components/FoodDetails';

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

const Home = () => {
  return (
    <View>

      <Text style={styles.textStyle}>Platter</Text>
      <ScrollView horizontal={true}>
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
    </View>

  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 10
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
  }
});
export default Home;

