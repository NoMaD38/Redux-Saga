import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from '../../interfaces';
import ListEpisodes from '../../screens/Episodes/ListEpisodes';
import Episode from '../../screens/Episodes/ViewEpisode';

const Stack = createStackNavigator<StackParamList>();

export default function StackEpisodes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ListEpisodes" component={ListEpisodes} />
      <Stack.Screen name="Episode" component={Episode} />
    </Stack.Navigator>
  );
}
