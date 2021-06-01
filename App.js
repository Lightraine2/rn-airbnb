import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';

import HomeScreen from './src/screens/Home/index'
import Post from './src/components/Post/index'

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post />
    </SafeAreaView>
    </>
  );
}


