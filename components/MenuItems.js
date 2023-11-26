import { View, Text, ScrollView } from "react-native";

const menuItemsToDisplay = [
    ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta \n',
]

const MenuItems = () => {
    return(
        <View style={{flex: 1}}>
            <ScrollView 
            indicatorStyle={'white'}  
            horizontal={false}
            style={{
                padding: 20,
                backgroundColor: "black",  
                marginBottom: 150  
            }}>
                <Text style={{
                    fontSize: 40,
                    flexWrap: "wrap",
                    color: "white"
                }}> Menu Items</Text>
                <Text style={{
                    color: "white", 
                    fontSize: 30,
                    padding: 10
                    }}>
                    {menuItemsToDisplay[0]}
                </Text>
            </ScrollView>
        </View>
    )
}

export default MenuItems