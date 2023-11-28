import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import MenuItems from './components/MenuItems';
import MenuItemsSection from './components/MenuItemsSection';
import FeedBackForm from './components/feedbackform';

export default function App() {
  return (
    <>
    <View
      style={
        styles.container
      }>
      <LittleLemonHeader />
      <FeedBackForm />
      {/* <Welcome /> 
       <MenuItems />
      <MenuItemsSection /> */}
    </View>
    <View style={styles.footerContainer}>
      <Footer />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    // justifyContent: "space-between"
  },
  footerContainer: { backgroundColor: '#333333' },
})