import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

export default function List() {
    const data = [
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "merbabu",
            age: 27,
            city: "Seoul",
        },
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "gunung slamet",
            age: 27,
            city: "LA",
        },
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "gunung prau",
            age: 27,
            city: "Seoul",
        },
        {
            imageuri: "https://imigrasilampung.co.id/wp-content/uploads/2022/10/Kumpulan-Background-Kualitas-HD.png",
            name: "gunung rinjani",
            age: 27,
            city: "LA",
        },

    ];

    const renderItem = ({
         item 
        }: {
             item: { name: string; age: number; city: string}; 
            }) => {
        return (
            <View style={styles.container2}>
                <Image source={{ uri: item.imageuri }} style={styles.image} />
                <Text style={styles.text1}>{item.name}</Text>
                <Text style={styles.text2}>{item.age}</Text>  
                <Text style={styles.text3}>{item.city}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container2: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    text1: {
        fontSize: 20,
        fontWeight: "bold",
    },
    text2: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "italic",
    },
    text3: {
        fontSize: 20,
        fontWeight: "bold", 
        color: "red",
        fontVariant: ["small-caps"],
        }
});
