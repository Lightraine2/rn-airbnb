import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  title: {
  marginLeft: 25,
  fontSize: 70,
  fontWeight: 'bold',
  color: 'white',
  width: '70%'

  },

  button: {
    backgroundColor: '#fff',
    width: 200,
    marginLeft: 25,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'

  }

});

export default styles;