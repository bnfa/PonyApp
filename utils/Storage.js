import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    throw Error();
  }
};

const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    throw Error();
  }
};
const removeDate = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    throw Error();
  }
};

export {getData, storeData, removeDate};
