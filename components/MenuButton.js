import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
/**
 * Simple Menu button
 * @param {string} lable Button lable
 * @param {function} onPress onPress function
 */

function MenuButton({lable, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.appButtonContainer}>
        <Text style={styles.appButtonLable}>{lable}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    margin: 8,
    alignSelf: 'center',
    zIndex: 0,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonLable: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default MenuButton;
