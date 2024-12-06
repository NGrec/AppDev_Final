import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './screens/HomeScreen';
import ChillScreen from './screens/ChillScreen';
import ProfileScreen from './screens/ProfileScreen';
import GenresScreen from './screens/GenresScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#017373',
            tabBarInactiveTintColor: '#000000'
          }}
          >
            <Tab.Screen
                name='Home'
                component={ HomeScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="home" />
                  )
                }}
            />
            <Tab.Screen
                name='Genres'
                component={ GenresScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music-box-multiple" />
                  )
                }}
            />
            <Tab.Screen
                name='Music'
                component={ ChillScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music" />
                  )
                }}
            />
            <Tab.Screen
                name='Profile'
                component={ ProfileScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="account-music" />
                  )
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
);
}