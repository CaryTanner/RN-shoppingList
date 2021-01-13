import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Alert,
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const random = () => {
    return Math.floor(Math.random() * Math.floor(1000000));
  };
  const [items, setItems] = useState([
    {id: random(), text: 'Milk'},
    {id: random(), text: 'Eggs'},
    {id: random(), text: 'Cheese'},
    {id: random(), text: 'Bread'},
  ]);

  useEffect(() => {});

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (item) => {
    if (!item) {
      Alert.alert(
        'Missing new Item',
        'Please include a new item in order to add to list',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => console.log('OK Pressed'),
            style: 'destructive',
          },
          {
            text: 'another btn',
            onPress: () => console.log('another'),
            style: 'default',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(() => {
        return [{id: random(), text: item}, ...items];
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
