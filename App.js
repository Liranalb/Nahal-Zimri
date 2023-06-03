
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Reports from './components/Reports'
import { f, auth, db } from './config/Firebase'

function HomeScreen({ navigation }) {

  db.ref('/refName/child2').set("This is working");

  //  var updates = {};
  // updates['/RefName/child'] = 'Database';
  // updates['/anotherRefName'] = 'blabla bla';
  // updates['/numbers'] = 5;
  // db.ref().update(updates);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Reports"
        onPress={() => navigation.navigate('Reports')}
      />
    </View>
  );
}

function ReportsScreen() {
  return (
    <Reports />
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Reports" component={ReportsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;