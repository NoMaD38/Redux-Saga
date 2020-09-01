import React from 'react';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../../interfaces';
import CardLocation from '../../../components/CardLocation'
import { View, TouchableOpacity, Text } from 'react-native';

type LocationScreenRouteProp = RouteProp<StackParamList, 'Location'>;

export default function Location() {
  const navigation = useNavigation()
  const route = useRoute<LocationScreenRouteProp>();
  const item = route.params.item;

  return (
    <View style={{flex:1}}>
      <TouchableOpacity style={{margin:10}} onPress={()=>navigation.goBack()}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Back</Text>
      </TouchableOpacity>
      <CardLocation item={item} />
    </View>
  );
}
