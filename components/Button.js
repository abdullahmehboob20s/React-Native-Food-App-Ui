import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

let Button = props => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={props.activeOpacity}
        style={props.style || s.button}
        onPress={props.onPress}>
        <Text style={props.textStyle || s.text}>{props.title || 'Button'}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

let s = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0073e6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 3,
  },
});
