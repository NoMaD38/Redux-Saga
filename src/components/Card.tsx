import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ICharacter} from '../interfaces';

const Card: React.FC<{item: ICharacter}> = ({item}) => {

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.text}>Name: {item.name}</Text>
        <Text style={styles.text}>Status: {item.status}</Text>
        <Text style={styles.text}>Species:{item.species}</Text>
        <Text style={styles.text}>Gender:{item.gender}</Text>
        <Text style={styles.text}>URL:{item.url}</Text>
        <Text style={styles.text}>Created:{item.created}</Text>
        <View>
          <Text style={styles.text}>Location:</Text>
          <Text style={styles.text}>Name:{item.location.name}</Text>
          <Text style={styles.text}>URL:{item.location.url}</Text>
        </View>
        <View>
          <Text style={styles.text}>Origin:</Text>
          <Text style={styles.text}>Name:{item.origin.name}</Text>
          <Text style={styles.text}>URL:{item.origin.url}</Text>
        </View>
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
