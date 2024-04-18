// AddNewTodo.js
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/AddNewTodoStyles';

export default function AddNewTodo({ addTask }) {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  const handleAddTask = () => {
    addTask({ task, time });
    setTask('');
    setTime('');
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.inputField} 
        placeholder="Adicione uma nova tarefa" 
        value={task}
        onChangeText={setTask}
      />
      <TextInput 
        style={styles.inputField} 
        placeholder="Tempo para a tarefa (em minutos)" 
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <View style={styles.iconButton}>
          <Text style={styles.textButton}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
