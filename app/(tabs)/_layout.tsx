import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = "home-outline";
                    } else if (route.name === "list") {
                        iconName = "reorder-three-outline";
                    } else if (route.name === "About") {
                        iconName = "person-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#000", // warna aktif (hitam)
                tabBarInactiveTintColor: "gray", // warna non-aktif
                headerShown: false,
            })}
        >
            <Tabs.Screen name="Home" />
            <Tabs.Screen name="list" />
            <Tabs.Screen name="About" />
        </Tabs>
    );
}
