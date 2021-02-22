import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function AboutScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Pony App</Text>
      <Text style={styles.text}>
        This app is simple implementation of the TrustPilot code challenge.
        {'\n'} The player will create a maze with the dimension of minimum 15*15
        and maximum 25*25. Then player will navigate their pony towards the End
        Point while avoiding the DomoKun. The game is turn based game so
        everytime the player makes a move the Domokun will react and move.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e5f7e4',
    padding: 12,
  },
  title: {
    fontSize: 24,
    marginVertical: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutScreen;
