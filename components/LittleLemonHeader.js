import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.10, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          paddingHorizontal: 40,
          paddingTop: 40,
          fontSize: 30,
          color: 'black',
          textAlign: 'center',
        }}>
        Little Lemon
      </Text>
    </View>
  );
}