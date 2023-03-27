import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header(){
    return(
        <View>
            <Text style={styles.title}>Lista de Tarefas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});