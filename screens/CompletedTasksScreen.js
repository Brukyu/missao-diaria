import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import TaskItem from '../components/TaskItem';
import Styles from '../styles/HomeScreenStyles'
import { TaskContext } from '../components/TaskCompleted';

export default function CompletedTasksScreen() {
  const { completedTasks } = useContext(TaskContext);

  return (
    <View style={Styles.container}>
      <FlatList 
        data={completedTasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem
            task={item}
            showButtons={false}
          />
        )}
      />
    </View>
  );
}
