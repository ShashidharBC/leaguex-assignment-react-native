import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import FlatListComp from './src/screens/FlatListComp';
import FlatListItemDetail from './src/screens/FlatListItemDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FlatListComp"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="FlatListComp" component={FlatListComp} />
        <Stack.Screen
          name="FlatListItemDetail"
          component={FlatListItemDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
