import React from 'react';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../../interfaces';
import Card from '../../../components/Card';
import { View, TouchableOpacity, Text } from 'react-native';

type CharacterScreenRouteProp = RouteProp<StackParamList, 'Character'>;

export default function Character() {
  const navigation = useNavigation()
  const route = useRoute<CharacterScreenRouteProp>();
  const item = route.params.item;

  return (
    <View style={{flex:1}}>
      <TouchableOpacity style={{margin:10}} onPress={()=>navigation.goBack()}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Back</Text>
      </TouchableOpacity>
      <Card item={item} />
    </View>
  );
}
