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
import IconStar2 from '../asset/IconStar2'




function Item_Gendre({ title, tahun, durasi, image, navigation }) {

    const handleInput = () => {

        navigation.navigate('Description_film', {
            title: title,
            tahun: tahun,
            durasi: durasi,
            image: image,
        })

    }
    return (
        <View>

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

    }

})

export default Item_Gendre
