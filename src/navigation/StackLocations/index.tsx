import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamList} from '../../interfaces';
import ListLocations from '../../screens/Locations/ListLocations';
import Location from '../../screens/Locations/ViewLocation';

const Stack = createStackNavigator<StackParamList>();

export default function StackLocations() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="ListLocations" component={ListLocations} />
      <Stack.Screen name="Location" component={Location} />
    </Stack.Navigator>
  );
}
