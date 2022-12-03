import {useEffect, useState} from 'react'
// import axios from 'axios';

import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ScrollView,
    Dimensions,
} from 'react-native'

import Navbar from './Navbar'

const {height, width} = Dimensions.get("window");


function Category({ navigation, route }) {

    const [datas, setData] = useState(route.params.gendre)

    const handleAction = (a) => { 
        datas.map((list) => {
            navigation.navigate('Halamankategoris',{
                kategori : datas
            })
        })
           
    }


    return (
        <View horizontal={false}  style={{backgroundColor: "black", flex: 1}} >
            <View>
                <Navbar navigation={navigation}/>
            </View>

            <View>
                <Text style={styles.title_Categori}>
                    GENRE
                </Text>
            </View>


            <FlatList
                    data={datas}
                    renderItem={({ item, index }) => 
                            <TouchableOpacity onPress={handleAction} style={styles.list_kategori}>
                                <Text style={styles.text} >
                                    {item.nama_kategori}
                                </Text>
                            </TouchableOpacity>
                    }
                    keyExtractor={(item) => item.id}
                    
                />
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,

    },
    list_kategori : {
        borderColor: "#FF9900",
        borderWidth: 1,
        alignItems: "center",
        marginHorizontal: 40, 
        marginVertical: 15, 
        padding: 30, 
    },
    text : {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
    },
    title_Categori : {
        color: "white", 
        fontSize: 30, 
        borderBottomWidth: 2, 
        borderColor: "white",
        paddingHorizontal: 10,
         paddingBottom: 10, 
         marginLeft: 10 
    }

})


export default Category
