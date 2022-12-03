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

    useEffect(()=> {
        fetch('https://easy-snaps-frog.cyclic.app/kategori')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
        })
        ;
    },[])

    const [datas, setData] = useState()

    const handleAction = () => { 
        
        datas.map((list) => {
            navigation.navigate('Halamankategoris',{
                id : list._id
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
                                    {item.id}
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
