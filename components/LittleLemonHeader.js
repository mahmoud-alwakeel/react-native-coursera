import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text
        style={headerStyles.headerText}>
        Little Lemon
      </Text>
    </View>
  );
}

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.10, 
    backgroundColor: '#F4CE14'
  },
  headerText: {
    paddingHorizontal: 40,
    paddingTop: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
})