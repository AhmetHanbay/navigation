import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Deta from "./Deta";
import Fıyat from "./Fıyat";
import Iletısım from "./Iletısım";

export default HomeScreen = () => {
    const navigation = useNavigation()
    return (

        <View style={{ flex: 1, backgroundColor: 'black' }}>
            <ScrollView>
                <View>
                    <View style={{ position: 'absolute', top: 5, left: 10 }}>
                        <Button
                            title="Modeller"
                            color={'#818183'}
                            onPress={() => navigation.navigate('Deta')}
                        />
                    </View>
                    <View style={{ position: 'absolute', top: 5, left: 100 }}>
                        <Button
                            title="Fiyat Listesi"
                            color={'#818183'}
                            onPress={() => navigation.navigate('Fıyat')}
                        />
                    </View>
                    <View style={{ position: 'absolute', top: 5, right: 10 }}>
                        <Button
                            title="İletişim"
                            color={'#818183'}
                            onPress={() => navigation.navigate('Iletısım')}
                        />
                    </View>



                    <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/800px-Mercedes-Benz_Star_2022.svg.png' }}
                        style={{ width: 50, height: 50, marginTop: 50, marginStart: 175, }}
                    />

                </View>
                <Text style={{ marginTop: 10, marginStart: 125, fontWeight: 'bold', color: '#818183', fontSize: 20 }}>Mercedes-Benz</Text>

                <Image source={{ uri: 'https://www.mercedes-benz.com.tr/content/turkey/tr/passengercars/_jcr_content/root/responsivegrid/simple_stage_1564354.component.damq6.3380843805327.jpg/mercedes-benz-cla-coupe-c118-stage-3840x3840-08-2023.jpg' }}
                    style={{ width: 384, height: 180, borderRadius: 3, marginTop: 30 }}
                />
                <Text style={{ color: 'black', marginTop: -110, marginLeft: 20, fontWeight: 'bold', fontSize: 20 }}>Yeni CLA.</Text>
                <Text style={{ color: 'black', marginTop: 10, marginLeft: 20, fontSize: 10 }}>Tarzını öne sür.</Text>
                <Image source={{ uri: 'https://www.mercedes-benz.com.tr/content/turkey/tr/passengercars/models/saloon/c-class/overview/_jcr_content/root/responsivegrid/simple_stage.component.damq6.3339349519438.jpg/mercedes-benz-c-class-w206-stage-3840x1707-06-2022.jpg' }}
                    style={{ width: 384, height: 180, borderRadius: 3, marginTop: 85 }}
                />
                <Text style={{ color: 'white', marginTop: -110, marginLeft: 20, fontWeight: 'bold', fontSize: 20 }}>C-Serisi Sedan.</Text>
                <Text style={{ color: 'white', marginTop: 10, marginLeft: 20, fontSize: 10 }}>Konfor alanına hoş geldin.</Text>
                <Image source={{ uri: 'https://www.mercedes-benz.com.tr/content/turkey/tr/passengercars/models/saloon/v297/overview/_jcr_content/root/responsivegrid/simple_stage.component.damq6.3372217794124.jpg/mercedes-eq-eqs-v297-stage-3840x1707-08-2022.jpg' }}
                    style={{ width: 384, height: 180, borderRadius: 3, marginTop: 85 }}
                />
                <Text style={{ color: 'white', marginTop: -110, marginLeft: 20, fontWeight: 'bold', fontSize: 20 }}>EQS.</Text>
                <Text style={{ color: 'white', marginTop: 10, marginLeft: 20, fontSize: 10 }}>Dünya, bu senin için.</Text>
                <Image source={{ uri: 'https://www.mercedes-benz.com.tr/content/turkey/tr/passengercars/models/suv/glb/overview/_jcr_content/root/responsivegrid/simple_stage.component.damq6.3346015728508.jpg/mercedes-benz-glb-x247-stage-3840x1707-05-2022.jpg' }}
                    style={{ width: 384, height: 180, borderRadius: 3, marginTop: 85 }}
                />
                <Text style={{ color: 'white', marginTop: -110, marginLeft: 20, fontWeight: 'bold', fontSize: 20 }}>GLB.</Text>
                <Text style={{ color: 'white', marginTop: 10, marginLeft: 20, fontSize: 10 }}>Sıradaki hikayede herkese yer var.</Text>
                <View style={{ marginBottom: 100 }}></View>
            </ScrollView>
        </View>

    )
}
