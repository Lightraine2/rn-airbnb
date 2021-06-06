import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo';

import HomeScreen from './src/screens/Home/index'
import SearchResultsScreen from './src/screens/SearchResults/index'
//import HomeScreen from './src/screens/Home/index'
import Post from './src/components/Post/index'

import feed from './assets/data/feed'

const post1 = feed[0];

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      {/* <HomeScreen /> */}
      {/* <Post post={post1}/> */}
      <SearchResultsScreen />
    </SafeAreaView>
    </>
  );
}


