// Review.js
import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import Card from '../shared/card';
import { FontAwesome } from '@expo/vector-icons'; 
import {renderRatingIcons} from '../shared/renderRatingIcons'

function ReviewScreen({ route, navigation }) {
  const { item } = route.params;
  return (
    <View>
      <Card>
        <Text>Review Screen</Text>
        <Text>Title: {item.title}</Text>
        {/* <Text>Rating: {item.rating} stars</Text> */}
        <View style={styles.ratingContainer}>
          {renderRatingIcons(item.rating)}
        </View>
      </Card>
      {/* Add your review screen content here */}
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default ReviewScreen;

const styles = StyleSheet.create({
  ratingContainer:{
    color:'red',
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
  }
})
