import { StyleSheet, Dimensions, Platform } from 'react-native';

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

  },

  searchButton: {
    backgroundColor: '#fff',
    height: 50,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 30,
    zIndex: 1,
    elevation: (Platform.OS === 'android') ? 50:0


  },

  searchButtonText: {
    fontSize: 16,
    fontWeight: 'bold'

  }

});

export default styles;