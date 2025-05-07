import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
export default function Page1() {
  const router = useRouter();
    return (
      <View style={ styles.container}>
        <Text>Page 1</Text>
        <Button title="Go to Home" onPress={() => router.push("/Home")} />
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