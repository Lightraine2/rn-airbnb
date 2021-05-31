import React from 'react';
import { 
  View, 
  ImageBackground, 
  Text, 
  Pressable
} from 'react-native'
import styles from './styles'

const HomeScreen = (props) => {
  return (
    <View>
      {/* search bar */}
      <ImageBackground source={require('../../../assets/images/wallpaper.jpg')} 
      style={styles.image} 
      >
      <Text style={styles.title}>Go Near</Text>
    
      <Pressable 
      style={styles.button} 
      onPress={() => console.warn('explore button press')}
      >
        <Text style={styles.buttonText}>Explore nearby places</Text>
      </Pressable>
      </ImageBackground>
      <Text> A component </Text>
    </View>
  );
};

export default HomeScreen;
