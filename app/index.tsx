import { useRouter } from "expo-router";
import {
    Image,
    Text,
    ScrollView,
    View,
    StyleSheet,
    FlatList,
    Button,
} from "react-native";

// Tipe data untuk setiap item dalam list
type DataItem = {
    imageuri: string;
    name: string;
    age: number;
    city: string;
};

export default function Home() {
    const data: DataItem[] = [
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "S.Coups",
            age: 27,
            city: "Seoul",
        },
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "wahyuuu",
            age: 27,
            city: "LA",
        },
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "S.Coups",
            age: 27,
            city: "Seoul",
        },
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "wahyuuu",
            age: 27,
            city: "LA",
        },
    ];

    const renderItem = ({ item }: { item: DataItem }) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.imageuri }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.age}>Age: {item.age}</Text>  
                <Text style={styles.city}>City: {item.city}</Text>
            </View>
        );
    };
    const router = useRouter();
    return (
        <View style={styles.container}>
            <ScrollView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.name + item.city}
                />
                <Button
                    onPress={() => router.push("/login")} title="Go to login"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8F5E9", 
        padding: 10,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        alignItems: "center",
        shadowColor: "#4E342E",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        borderWidth: 1,
        borderColor: "#A1887F", 
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: "cover",
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#2E7D32",
        marginBottom: 5,
    },
    age: {
        fontSize: 16,
        color: "#6D4C41", 
        marginBottom: 3,
    },
    city: {
        fontSize: 16,
        color: "#388E3C", 
    },
});
