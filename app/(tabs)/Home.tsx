import { useRouter } from "expo-router";
import {
    Image,
    Text,
    ScrollView,
    View,
    StyleSheet,
    FlatList,
    TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";


type DataItem = {
    imageuri: string;
};

export default function Home() {
    const data: DataItem[] = Array(10).fill({
        imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
    });

    const renderItem = ({ item }: { item: DataItem }) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.imageuri }} style={styles.image} />
                <Text style={styles.name}>Merbabu</Text>
                <Text style={styles.price}>Rp.500.000</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                    <TextInput placeholder="Search" style={styles.searchInput} />
                    <Ionicons name="search" size={20} color="black" />
                  </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
    },
    searchContainer: {
        width: "100%",
        marginBottom: 10,
    },
    searchInput: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
    },
    listContainer: {
        paddingHorizontal: 5,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        margin: 5,
        alignItems: "center",
        width: "47%",
        borderWidth: 1,
        borderColor: "#ddd",
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginBottom: 10,
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5,
    },
    price: {
        color: "blue",
        fontSize: 14,
    },
});
