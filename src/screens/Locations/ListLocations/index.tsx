import React from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {IStateLocations, ILocation} from '../../../interfaces';
import {useNavigation} from '@react-navigation/native';
import { getLocations } from '../actions';

export default function ListLocations() {
  const navigation = useNavigation();

  const locations = useSelector<
    IStateLocations,
    IStateLocations['locations']
  >((state) => state.reducerLocations.locations);

  const dispath = useDispatch();

  React.useEffect(() => {
    dispath(getLocations());
  }, [dispath]);

  const rendeItem = (item: ILocation) => (
    <TouchableOpacity
      style={{flex: 1, justifyContent: 'center', alignItems: 'center', margin:20}}
      onPress={() => navigation.navigate('Location', {item})}>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={locations}
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
