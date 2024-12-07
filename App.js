import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './screens/HomeScreen';
import ChillScreen from './screens/ChillScreen';
import GroovyScreen from './screens/GroovyScreen';
import HypeScreen from './screens/HypeScreen';
import GoofyScreen from './screens/GoofyScreen';
import AngryScreen from './screens/AngryScreen';
import SongDetails from './screens/SongDetails';
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
                name='Chill'
                component={ ChillScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music" />
                  )
                }}
            />

            <Tab.Screen
                name='Groovy'
                component={ GroovyScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music" />
                  )
                }}
            />

            <Tab.Screen
                name='Hype'
                component={ HypeScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music" />
                  )
                }}
            />

            <Tab.Screen
                name='Goofy'
                component={ GoofyScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music" />
                  )
                }}
            />

            <Tab.Screen
                name='Angry'
                component={ AngryScreen }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music" />
                  )
                }}
            />

          <Tab.Screen
                name='Song'
                component={ SongDetails }
                options={{
                  tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons color={color} size={size} name="music" />
                  )
                }}
            />

        </Tab.Navigator>
    </NavigationContainer>
);
}