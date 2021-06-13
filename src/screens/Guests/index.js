import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles'

const GuestsScreen = (props) => {
    return (
        <View>
        <View style={styles.row}>
        <View>
        <Text> Adults</Text>
        <Text> Children</Text>
        </View>
        </View>
        </View>
    );
};

export default GuestsScreen;