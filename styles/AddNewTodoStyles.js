import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 15
  },
  inputField: {
    color: 'black',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 14,
    flex: 1,
    height: 40,
    backgroundColor:'white',
    borderRadius: 4,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'black',
    fontSize: 30,
  },
});
