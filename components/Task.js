import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Button from './Button';

let Task = props => {
  return (
    <View style={s.item}>
      <View style={s.itemLeft}>
        <View style={s.square}></View>
        <Text style={s.itemText}>{props.text}</Text>
      </View>
      <View style={s.circular}></View>
    </View>
  );
};

let s = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '77%',
  },
  text: {},
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
