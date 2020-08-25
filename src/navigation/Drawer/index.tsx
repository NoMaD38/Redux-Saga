import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from '../../interfaces';
import StackCharacters from '../StackCharacters';
import StackLocations from '../StackLocations';
import StackEpisodes from '../StackEpisodes';

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function Menu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Character" component={StackCharacters} />
      <Drawer.Screen name="Location" component={StackLocations} />
      <Drawer.Screen name="Episode" component={StackEpisodes} />
    </Drawer.Navigator>
  );
}
