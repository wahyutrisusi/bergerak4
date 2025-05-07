import { Tabs } from "expo-router";

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen name="Home" />
            <Tabs.Screen name="list" />
            <Tabs.Screen name="About" />
        </Tabs>
    ); 
}