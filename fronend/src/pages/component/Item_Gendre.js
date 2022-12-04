import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'


const { height, width } = Dimensions.get("window");

function Item_Gendre({ id, nama, navigation }) {

    const handleAction = () => { 
            navigation.navigate('Halamankategoris',{
                id : id,
                nama_kategori : nama
            })
           
    }
    

    return (
        <View > 
            <TouchableOpacity onPress={handleAction} style={styles.list_kategori}>
                <Text style={styles.text}>
                    {nama}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: width / 4,
        height: height / 5,

    },
    slidefilm: {
        width: width / 4,
        marginHorizontal: width / 50,

    },
    text : {
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
    },
    list_kategori : {
        borderColor: "#FF9900",
        borderWidth: 1,
        alignItems: "center",
        marginHorizontal: 40, 
        marginVertical: 15, 
        padding: 30, 
    },

})

export default Item_Gendre
