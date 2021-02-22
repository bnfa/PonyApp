import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

/**
 * Loading Spinner, it will cover the whole view
 */
function Spinner() {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size={100} color="#00ff00" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.6,
    backgroundColor: '#000000',
    height: '100%',
    width: '100%',
    zIndex: 2,
    elevation: 3,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    zIndex: 2,
    elevation: 3,
  },
});
export default Spinner;
