import React, { useEffect, useState } from 'react';
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




function Item({ title, tahun, durasi, image, navigation, overview, descripsi, garis_cerita, umur, rating, gendre, gambar_artis, key  }) {

    const handleInput = () => {

        navigation.navigate('Description_film', {
            title: title,
            tahun: tahun,
            durasi: durasi,
            image: image,
            overview: overview,
            descripsi : descripsi,
            garis_cerita : garis_cerita,
            umur : umur,
            rating : rating,
            gendre : gendre,
            gambar_artis : gambar_artis
        })

    }
    return (
        <View>
            <View style={styles.slidefilm}>
                <TouchableOpacity onPress={handleInput}>
                    <Image style={styles.img} resizeMode={'stretch'} source={{ uri: image }} />
                    <View style={{ backgroundColor: "#181818", padding: 5 }} >
                        <Text numberOfLines={1} style={{ color: "white", width: "100%" }}>{title}</Text>
                        <Text style={{ color: "white", fontSize: 10, alignSelf: 'flex-end' }}>
                            <IconStar2 fill="yellow" width={10} height={10} />
                            {rating}
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
        // addingHorizontal: 20,
        width: width / 4,
        marginHorizontal: width / 50,

    }

})

export default Item
