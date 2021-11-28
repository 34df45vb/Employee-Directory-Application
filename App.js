import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeList from './src/pages/employeeList';
import EmployeeView from './src/pages/employeeView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EmployeeList" component={EmployeeList} options={{
          title: 'Employee List'
        }} />
        <Stack.Screen name="EmployeeView" component={EmployeeView} options={{
          title: 'Employee View'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App