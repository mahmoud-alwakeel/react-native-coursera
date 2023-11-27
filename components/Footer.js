import { View, Text } from "react-native";

export default function Footer() {
    return (
        <View style={{ 
            flex: 0.06,
            marginBottom: 10, 
            backgroundColor: '#EE9972',
            }}>
            <Text style={{
                padding: 10,
                fontSize: 20,
                color: 'black',
                textAlign: 'center',
                fontStyle: "italic"
            }}>All copy rights reserved by little lemon, 2023</Text>
        </View>
    )
}