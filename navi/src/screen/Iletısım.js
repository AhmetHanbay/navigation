import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default Iletısım = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
            <Text>DetailsScreen Ekranı</Text>
            <Button
                title="Anasayfaya Dön"
                color={'#818183'}
                onPress={navigation.goBack} />
        </View>
    )
}