import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 

export default function About() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.replace('index'); 
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>WAHYU</Text>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons name="person-outline" size={20} color="#6c63ff" />
            <View>
              <Text style={styles.optionTitle}>My Account</Text>
              <Text style={styles.optionSubtitle}>Make changes to your account</Text>
            </View>
          </View>
          <MaterialIcons name="error-outline" size={20} color="red" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons name="bookmark-outline" size={20} color="#6c63ff" />
            <View>
              <Text style={styles.optionTitle}>Saved Beneficiary</Text>
              <Text style={styles.optionSubtitle}>Manage your saved account</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <View style={styles.optionLeft}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#6c63ff" />
            <View>
              <Text style={styles.optionTitle}>Two-Factor Authentication</Text>
              <Text style={styles.optionSubtitle}>Further secure your account for safety</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <View style={styles.optionLeft}>
            <Ionicons name="log-out-outline" size={20} color="#6c63ff" />
            <View>
              <Text style={styles.optionTitle}>Log out</Text>
              <Text style={styles.optionSubtitle}>Further secure your account for safety</Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={20} color="gray" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    width: '100%',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  optionSubtitle: {
    fontSize: 12,
    color: 'gray',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
});
