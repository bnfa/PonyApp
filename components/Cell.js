import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

/**
 * Cell Component
 * @param {array} borders Array of string containing ["norht", "west"]
 * @param {boolean} isDomokun true if the Cell index matches the Domokun position
 * @param {boolean} isEndPoint true if the Cell index matches the End-Point position
 * @param {boolean} isPony true if the Cell index matches the Pony position
 */

function Cell({borders, isDomokun, isEndPoint, isPony}) {
  let cellStyle = [styles.cell];
  for (const value of borders) {
    cellStyle.push(styles[value]);
  }
  return (
    <View style={cellStyle}>
      {isDomokun && <Text>D</Text>}
      {isEndPoint && <Text>E</Text>}
      {isPony && <Text>P</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  north: {
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  west: {
    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
});
export default Cell;
