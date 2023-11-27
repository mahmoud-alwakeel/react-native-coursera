import { View, Text, ScrollView } from "react-native";

export default Welcome = () => {
    return(
        // <View style={{flex:1, color: "#333333"}}>
            <ScrollView indicatorStyle="white" style={{ flex: 1 }}>
            <Text style={{
                paddingTop: 40,
                color: "white",
                textAlign: "center",
                fontSize: 34
            }}>Welcome to Little Lemon 
            </Text>
            <Text style={{
                    paddingTop: 20,
                    fontSize: 24,
                    color: "white",
                    textAlign: "center",
                    padding: 12
                }}>Little Lemon is a charming neighborhood bistro
                 that serves simple food and classic cocktails in 
                 a lively but casual environment. We would love 
                 to hear more about your experience with us!
            </Text>
            </ScrollView>
        // </View>
    )
}