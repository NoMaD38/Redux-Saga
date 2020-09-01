import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IEpisodes} from '../interfaces';

const Card: React.FC<{item: IEpisodes}> = ({item}) => {

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Air Date: {item.air_date}</Text>
        <Text style={styles.text}>Episode:{item.episode}</Text>
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
