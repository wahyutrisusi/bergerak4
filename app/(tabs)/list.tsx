import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function List() {
  const data = [
    { id: '1', name: 'merbabu', price: 'Rp.500.000', status: 'sukses' },
    { id: '2', name: 'merbabu', price: 'Rp.500.000', status: 'gagal' },
    { id: '3', name: 'merbabu', price: 'Rp.500.000', status: 'sukses' },
    { id: '4', name: 'merbabu', price: 'Rp.500.000', status: 'gagal' },
    { id: '5', name: 'merbabu', price: 'Rp.500.000', status: 'sukses' },
    { id: '6', name: 'merbabu', price: 'Rp.500.000', status: 'gagal' },
    { id: '7', name: 'merbabu', price: 'Rp.500.000', status: 'gagal' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image
        source={{
          uri: 'https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png',
        }}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <Text
        style={[
          styles.status,
          { color: item.status === 'sukses' ? 'green' : 'red' },
        ]}
      >
        {item.status}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput placeholder="Search" style={styles.searchInput} />
        <Ionicons name="search" size={20} color="black" />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  itemContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    color: 'blue',
  },
  status: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
  },
});
