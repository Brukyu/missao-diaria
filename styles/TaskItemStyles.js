// TaskItemStyles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3A3B3D',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,

  },
  taskText: {
    color: 'white',
    fontSize: 16,
  },
  completedTask: {
    textDecorationLine: 'line-through',
  },
  completeButton: {
    color: 'green',
    fontSize: 14,
    marginRight: 10,
  },
  removeButton: {
    color: '#FF0000',
    fontSize: 14,
  },
});