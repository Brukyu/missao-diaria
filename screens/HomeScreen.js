import React, { useState, useContext } from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import AddNewTodo from '../components/AddNewTodo';
import TaskItem from '../components/TaskItem';
import LifeBar from '../components/LifeBar';
import * as Progress from 'react-native-progress';
import styles from '../styles/HomeScreenStyles';
import { TaskContext } from '../components/TaskCompleted';

export default function HomeScreen() {
  const { completedTasks, setCompletedTasks } = useContext(TaskContext);
  const [tasks, setTasks] = useState([]); 
  const [username, setUsername] = useState('Username'); 
  const [life, setLife] = useState(100); 
  const [level, setLevel] = useState(0); 
  const [levelCount, setLevelCount] = useState(1);

  const handleAddTask = task => {
    setTasks(oldTasks => [...oldTasks, task]);
  };

  const handleCompleteTask = index => {
    setCompletedTasks(oldTasks => [...oldTasks, tasks[index]]);
    setTasks(oldTasks => oldTasks.filter((task, i) => i !== index));
    setLevel(oldLevel => {
      const newLevel = oldLevel + 10;
      if (newLevel >= 100) {
        setLevelCount(oldLevelCount => oldLevelCount + 1);
        return 0;
      }
      return newLevel;
    });
  };

  const handleRemoveTask = index => {
    setTasks(oldTasks => oldTasks.filter((task, i) => i !== index));
    setLife(oldLife => oldLife - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username} Lvl. {levelCount} 🎮</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../assets/icon.webp')} style={{ width: 100, height: 100, margin: 5 }} />
        <View style={styles.barsContainer}>
        <Text style={{ color: 'darkred', fontSize: 16, fontWeight:'bold'}}>❤️ Health</Text>
          <LifeBar life={life} />
          <Text style={{ color: 'darkred', fontSize: 16, fontWeight:'bold'}}>{life}/100</Text>
          <Text style={{ color: 'darkgreen', fontSize: 16, fontWeight:'bold'}}>🟢 Tasks Completed</Text>
          <Progress.Bar progress={level / 100} width={270} height={15} color='darkgreen'/>
          <Text style={{color: 'darkgreen', fontSize: 16, fontWeight: 'bold'}}>Finished: {level/10} Tasks</Text>
        </View>
      </View>
      <AddNewTodo addTask={handleAddTask} />
      <FlatList 
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => 
          <TaskItem task={item} completeTask={() => handleCompleteTask(index)} removeTask={() => handleRemoveTask(index)} />}
      />
    </View>
  );
}