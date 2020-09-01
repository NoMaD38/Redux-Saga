import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {IStateEpisodes, IEpisodes} from '../../../interfaces';
import {getEpisodes} from '../actions';
import {useNavigation} from '@react-navigation/native';

export default function ListEpisodes() {
  const navigation = useNavigation();

  const episodes = useSelector<
    IStateEpisodes,
    IStateEpisodes['episodes']
  >((state) => state.reducerEpisodes.episodes);

  const dispath = useDispatch();

  console.log(episodes);
  

  React.useEffect(() => {
    dispath(getEpisodes());
  }, [dispath]);

  const rendeItem = (item: IEpisodes) => (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:20}}
      onPress={() => navigation.navigate('Episode', {item})}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={episodes}
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
