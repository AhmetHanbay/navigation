import React from "react";
import { View, Text, Button, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default Fıyat = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Mercedes-Benz_Star_2022.svg/800px-Mercedes-Benz_Star_2022.svg.png' }}
                style={{ width: 50, height: 50, marginStart: 170, marginTop: 20 }}
            />
            <View>
                <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10, marginLeft: 8, fontSize: 18}}>KOMPAKT</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>A serisi Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Yeni A 200 AMG Benzin 163 bg 7G-DCT  {"\n"}Satış Fiyatı : 1.990.500 TL</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Yeni Mercedes-AMG A 45 S 4MATIC + Performance Benzin 421 bg AMG SPEEDSHIFT DCT {"\n"}Satış Fiyatı : 3.656.500 TL </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>B serisi Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Yeni B 200 Progressive Benzin 163 bg 7G-DCT {"\n"}Satış Fiyatı : 2.126.500 TL </Text>
            </View>
            <View>
                <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10, marginLeft: 8, fontSize: 18 }}>SEDAN</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>Yeni A serisi Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Yeni A 200 Sedan AMG Benzin 163 bg 7G-DCT {"\n"}Satış Fiyatı : 2.048.500 TL
                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>C serisi Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>C 200 4MATIC Avantgarde Benzin 204 bg 9G-TRONIC {"\n"}Satış Fiyatı : 2.855.500 TL
                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>C 200 4 MATIC AMG Benzin 204 bg 9G-TRONIC {"\n"}Satış Fiyatı : 2.976.000 TL

                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Mercedes - AMG C 43 4 MATIC Performance Benzin 408 bg AMG SPEEDSHIFT MCT {"\n"}Satış Fiyatı : 4.498.500 TL

                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>EQE Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>EQE 350 4MATIC AMG Elektrik- 292 bg {"\n"}Satış Fiyatı : 3.741.500 TL

                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Mercedes-AMG EQE 53 4 MATIC + Performance Elektrik-625 bg {"\n"}Satış Fiyatı : 5.218.000 TL


                </Text>
            </View>
            <View>

                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>E serisi Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>E 200 d Exclusive Dizel 160 bg 9G-TRONIC {"\n"}Satış Fiyatı : 3.529.000 TL


                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>E 200 d AMG Dizel 160 bg 9G-TRONIC {"\n"}Satış Fiyatı : 3.570.500 TL


                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>E 300d 4MATIC Exclusive Dizel 265 bg 9G-TRONIC {"\n"}Satış Fiyatı : 5.066.000 TL



                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>E 300d 4MATIC AMG Dizel 265 bg 9G-TRONIC {"\n"}Satış Fiyatı : 5.126.500 TL


                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Mercedes-AMG E 63 S 4MATIC+Performance Benzin 612 bg AMG SPEEDSHIFT MCT {"\n"}Satış Fiyatı : 10.176.500 TL


                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>EQS Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>EQS 450 4MATIC Inspiration Elektrik- 360 bg Satış Fiyatı : 5.327.500 TL


                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>EQS 580 4MATIC HeritageEdition Elektrik-523 bg{"\n"}Satış Fiyatı : 6.378.000 TL


                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Mercedes-AMG EQS 53 4MATIC+Performance Elektrik-658 bg {"\n"}Satış Fiyatı : 6.777.500 TL


                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 17, fontWeight: 'bold' }}>Mercedes-Maybach S-Serisi Fiyat Listesi</Text>
            </View>
            <View>
                <Text style={{ color: 'white', marginLeft: 8, marginTop: 10, fontSize: 16, borderWidth: 1, borderColor: 'white', borderRadius: 10, padding: 10 }}>Mercedes-Maybach S 580 4MATIC Inspiration+ Benzin 503 bg 9G-TRONIC {"\n"}Satış Fiyatı : 17.979.500 TL


                </Text>
            </View>
            <View style={{ marginBottom: 20 }}>

            </View>
        </ScrollView>
    )
}