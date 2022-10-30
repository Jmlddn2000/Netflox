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
            <View style={styles.slidefilm}>
                <TouchableOpacity onPress={handleInput}>
                    <Image style={styles.img} resizeMode={'stretch'} source={{ uri: image }} />
                    <View style={{ backgroundColor: "#181818", padding: 5 }}>
                        <Text numberOfLines={1} style={{ color: "white", width: "100%" }}>{title}</Text>
                        <Text style={{ color: "white", fontSize: 10, alignSelf: 'flex-end' }}>
                            <IconStar2 fill="yellow" width={10} height={10} />
                            8.6
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

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
