import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native'

import Navbar from './Navbar';
import Item from './Item';

export const { height, width } = Dimensions.get("window");


function Home({ navigation }) {

    const NavigateCategory = () => {

        navigation.navigate('Category',{
            data : listData
        })

    }

    useEffect(()=> {
        fetch('https://easy-snaps-frog.cyclic.app/filmArtis')
        .then((response) => response.json())
        .then((data) => setListData(data))
    },[])

    useEffect(()=> {
        fetch('https://easy-snaps-frog.cyclic.app/filmtop')
        .then((response) => response.json())
        .then((data) => setTopFilm(data))
    },[])

    const [listData, setListData] = useState()
    const [topfilm, setTopFilm] = useState()


    return (
        <ScrollView style={{ backgroundColor: "black" }}>
            <View style={{ paddingBottom: 50 }}>

                <View >
                    <Navbar navigation={navigation} data = {listData}/>
                </View>

                <View>
                    <TouchableOpacity>
                        <Image
                            source={require('../img/ghost.jpg')}
                            style={styles.img} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.tilte}>Ghost Writer</Text>
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
                            // artis_artis = {item.id_artis.id_film_artis}
                            navigation={navigation}
                        />}

                    keyExtractor={(item) => item.id_film_artis}
                    horizontal={true}
                />

                <Text style={styles.Title_Bagian}>Top Film</Text>

                <FlatList
                    data={topfilm}
                    renderItem={({ item, index }) =>
                        <Item
                            title={item.title}
                            tahun={item.tahun_terbit}
                            umur={item.umur}
                            overview={item.overview}
                            descripsi={item.descripsi}
                            garis_cerita={item.garis_cerita}
                            durasi={item.durasi}
                            image={item.gambar}
                            rating = {item.rating}
                            gendre = {item.gendre}
                            // gambar_artis = {item.id_artis.gambar}
                        // gambar_artis = {item.id_artis.gambar}
                            navigation={navigation}
                        />}

                    keyExtractor={(item) => item.id_film}
                    horizontal={true}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.Title_Bagian}>More To Explore</Text>

                </View>

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
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    img: {
        width: width,
        height: height / 2

    },
    logo: {
        color: "red",
        fontSize: 30,
        fontWeight: "bold"
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
    tilte: {
        color: "#FF9900",
        fontSize: 50,
        fontWeight: "bold",
        marginLeft: '3%'
    },
    SeeAll: {
        color: "white",
        marginVertical: 30,
        marginLeft: 50,
        fontSize: 15,
        fontWeight: 'bold'

    }

})

export default Home