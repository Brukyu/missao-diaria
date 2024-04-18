import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/TaskItemStyles';

export default function TaskItem({ task, removeTask, completeTask }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.taskText, task.completed && styles.completedTask]}>
        {task.task} ({task.time} minutos)
      </Text>
      <TouchableOpacity onPress={completeTask}>
        <Text style={styles.completeButton}>{task.completed ? 'Desfazer' : 'Concluir'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={removeTask}>
        <Text style={styles.removeButton}>Remover</Text>
      </TouchableOpacity>
    </View>
  );
}
