import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {IStateCharacters, ICharacter} from '../../../interfaces';
import {getCharacter} from '../actions';
import {useNavigation} from '@react-navigation/native';

export default function ListCharacters() {
  const navigation = useNavigation();

  const characters = useSelector<
    IStateCharacters,
    IStateCharacters['characters']
  >((state) => state.reducerCharacter.characters);

  const dispath = useDispatch();

  React.useEffect(() => {
    dispath(getCharacter());
  }, [dispath]);

  console.log(characters);
  

  const rendeItem = (item: ICharacter) => (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:20}}
      onPress={() => navigation.navigate('Character', {item})}>
      <Image style={{width: 150, height: 150}} source={{uri: item.image}} />
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        renderItem={({item}) => rendeItem(item)}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});
