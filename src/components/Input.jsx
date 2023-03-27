import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

export default function Input({ submitHandle }){
   const [value, setValue] = useState("");

   const onChangeText = (text) => {
      setValue(text);
   }

   const handleAddHabit = () => {
      setValue(submitHandle(value));
      setValue("");
      Keyboard.dismiss();
   }

   return(
      <View>
         <View>
            <TextInput 
               placeholder='Adicione sua tarefa'
               placeholderTextColor='#bbbb'
               value={value}
               onChangeText={onChangeText}
               style={styles.input} 
            />
         </View>
         <TouchableOpacity onPress={handleAddHabit} style={styles.button}>
            <Text style={styles.buttonText}>Adicionar</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   input: {
      width: 200,
      color: '#fff',
      borderWidth: 1,
      borderColor: '#fff',
      paddingVertical: 8,
      paddingHorizontal: 15,
   },
   button: {
      borderWidth: 1,
      borderColor: '#bbb',
      borderRadius: 5,
      paddingVertical: 15,
      marginTop: 25,
   },
   buttonText: {
      color: '#fff',
      textAlign: 'center',
   }
});