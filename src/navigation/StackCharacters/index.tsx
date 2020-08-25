import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from '../../interfaces';
import ListCharacters from '../../screens/Character/ListCharacters';
import Character from '../../screens/Character/ViewCharacter';

const Stack = createStackNavigator<StackParamList>();

export default function StackCharacters() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ListCharacters" component={ListCharacters} />
      <Stack.Screen name="Character" component={Character} />
    </Stack.Navigator>
  );
}
