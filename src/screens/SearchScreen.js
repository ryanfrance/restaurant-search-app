import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [restaurants, setRestaurants] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search');
    response.data
  };

  return (
    <View>
      <SearchBar 
      term={term} 
      onTermChange={newTerm => setTerm(newTerm)} 
      onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>Search Screen</Text>
      <Text>We have found {restaurants.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;