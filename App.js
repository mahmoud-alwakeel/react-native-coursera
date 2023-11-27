import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import MenuItems from './components/MenuItems';

export default function App() {
  return (
    <View
      style={
        styles.container
      }>
      <LittleLemonHeader />
      {/* <Welcome /> */}
      <MenuItems />
      {/* <Footer /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    // justifyContent: "space-between"
  },
})