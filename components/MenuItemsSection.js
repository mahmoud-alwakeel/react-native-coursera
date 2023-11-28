import { View, Text, SectionList, StyleSheet } from "react-native"

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

const Separator = () => <View style={menuStylesSection.separator}/>

const Footer = () => (
    <Text style={menuStylesSection.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
  );
  
const Item = ({name, price}) => (
    <View style={menuStylesSection.innerContainer}>
       <Text style={menuStylesSection.itemText}>{name}</Text>
       <Text style={menuStylesSection.itemText}>{price}</Text>
    </View>
)  

export default MenuItemsSection = () => {
    const renderItem = ({item}) => <Item name={item.name} price={item.price}/>

    const renderSectionHeader = ({section: {title}}) => (
        <Text style={menuStylesSection.headerText}>{title}</Text>
    ) 
    return(
        <View style={menuStylesSection.menuContainer}>
            <SectionList 
            keyExtractor={(item, index) => item + index}
            sections={menuItemsToDisplay} 
            renderItem={renderItem}
            ItemSeparatorComponent={Separator}
            renderSectionHeader={renderSectionHeader}
            ListFooterComponent={Footer}
            ></SectionList>
        </View>
    )
}

const menuStylesSection = StyleSheet.create({
    menuContainer: {
        flex: 0.95
    },
    innerContainer: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        backgroundColor: "black",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: "#EDEFEE"
    },
    headerText: {
        fontSize: 40,
        flexWrap: "wrap",
        color: "white",
    },
    itemText: {
        color: "#F4CE14", 
        fontSize: 30,
        padding: 10
        },
    footerText: {
        color: '#EDEFEE',
        fontSize: 20,
        flexWrap: 'wrap',
        textAlign: 'center',
      },
})