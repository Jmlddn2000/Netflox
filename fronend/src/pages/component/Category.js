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
import Item_Gendre from './Item_Gendre'

const {height, width} = Dimensions.get("window");


function Category({ navigation, route }) {

    useEffect(()=> {
        fetch('https://easy-snaps-frog.cyclic.app/kategori')
        .then((response) => response.json())
        .then((data) => setData(data))
    },[])

    const [datas, setData] = useState()

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
                            <Item_Gendre
                               
                                id = {item._id}
                                nama = {item.nama_kategori}
                                navigation = {navigation}
                            />
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
