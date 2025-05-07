import {View, Text, StyleSheet } from 'react-native';

export default function About() {
    return (
        <View>
            <View style={styles.container} />
            <Text>About</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });