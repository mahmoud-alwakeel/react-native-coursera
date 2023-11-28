import { useState } from "react";
import { View, Text, ScrollView, TextInput , StyleSheet} from "react-native";


export default function FeedBackForm() {
const [name, onNameChange] = useState('')
const [message, onMessageChange] = useState('')

    return(
        <View style={formStyle.container}>
            <ScrollView>
                <Text style={formStyle.headingText}>
                Welcome to Little Lemon
                </Text>
                <Text style={formStyle.infoText}>
                Little Lemon is a charming neighborhood bistro that serves simple food and classic
                cocktails in a lively but casual environment We would love to hear your experience 
                with us !
                </Text>
                <TextInput
                style={formStyle.nameInput}
                value={name}
                placeholder="Full Name"
                onChange={onNameChange}
                />
                <TextInput 
                style={formStyle.messageInput}
                value={message}
                placeholder="write your message here"
                onChange={onMessageChange}
                />
            </ScrollView>
        </View>
    )
}

const formStyle = StyleSheet.create({
    container: {
        flex:1,
        padding:18,
    },
    headingText: {
        fontSize:40,
        textAlign: "center",
        color: '#EDEFEE', 
        marginTop: 12,
    },
    infoText: {
        fontSize: 20,
        textAlign: "center",
        color: '#EDEFEE', 
        marginTop: 12,
        
    },    
    nameInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'EDEFEE', 
        backgroundColor: '#EDEFEE', 
        marginTop: 40,
        paddingLeft: 12
    },
    messageInput: {
        height: 150,
        borderWidth: 1,
        borderColor: 'EDEFEE', 
        backgroundColor: '#EDEFEE', 
        marginTop: 22,
        paddingLeft: 12
    }

})