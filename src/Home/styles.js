import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16
  },
  label: {
    fontSize: 30,
    textAlign: 'center'
  },
  chooseBoxContainer: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between'
  },
  chooseLabel: {
    fontSize: 20
  }
});
