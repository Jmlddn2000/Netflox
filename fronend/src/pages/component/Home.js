import React, { useState } from 'react';
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

        navigation.navigate('Category')

    }
    const initialState = [
        {
            "id": 1,
            "Title": "The Lion King",
            "Year": "2019",
            "Runtime": "118 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"
        },
        {
            "id": 2,
            "Title": "Mowgli: Legend of the Jungle",
            "Year": "2018",
            "Runtime": "104 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMzODc2NzU5MV5BMl5BanBnXkFtZTgwNTMwMTE3NjM@._V1_SX300.jpg"
        },
        {
            "id": 3,
            "Title": "Doctor Strange",
            "Year": "2016",
            "Runtime": "115 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SX300.jpg"
        },
        {

            "id": 4,
            "Title": "John Wick",
            "Year": "2014",
            "Runtime": "101 min",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
        },
        {

            "id": 5,
            "Title": "The Notebook",
            "Year": "2004",
            "Runtime": "123 min"
        }

    ]

    const [listData, setListData] = useState(initialState)
    const [img, setImg] = useState()

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
                            title={item.Title}
                            tahun={item.Year}
                            durasi={item.Runtime}
                            image={item.Poster}
                            navigation={navigation}
                        />}

                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />

                <Text style={styles.Title_Bagian}>Top Film</Text>

                <FlatList
                    data={listData}
                    renderItem={({ item, index }) =>
                        <Item
                            title={item.Title}
                            tahun={item.Year}
                            durasi={item.Runtime}
                            image={item.Poster}
                            navigation={navigation}
                        />}

                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.Title_Bagian}>More To Explore</Text>
                    <TouchableOpacity onPress={NavigateCategory}>
                        <Text style={styles.SeeAll}>See All</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={listData}
                    renderItem={({ item, index }) =>
                        <Item
                            title={item.Title}
                            tahun={item.Year}
                            durasi={item.Runtime}
                            image={item.Poster}
                            navigation={navigation}
                        />}

                    keyExtractor={(item) => item.id}
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