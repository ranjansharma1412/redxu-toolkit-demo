import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { APIURLs } from './common';
import { AddEmployee, EmployeeDetails, EmployeeList, ForgetPassword, SignIn, SignUp } from './screens';
import TodoList from './screens/todo/TodoList';

const Stack = createStackNavigator();

const AuthNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        </Stack.Navigator>
    )
}


const DashboardNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EmployeeList" component={EmployeeList} />
            <Stack.Screen name="TodoList" component={TodoList } />
            <Stack.Screen name="AddEmployee" component={AddEmployee} />
            <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
        </Stack.Navigator>
    )
}


const RootNavigation = () => {
    axios.defaults.baseURL = APIURLs.BASE_URL;
    const [isLogin, setIsLogin] = useState(false)

    return (
        <NavigationContainer>
            {isLogin && <DashboardNav />}
            {!isLogin && <DashboardNav />}
        </NavigationContainer>
    );
}

export default RootNavigation;