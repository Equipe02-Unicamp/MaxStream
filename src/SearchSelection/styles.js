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
    flex: 0.2,
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    justifyContent: 'space-between'
  },
  chooseBox: {
    width: '45%',
    height: 200,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 4,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  chooseLabel: {
    fontSize: 20
  }
});
