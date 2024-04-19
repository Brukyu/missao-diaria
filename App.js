import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CompletedTasksScreen from './screens/CompletedTasksScreen';
import { TaskProvider } from '../missaodiaria/components/TaskCompleted';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
      <Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: 'white', // Cor do texto e ícone quando a aba está ativa
    tabBarInactiveTintColor: 'gray', // Cor do texto e ícone quando a aba está inativa
    tabBarActiveBackgroundColor:'#3A3B3D',
    tabBarInactiveBackgroundColor: 'black',
    tabBarStyle: [
      {
        display: 'flex'
      },
      null
    ],
    tabBarLabelStyle: { // Estilo do texto do TabBar
      fontSize: 16, // Tamanho do texto
    },
  }}
>
<Tab.Screen 
  name="Missão Diária"
  component={HomeScreen} 
  options={{ 
    headerStyle: { backgroundColor: '#3A3B3D' },
    headerTintColor: 'white',
    tabBarIcon: ({ color, size }) => (
      <Icon name="home" color={color} size={22} />
    ),
  }} 
/>
<Tab.Screen 
  name="Completed Tasks" 
  component={CompletedTasksScreen} 
  options={{ 
    headerStyle: { backgroundColor: '#3A3B3D' },
    headerTintColor: 'white',
    tabBarIcon: ({ color, size }) => (
      <Icon name="checkmark-done" color={color} size={size} />
    ),
  }} 
/>
</Tab.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
