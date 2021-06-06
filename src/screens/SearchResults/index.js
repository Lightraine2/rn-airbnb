import React from 'react';
import {View, Text, FlatList} from "react-native";

import feed from '../../../assets/data/feed'

import Post from '../../components/Post/index'

const posts = feed;

const SearchResultsScreen = (props) => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
      />

      
    </View>
  )
}

export default SearchResultsScreen;