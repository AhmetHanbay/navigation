import React from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default Deta = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black', }}>

            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZUnRZbMw3SGtlaStsd2HVcUfpOkXGEubSJ0l3IrOB2NS1bApj7pI5uVKMQC31MTkzNwPnm7jZcohKV5Kh%25vqCuqyLRgcDYaxPXSrH1eHDn8wso3oiZUIXM4FnRJTg9o6n6PDCroSeWzQWtsd8hdcUfiUNXGE49dJ0lg6fOB2Pb%25bApeIoI5usKYQC3UvWkzNL6Sm%25kbFDZ1OtsdB%25ycJtj9GXOcSsmJ0l4YfOB2iMwbAp0ioI5u9BlQC3zgOkzN7P9m7jKevhKUWP3IrZxD%25WLygL6uVS%25qjuaa1frEROqEyJlfDADSjSiNsG8u4NLwaEQqE&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10,marginTop:25 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>EQE Sedan
            </Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>Azami 574 km Tamamen elektrikli menzil.</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0YFqtyO67PobzIr3eWsrrCsdRRzwQZUnRZbMw3SGtlKStsd2HtcUfp8qXGEubYJ0l3CJOB2qBEbApRipI5ux6YQC31vTkzNBTnm7jA7mhKV50E%25vqCrqyLRgc6YaxPa9rH1eCln8wsocoiZUMNM4FGQJTg90b96PDMSoSeWznMtsd7oVcUfKMjXGEvhEJ0lgYlOB2PBqbApekRI5usm1QC3UXpkzNGm6m7j0aohKVHtc%25YhQDd9ZIXGE5YrJbXqWBOIJcG%25bApPnlI5ug6FQC3AgrkzN5P6m7jCcmhKVzcZ%25vqE4CyLRaGfYaxH08rH18MOn8520R%256d9lo24MA4F0wOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 170, height: 100, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>EQS Sedan</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>678km’ye kadar tamamen elektrikli menzil. </Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtle9tsd2HdcUfp8qXGEubSJ0l3IJOB2NMcbApjtwI5uGoxQC30CQkzNBtum7j86ZhKViKw%25vq4y9yLRhGVYax%25ohrH1yn%25n8w0zEoiZB%25YM4FAOFTg9LQ96PDar6SeWHnRtsd8c%25cUfiA1XGEWnjJ0lCrnOIJtR1qjSoiZeIQM6o2xgTSMniV6PDLcDSeWvyVtsdPJ%25cUfxpBXGE0aSJ0lBHAOB2A8EbAp5ToI5uCfJQCPFi2J%25xVZkFPqg73z3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>A Sedan</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>5,7 Litre/100 km (karma)</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqaSFqtyO67PobzIr3eWsrrCsdRRzwQZg9pZbMw3SGtle9tsd2HdcUfp8qXGEubmJ0l3ItOB2NQnbApjtwI5uVQDQC31MjkzNwzwm7jZcohKV5Kh%25vqCuqyLRgcDYaxPa9rH1endn8wso3oiZr7YM4FnTrTg95hp6PDCroSeWz0jtsd8hdcUfiFWXGE4TXJ0lgOhOB2PbnbApe7yI5usKuQC3UvWkzNL6Sm%25kbFDZ1OtsdB%25ycJtj9GXOcSsSJ0l4DlOB2iMwbAp0ioI5uBeYQC3DlHkzN7Pbm7jKeDhKVvsL%25vqLUcyLRaARYaBEUVmMDZfrE8qYOwRxXr1RjiiF2MpwQ1pnIu2fzfXRXPq0Agjeq89iph1p&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>C Sedan</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>7 Litre Tüketim (karma)</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZzk4ZbMw3SGtGyStsd2sDcUfp8qXGEubYJ0l36xOB2NbFbApRnoI5uxoNQC30CQkzNHTwm7j871hKVk0Q%25vqmI9yLRhYmYaxU58rH1GCun8w0hyoiZB%25gM4FvIMTg9LxZ6PDar6SeWHtRtsd8BQcUfAyYXOc6VRj3TrH1gObnMrEqioTnYH1M4Fzm3Tg9izk6PD4LbSeWgXhtsdRGKcUfG%25yXGE0aBJ08xLdSQjuROxAcRnyxlYO2EW553wQZpT2ZbMFwRPRYEY7fHizWKfAN5Zt2Z&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>E Sedan</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>5,9 l/100 km</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqrSFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtle2tsd2vtcUfp8cXGEubYJ0l36xOB2NS5bApjIXI5uVKDQC31MrkzNwTbm7jZ73hKVFsM%25vq9UkyLRDGfYaxWbSrH1KJtn8wvOyoiZLbgM4Fa4MTg9Hvk6PD8cqSeWiyMtsd4YtcUfC%25kXGEzG3J0l7IVOB2KQObApvdyI5uLfJQC3akOkzNHmdm7j8MIhKVk%25Q%25vqmyDyLRsGHYaxU0drH1GCln8w0hEoiZBMlM4FvIFTg9Lg26PDacpSeWHyWtsd8ZDcUfiMfXGE4TdJ0lgOhOB2PbnbApe7yI5usK2QC32hOkzNLT9m7jaSthymI9WFwbcUfAyYXOcVD0JbXtUhOB2grcbAp4xXGrYK1J0crdwOBiTpZbAIpgFI5QI19QCkQNDkzm6gWm7hXPdhce6CF2iaPfeyjPoBqKVfv75YYHU2GLwvGE10UPbPV7VoztXn5Mzy8YG9vG&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 170, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 210, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>Mercedes-Maybach S-Serisi</Text>
            <Text style={{ color: '#818183', marginLeft: 200, marginTop: 10, fontSize: 12 }}>12.0 - 11.1 l/100 km</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtle9tsd2HdcUfp8qXGEubSJ0l3IJOB2NMcbApjTlI5uVcZQC31C1kzNwtnm7jA7mhKV5XN%25vq4t9yLRgcRYaxPa9rH1ejqn8wsbfoiZr51M4FnSrTg9o6n6PDC7NSeWza3tsd7oTcUfKmfXGE4yEJ0lg6JOB2PSFbApeIoI5usKxQC3UvWkzNptwm7jaSthymI9WFwbcUfAyYXOcVD0JbXtUZOB2iRcUY2LxXGH4E1J0OrqwOBbnIZbAIo0FI5Qj39QCkGwDkSgMAwEHv4Wghe6AzmzNW7CB%25%25LeEsKx7sdRUe4J4NCNr56tYBn5ha%25sZ7s&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>GLB</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>Azami 163 BG Nominal güç</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqaSgqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtlaWtsd2JQcUfpO6XGEuTRJ0lV0fOB2qBnbApRTyI5uG5IQC30E3kzNHTnm7j8h1hKVk%25Q%25vqeUdyLRsOWYaxUkhrH1Gmin8w0PwoiZKbZM4FvSlTg9LxZ6PDar6SeWHthtsd8BdcUfiA1XGE5YrJbXSqxVN6n8wPbIoTnlR4M6or8JTg9vh26PDK%25jSeWgKhtsdR4zcUfGUyXGE0aRJ0lBHAOB2A8nbAp5PpI5gZ8lXhRjwQZz3BlwCuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>GLC</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>125/170kW/PS (BG)</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtByStsdB%25ycJtTjqNuMYax4JOroYfV8nMryayoiZGk1M4F0sJTg9BmO6PDdhoSeWfSStsdE1tcUflwfXGE2hEJ0lp%25fOB2u5EbAp3CoI5uE5ZQC3lXFkzN2Lwm7jpSohKVuzQ%25vq3ajyLRnGfYaxoOJrH1M6dn8wTqcoiZAMXM4FzmjTg9izT6PD4%25DSeWgnjtsdPyDcUfeZkXGEmijJ0lwrrOB2ZtcbApF09I5ubIYQC3Ok3kzN9tdm7jDtIhKVWIt%25vqdo%25yLRqQmYaxn0YrH1IHin8520R%256d9lo2mzlKuKwOoZ1qggDu63FmZ3MkNulKlO1OsxACeqUx4Wg3yZ3&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>G-Serisi</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>Azami 100 %Tırmanma kapasitesi</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZg9BZbMw3SGtle9tsd2HdcUfp8qXGEubSJ0l3IJOB2NMcbApjtwI5uGoxQC30CQkzNBtum7j86ZhKViKw%25vq4y9yLRhGVYax%25ohrH1yn%25n8w0zEoiZB%25YM4FAOMTg9LQ96PDar6SeWHnRtsd8c%25cUfiA1XGEWnjJ0lCrnOIJtR1qjSoiZeIQM6o2xgTSMniV6PDLcDSeWvyVtsdPJ%25cUfxpBXGE0aSJ0lBHAOB2A8EbAp5ToI5uCfJQCPFi2J%25xVZkFPqg63z3MkNulKKqD%25WjcNWmtdDZGZMuMapgeLlHp7RKWONW&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>A-Serisi.</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>5,8 Litre/100 km (karma)</Text>
            <Image source={{ uri: 'https://assets.oneweb.mercedes-benz.com/iris/iris.png?COSY-EU-100-1713d0VXqNEFqtyO67PobzIr3eWsrrCsdRRzwQZxkIZbMw3SGtle9tsd2HdcUfp8qXGEubSJ0l3IJOB2NMcbApjtwI5uVQDQC31C1kzNwtnm7jA6ZhKV5Kh%25vqCJjyLRgcDYaxPa9rH1endn8wYAxoiZr6YM4FnTrTg95vp6PDCroSeWzQStsd8hdcUfiMcXGE4TwJ0lgOrOB2PzFbApETRI5uKMTQmIJwF1RX6PDGmhSc63ZstXSTPxcUf8OfXGEHnxJ0lw35OB2A8cbAp5iCI5uC42QC3zSTkzN7lbm7sDgubYwR9hDsQABjKj6hVNpLLxdYfqJVf%25XEd9B96N683eUHpi3v1LfIVf&imgt=P27&bkgnd=9&pov=BE140&uni=cs&im=Crop,rect=(0,0,1450,750),gravity=Center;Resize,width=600' }}
                style={{ width: 150, height: 100, marginLeft: 10, marginTop: 50 }}
            />
            <Text style={{ color: '#818183', marginLeft: 240, marginTop: -90, fontWeight: 'bold', fontSize: 17 }}>Yeni CLA.</Text>
            <Text style={{ color: '#818183', marginLeft: 180, marginTop: 10, fontSize: 12 }}>Toplam tüketim (karma) 8,9 l/100km</Text>
            <Text></Text>
            <Text></Text>
            <Button
                title="Anasayfaya Dön"
                color={'#818183'}
                onPress={navigation.goBack} />

        </ScrollView>

    )
}