import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function ListItem({item, deleteItem}) {
  return (
    <TouchableOpacity style={styles.listItemContainer}>
      <View style={styles.listItemView}>
        <Text style={styles.itemText}>{item.text}</Text>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => deleteItem(item.id)}>
          <Text> X </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    backgroundColor: 'lightgrey',

    padding: 5,
    borderBottomColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
  },
  delete: {
    backgroundColor: 'red',
    color: 'white',
    marginRight: 5,
    padding: 5,
    borderRadius: 5,
  },
});
