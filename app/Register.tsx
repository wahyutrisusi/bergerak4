import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Register() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} />
            <TextInput placeholder="Confirm Password" secureTextEntry style={styles.input} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/Home")} 
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 30,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#1795DE",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
    registerContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
    },
    registerText: {
        fontSize: 16,
    },
    registerLink: {
        fontSize: 16,
        color: "#1795DE",
        fontWeight: "600",
    },
});
