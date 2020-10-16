import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column'
  },
  mainArea: {
      flex: .70
  },
  logoArea: {
    flex: .2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  compactLogo: {
    width: 100,
    height: 120,
  }
});
