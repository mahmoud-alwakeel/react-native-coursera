import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
        justifyContent: "space-between"
      }}>
      <LittleLemonHeader />
      <Welcome />
      <Footer />
    </View>
  );
}