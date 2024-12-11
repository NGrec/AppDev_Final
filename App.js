import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
const Stack = createNativeStackNavigator();

// Create a separate stack for mood screens
function MoodStack({ navigation }) {
    return (
      <Stack.Navigator
        screenOptions={({ route }) => ({
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: '',
          headerTransparent: true, // Makes header background transparent
          headerBlurEffect: 'none', // Removes any blur effect
          headerLeft: () => (
            <MaterialCommunityIcons
              name="arrow-left"
              size={24}
              color="#000"
              onPress={() => navigation.navigate('Genres')}
              style={{
                marginLeft: 16,
                color: route.name === "ChillStack" ? "#000" :
                      route.name === "GroovyStack" ? "#000" :
                      route.name === "HypeStack" ? "#000" :
                      route.name === "GoofyStack" ? "#000" :
                      route.name === "AngryStack" ? "#000" : 
                      "#fff",
              }}
            />
          ),
          headerStyle: {
            backgroundColor: 'transparent', // Makes header background transparent
          },
          // Remove header background shadow
          headerShadowVisible: false,
        })}
      >
        <Stack.Screen name="ChillStack" component={ChillScreen} />
        <Stack.Screen name="GroovyStack" component={GroovyScreen} />
        <Stack.Screen name="HypeStack" component={HypeScreen} />
        <Stack.Screen name="GoofyStack" component={GoofyScreen} />
        <Stack.Screen name="AngryStack" component={AngryScreen} />
        <Stack.Screen name="SongDetails" component={SongDetails} />
      </Stack.Navigator>
    );
  }
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
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons color={color} size={size} name="home" />
            )
          }}
        />
        <Tab.Screen
          name='Genres'
          component={GenresScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons color={color} size={size} name="music-box-multiple" />
            )
          }}
        />
        <Tab.Screen
          name='Moods'
          component={MoodStack}
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