import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
        justifyContent: "space-between"
      }}>
      <LittleLemonHeader />
      <Footer />
    </View>
  );
}