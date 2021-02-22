import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Alert} from 'react-native';
import {GetMaze, MovePony} from '../utils/Api';
import getNeighbors from '../utils/Logic';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';
import {storeData} from '../utils/Storage';
import Dialog from '../components/Dialog';

function GameScreen({route}) {
  const [mazeData, setMazeData] = React.useState({status: 'fetching'});
  const [gameState, setGameState] = useState(route.params.savedMaze);
  let neighbors = [];

  const getData = () => {
    GetMaze(gameState.id).then((data) => {
      neighbors = getNeighbors(data.pony[0], data.size[0], data.data.length);
      setMazeData({status: 'fetched', neighbors: neighbors, ...data});
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const Update = (direction) => {
    MovePony(gameState.id, direction).then((res) => {
      storeData('maze', {id: gameState.id, ...res});
      setGameState({id: gameState.id, ...res});

      switch (res.state) {
        case 'won':
          Dialog(
            'You Won',
            'Your Pony is safe and sound, now he/she/it can go and do whatever pony do!',
            'noice',
            () => {},
          );
          break;
        case 'over':
          Dialog(
            'You Lost',
            'For your information, you pony died in horrible fashion!!! So next time pay more attention!',
            'Okay',
            () => {},
          );
          break;

        default:
          getData();
          break;
      }
    });
  };

  return (
    <View style={styles.container}>
      {mazeData.status === 'fetching' && <Spinner />}
      <View style={styles.statusBar}>
        <Text style={styles.status}>Status {gameState.state}</Text>
        <Text style={styles.status}>
          Last Move: {gameState['state-result']}
        </Text>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {mazeData.status === 'fetched' && (
            <Grid
              size={mazeData.size}
              cells={mazeData.data}
              pony={mazeData.pony}
              domokun={mazeData.domokun}
              endPoint={mazeData['end-point']}
              update={Update}
              neighbors={mazeData.neighbors}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  statusBar: {
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#cce9fc',
  },
  status: {
    fontSize: 16,
  },
});

export default GameScreen;
