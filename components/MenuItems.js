import { View, Text, ScrollView, StyleSheet } from "react-native";

const menuItemsToDisplay = [
    ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta \n',
]

const MenuItems = () => {
    return(
        <View style={menuStyles.menuContainer}>
            <ScrollView 
            indicatorStyle={'white'}  
            horizontal={false}
            style={menuStyles.scrollViewContainer}>
                <Text style={menuStyles.headerText}> Menu Items</Text>
                <Text style={menuStyles.itemText}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

const menuStyles = StyleSheet.create({
    menuContainer: {
        flex: 0.75
    },
    scrollViewContainer: {
        padding: 20,
        backgroundColor: "black",
    },
    headerText: {
        fontSize: 40,
        flexWrap: "wrap",
        color: "white",
    },
    itemText: {
        color: "white", 
        fontSize: 30,
        padding: 10
        },
})

export default MenuItems