import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Empty(){
   return(
      <View>
         <Text style={styles.title}>Sua lista de tarefas está vazia</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   title: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      marginTop: 30,
   }
});