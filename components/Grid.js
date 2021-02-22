import React from 'react';
import {ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import Cell from './Cell';
import ActionCell from './ActionCell';

/**
 * Grid ot the game board
 * @param {array} cells All the cells on the grid with their relevant data
 * @param {array} domokun with one element, the position of the Domokun
 * @param {array} endPoint with one element, the position of the End-Point
 * @param {array} size with two elements, ['grid width', 'grid height']
 * @param {array} neighbors List of all the cells with action, pony and its neighbors
 * @param {function} update The Update method for moving the pony on the board
 */
function Grid({cells, domokun, endPoint, size, neighbors, update}) {
  const gridWidth = size[0] * 50 + 4;
  let gridCells = cells.map((cell, index) => {
    return (
      <Cell
        borders={cell}
        key={index}
        index={index}
        isDomokun={domokun[0] === index ? true : false}
        isEndPoint={endPoint[0] === index ? true : false}
      />
    );
  });

  // Set Neighbors
  neighbors.map(({position, action}) => {
    const props = gridCells[position].props;

    gridCells[position] = (
      <ActionCell
        {...props}
        key={position}
        onPress={() => update({direction: action})}
        action={action}
      />
    );
  });
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsVerticalScrollIndicator={true}>
        <View style={[styles.cellContainer, {width: gridWidth}]}>
          {gridCells}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  cellContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    margin: 2,
  },
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 2,
  },
});

export default Grid;
