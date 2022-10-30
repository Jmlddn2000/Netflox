import React, { useState } from 'react';

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
import Item_Gendre from './Item_Gendre';
const { height, width } = Dimensions.get("window");


function HalamanCategory({ navigation }) {

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
    return (
        <ScrollView style={{ backgroundColor: "black", flex: 1 }}>

            <View>
                <Navbar navigation={navigation} />
            </View>
            <View>

                <Text style={styles.Title_Bagian}>Top Action</Text>

                <FlatList
                    data={listData}
                    renderItem={({ item, index }) =>
                        <Item_Gendre
                            title={item.Title}
                            tahun={item.Year}
                            durasi={item.Runtime}
                            image={item.Poster}
                            navigation={navigation}
                        />}

                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />

                <Text style={styles.Title_Bagian}>New Releases</Text>

                <FlatList
                    data={listData}
                    renderItem={({ item, index }) =>
                        <Item_Gendre
                            title={item.Title}
                            tahun={item.Year}
                            durasi={item.Runtime}
                            image={item.Poster}
                            navigation={navigation}
                        />}

                    keyExtractor={(item) => item.id}
                    horizontal={true}
                />

                <Text style={styles.Title_Bagian}>For Kids</Text>

                <FlatList
                    data={listData}
                    renderItem={({ item, index }) =>
                        <Item_Gendre
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


export default HalamanCategory