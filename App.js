import { StyleSheet } from 'react-native';
import Header from './Header';
import LoginPage from './login';
import SignupPage from './signup';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './RootNavigation';
import Dashboard from './dashboard';
import Edit from './edit';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer
      ref={navigationRef}>
      <Stack.Navigator initialRouteName='LoginPage'>

        {<Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            header: () => <Header headerDisplay="Login" />
          }}
        />}

        {<Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{
            header: () => <Header headerDisplay="Signup" />
          }}
        />}

         {<Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            header: () => <Header headerDisplay="Dashboard" />
          }}
        />}

        {<Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            header: () => <Header headerDisplay="Edit" />
          }}
        />}

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});