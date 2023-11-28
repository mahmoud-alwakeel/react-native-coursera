import { View, Text, SectionList, StyleSheet } from "react-native"

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        'Hummus',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
  ];

const Separator = () => <View style={menuStylesSection.separator}/>

const Footer = () => (
    <Text style={menuStylesSection.footerText}>
      All Rights Reserved by Little Lemon 2022
    </Text>
  );
  
const Item = ({name}) => (
    <View style={menuStylesSection.innerContainer}>
       <Text style={menuStylesSection.itemText}>{name}</Text>
    </View>
)  

export default MenuItemsSection = () => {
    const renderItem = ({item}) => <Item name={item}/>

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