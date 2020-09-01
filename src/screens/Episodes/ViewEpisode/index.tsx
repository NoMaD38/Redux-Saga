import React from 'react';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../../../interfaces';
import CardEpisode from '../../../components/CardEpisode'
import { View, TouchableOpacity, Text } from 'react-native';

type EpisodeScreenRouteProp = RouteProp<StackParamList, 'Episode'>;

export default function Episode() {
  const navigation = useNavigation()
  const route = useRoute<EpisodeScreenRouteProp>();
  const item = route.params.item;

  return (
    <View style={{flex:1}}>
      <TouchableOpacity style={{margin:10}} onPress={()=>navigation.goBack()}>
        <Text style={{fontWeight:'bold', fontSize:20}}>Back</Text>
      </TouchableOpacity>
      <CardEpisode item={item} />
    </View>
  );
}
