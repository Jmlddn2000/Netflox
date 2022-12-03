import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    FlatList,
    ScrollView
} from 'react-native'
import Navbar from './Navbar';
import Item from './Item';
const { height, width } = Dimensions.get("window");


function Halamankategoris({ navigation, route }) {

    useEffect(()=> {
        fetch('https://easy-snaps-frog.cyclic.app/filmArtis')
        .then((response) => response.json())
        .then((data) => setListData(data))
    },[])

    const [listData, setListData] = useState()
    return (
        
        <View style={{backgroundColor: "black", flex: 1 }}>

            <View>
                <Navbar navigation={navigation}/>
            </View>

            <Text style={styles.Title_Bagian}>Featured today</Text>

         <FlatList
                data={listData}
                renderItem={({ item, index }) =>
                    <Item
                        title={item.id_film.title}
                        tahun={item.id_film.tahun_terbit}
                        umur={item.id_film.umur}
                        overview={item.id_film.overview}
                        descripsi={item.id_film.descripsi}
                        garis_cerita={item.id_film.garis_cerita}
                        durasi={item.id_film.durasi}
                        image={item.id_film.gambar}
                        rating = {item.id_film.rating}
                        gendre = {item.id_film.gendre}
                        gambar_artis = {item.id_artis.gambar}
                        navigation={navigation}
                    />}

                keyExtractor={(item) => item.id_film_artis}
                horizontal={true}
            /> 

            <Text style={styles.Title_Bagian}>Top Film</Text>

        <FlatList
                data={listData}
                renderItem={({ item, index }) =>
                    <Item
                        title={item.id_film.title}
                        tahun={item.id_film.tahun_terbit}
                        umur={item.id_film.umur}
                        overview={item.id_film.overview}
                        descripsi={item.id_film.descripsi}
                        garis_cerita={item.id_film.garis_cerita}
                        durasi={item.id_film.durasi}
                        image={item.id_film.gambar}
                        rating = {item.id_film.rating}
                        gendre = {item.id_film.gendre}
                        gambar_artis = {item.id_artis.gambar}
                        navigation={navigation}
                    />}

                keyExtractor={(item) => item.id_film_artis}
                horizontal={true} 
         /> 

        </View>

    )
}

const styles = StyleSheet.create({
    img: {
        width: width / 4,
        height: height / 5,

    },
    Title_Bagian: {
        color: "white",
        fontSize: 30,
        paddingHorizontal: "3%",
        borderLeftWidth: 10,
        borderColor: "#FF9900",
        marginVertical: 30,
        marginLeft: width / 20,
        paddingLeft: width / 20
    },


})


export default Halamankategoris