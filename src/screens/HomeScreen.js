// src/screens/HomeScreen.js
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { signOut } from '../firebase/auth';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Button title="Sign Out" onPress={signOut} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
});

export default HomeScreen;
