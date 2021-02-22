import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useForm, Controller} from 'react-hook-form';
import {CreateMaze} from '../utils/Api';
import {storeData} from '../utils/Storage';
import MenuButton from '../components/MenuButton';
import Spinner from '../components/Spinner';
import Dialog from '../components/Dialog';

function NewGameScreen({navigation}) {
  const [isLoading, setLoading] = useState(false);
  const {control, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    CreateMaze(data).then((res) => {
      setLoading(false);
      if (res.message) {
        Dialog('Check your data', res.message, 'OK', () => {});
      } else if (res.errors) {
        Dialog(
          'Failed',
          'Something went wrong, please try again later',
          'OK',
          () => {},
        );
      } else {
        storeData('maze', {id: res.maze_id}).then(() => {
          navigation.replace('Game', {
            savedMaze: {id: res.maze_id},
          });
        });
      }
    });
  };

  return (
    <View style={styles.main}>
      {isLoading && <Spinner />}
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Name of your favorite Pony</Text>
        <Controller
          control={control}
          name="maze-player-name"
          rules={{required: true}}
          defaultValue={null}
          render={({onChange, onBlur, value}) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
            />
          )}
        />
        {errors['maze-player-name'] && (
          <Text style={styles.error}>* This is required.</Text>
        )}
      </View>
      <View style={[styles.inputContainer, styles.dimentionContainer]}>
        <View style={styles.dimentionView}>
          <Text style={styles.lable}>Width</Text>
          <Controller
            control={control}
            name="maze-width"
            rules={{required: true}}
            defaultValue={null}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(parseInt(value))}
                value={value}
                keyboardType="numeric"
              />
            )}
          />
          {errors['maze-width'] && (
            <Text style={styles.error}>* This is required.</Text>
          )}
        </View>
        <View style={styles.dimentionView}>
          <Text style={styles.lable}>Height</Text>
          <Controller
            control={control}
            name="maze-height"
            rules={{required: true}}
            defaultValue={null}
            render={({onChange, onBlur, value}) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={(value) => onChange(parseInt(value))}
                value={value}
                keyboardType="numeric"
              />
            )}
          />
          {errors['maze-height'] && (
            <Text style={styles.error}>* This is required.</Text>
          )}
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.lable}>Select the difficulty</Text>
        <Controller
          control={control}
          name="difficulty"
          rules={{required: true}}
          render={({onChange}) => {
            return (
              <RNPickerSelect
                style={{...pickerSelectStyles}}
                onValueChange={(value) => onChange(value)}
                items={[
                  {label: 'Easy', value: 1},
                  {label: 'Medium', value: 2},
                  {label: 'Hard', value: 3},
                ]}
              />
            );
          }}
        />
        {errors.difficulty && (
          <Text style={styles.error}>* This is required.</Text>
        )}
      </View>
      <MenuButton lable="Start" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#bfe4ff',
  },
  inputContainer: {
    marginTop: 16,
    marginHorizontal: 8,
    color: '#ffffff',
  },
  lable: {
    color: '#20232a',
    fontSize: 20,
  },
  input: {
    marginTop: 8,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    borderWidth: 4,
    fontSize: 20,
  },
  dimentionContainer: {
    flexDirection: 'row',
    margin: 14,
  },
  dimentionView: {
    flex: 0.5,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
    fontStyle: 'italic',
  },
});

// Need to be a separate StyleSheet in order to work
const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingRight: 30,
  },
});
export default NewGameScreen;
