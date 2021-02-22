import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Cell from './Cell';

/**
 * Normal Cell component plus onPress function and Action
 * @param {array} borders Array of string containing ["norht", "west"]
 * @param {boolean} isDomokun true if the Cell index matches the Domokun position
 * @param {boolean} isEndPoint true if the Cell index matches the End-Point position
 * @param {boolean} isPony true if the Cell index matches the Pony position
 * @param {string} action can be 'west', 'east', 'north' , 'south' or 'stay'
 * @param {function} onPress update method for the direction of the pony
 */

function ActionCell({action, onPress, ...props}) {
  const isPony = action === 'stay' ? true : false;
  const color = isPony ? styles.pony : styles.neighbor;
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={color}>
      <Cell {...props} isPony={isPony} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pony: {
    backgroundColor: '#eebff2',
  },
  neighbor: {
    backgroundColor: '#f0f0f0',
  },
});
export default ActionCell;
