import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
        // justifyContent: "space-between"
      }}>
      <LittleLemonHeader />
      {/* <Welcome /> */}
      <MenuItems />
      {/* <Footer /> */}
    </View>
  );
}