import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import Empty from './src/components/Empty';
import Task from './src/components/Task';
import Input from './src/components/Input';

export default function App() {
   const [data, setData] = useState([]);

   const submitHandle = (value) => {
      setData((prevTask) => {
         return [
            {
               value: value,
               key: Math.random().toString(),
            },
            ...prevTask
         ]
      });
   };

   const deleteItem = (key) => {
      setData(prevTask => {
         return prevTask.filter((task) => task.key != key);
      });
   };

   return (
      <View style={styles.container}>
         <FlatList data={data} keyExtractor={(item) => item.key}
            ListHeaderComponent={() => <Header />}
            ListEmptyComponent={() => <Empty />}
            renderItem={({ item }) => <Task item={item} deleteItem={deleteItem} />}
         />
         <View>
            <Input submitHandle={submitHandle} />
         </View>
         <StatusBar style="light" />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#121212',
      alignItems: 'center',
      flexDirection: 'column',
      paddingHorizontal: 10,
      paddingVertical: 70,
   },
});