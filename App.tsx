/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Main from './src/navigation/RootNavigator';

const App = () => {
  return (
    <View style={styles.Container}>
      <Main />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});

export default App;
