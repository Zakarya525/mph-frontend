import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import tw from 'tailwind-react-native-classnames';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuStyle}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textStyle}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("Feeds")}>
        <Text style={styles.textStyle}>Feeds</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate("About")}>
        <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>

    </View>
  )
}
const styles = StyleSheet.create({
  menuStyle: {
  },

  buttonStyle: {
    marginTop: 20,
  },

  textStyle: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
  }
});
export default Menu
