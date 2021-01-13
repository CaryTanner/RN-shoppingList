import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function AddItem({addItem}) {
  const [item, setItem] = useState('');
  const inputRef = useRef();

  const onChange = (textValue) => {
    setItem(textValue);
  };

  const handleSubmit = () => {
    addItem(item);
    setItem('');
    inputRef.current.clear()
  };
  console.log(item);
  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        placeholder="New Item"
        style={styles.textInput}
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}> + Add Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
  },
  textInput: {
    height: 50,

    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    alignSelf: 'stretch',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    height: 30,
    padding: 5,
    borderRadius: 50,
    width: 200,
    margin: 20,
  },
  buttonText: {
    textAlign: 'center',
  },
});
