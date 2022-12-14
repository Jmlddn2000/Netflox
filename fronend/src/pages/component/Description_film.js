import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TextInput
} from 'react-native';
import Navbar from './Navbar';
import IconStar2 from '../asset/IconStar2'


export const { height, width } = Dimensions.get('window');

function Description_film({ navigation, route }) {

  useEffect(()=> {
    fetch('https://easy-snaps-frog.cyclic.app/filmtop')
    .then((response) => response.json())
    .then((data) => setTopFilm(data))
},[])

  const handleInput = () => {
    navigation.navigate('Home');
  };
  
  return (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View>
        <Navbar navigation={navigation} />
      </View>

      <Text style={styles.title}>{route.params.title}</Text>

      <View>
        <Image
          style={styles.img}
          resizeMode={'stretch'}
          source={{ uri: route.params.image }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 10,
        }}>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 13,
              textAlign: 'center',
              borderWidth: 1,
              borderColor: '#FF9900',
              borderRadius: 3,
              paddingHorizontal: 40,
              marginRight: width / 10,
            }}>
            {route.params.gendre}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              color: "white",
              fontSize: 13,
              marginLeft: 5,
              marginRight: 20,
              fontWeight: 'bold'
            }}>
            2022
          </Text>

          <Text
            style={{
              color: '#FF9900',
              marginRight: 40,
              marginLeft: 30,
              fontWeight: 'bold'

            }}>
            {route.params.umur}
          </Text>

          <Text style={{ color: "white", fontSize: 13, alignSelf: 'flex-end', fontWeight: 'bold'  }}>
            <IconStar2 fill="yellow" width={10} height={10} />
            {route.params.rating}
          </Text>
        </View>
      </View>

      <View>
        <Text style={styles.Title_Bagian}>Description Film</Text>

        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginVertical: 5,
            textAlign: 'center',
            paddingHorizontal: 35,
            marginTop: 20,
            lineHeight: 20,
          }}>
          {route.params.descripsi}
        </Text>
      </View>

      <View>
      <Text style={styles.Title_Bagian}>CAST</Text>

        <Image
          style={styles.Image_Cast}
          source={{ uri: route.params.gambar_artis }}
        />
      </View>

      <View style={{ paddingBottom: 50 }}>
        <Text style={styles.Title_Bagian}>Story Line</Text>

        <Text
          style={{
            color: 'white',
            fontSize: 15,
            marginVertical: 5,
            textAlign: 'center',
            paddingHorizontal: 35,
            marginTop: 20,
            lineHeight: 20,
          }}>
          {route.params.garis_cerita}
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 50,
  },
  img: {
    width: width,
    height: height / 2,
  },
  title: {
    color: '#FF9900',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: '3%',
    marginTop: 20,
    marginBottom: 10,
  },
  Title_Bagian: {
    color: 'white',
    fontSize: 25,
    paddingHorizontal: '3%',
    borderLeftWidth: 5,
    borderColor: '#FF9900',
    marginTop: 35,
    marginBottom: 5,
    marginLeft: width / 20,
    paddingLeft: width / 20,
  },
  Image_Cast: {
    width: width / 5,
    height: height / 5,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 50,
    backgroundColor: "white"
  },
  Nama_Asli: {
    color: 'white',
    fontSize: 20,
  },
  Nama_Pemeran: {
    color: 'white',
    fontSize: 15,
  },
});

export default Description_film;
