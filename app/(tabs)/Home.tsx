import { useRouter } from "expo-router";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

export default function Home() {
    const router = useRouter();
    return (
        <ImageBackground
            source={{ uri: "https://superlive.id/storage/articles/a552918b-be94-42a9-a2ba-c3fa12705f8f.png" }}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Open Trip ke Gunung</Text>
                <Text style={styles.description}>
                    Ayo bergabung dalam petualangan mendaki gunung yang menakjubkan! Nikmati keindahan alam, udara segar, 
                    dan pengalaman tak terlupakan bersama teman-teman baru.
                </Text>
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => router.push("/list")}
                >
                    <Text style={styles.buttonText}>Go to List</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Efek transparansi untuk teks
        borderRadius: 10,
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 10,
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#4CAF50', // Tombol berwarna hijau
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    }
});
