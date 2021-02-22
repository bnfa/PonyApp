import React from 'react';
import {View, StyleSheet} from 'react-native';
import {getData} from '../utils/Storage';
import Spinner from '../components/Spinner';
import MenuButton from '../components/MenuButton';
import {useIsFocused} from '@react-navigation/native';

function HomeScreen({navigation}) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [savedMaze, setSavedMaze] = React.useState();
  const isFocused = useIsFocused();

  const getMazeId = () => {
    getData('maze').then((data) => {
      setIsLoading(false);
      setSavedMaze(data);
    });
  };

  React.useEffect(() => {
    getMazeId();
  }, [isFocused]);
  return (
    <View style={styles.screen}>
      {isLoading && <Spinner />}
      {savedMaze?.id && (
        <MenuButton
          lable="Continue"
          onPress={() =>
            navigation.navigate('Game', {
              savedMaze: savedMaze,
            })
          }
        />
      )}
      <MenuButton
        lable="New Game"
        onPress={() => navigation.navigate('NewGame')}
      />
      <MenuButton lable="About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7d9fc',
  },
});

export default HomeScreen;
