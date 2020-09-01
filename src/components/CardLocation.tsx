import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ILocation} from '../interfaces';

const Card: React.FC<{item: ILocation}> = ({item}) => {

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Type: {item.type}</Text>
        <Text style={styles.text}>Dimension:{item.dimension}</Text>
        <Text style={styles.text}>Url:{item.url}</Text>
        <Text style={styles.text}>Created:{item.created}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Card
