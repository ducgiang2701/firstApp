import React, {FC, useCallback, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {FileNode, root, SimpleDataType, ItemType, LIST} from '../api/data';

const File: FC<FileNode> = ({id, children}: FileNode) => {
  const [show, setShow] = useState<Boolean>(false);

  const handleShow = useCallback(() => {
    setShow(!show);
  }, [show, setShow]);

  return (
    <View>
      <TouchableOpacity onPress={handleShow}>
        <Text>{id}</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'column',
          left: 10,
          borderLeftWidth: 1,
          marginLeft: 15,
          marginBottom: 20,
        }}>
        {show && (children ?? []).map((node: FileNode) => <File {...node} />)}
      </View>
    </View>
  );
};

const List: FC<ItemType> = ({title, data, child}: ItemType) => {
  return (
    <View>
      <FlatList data={LIST} renderItem={renderItem} />
    </View>
  );
};

const FlatlistScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <File {...root} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FlatlistScreen;
