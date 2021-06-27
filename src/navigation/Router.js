import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';


const Stack = createStackNavigator();

const Router = (props) => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearchScreen}
                    options={{
                        title: "Search your destination"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Router;