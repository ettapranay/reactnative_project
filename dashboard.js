import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomePage({ navigation }) {
    const [newsData, setData] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-07-04&sortBy=publishedAt&apiKey=9406327d88da4ed6a518a8283fdc8988")
            .then((response) => response.json())
            .then((json) => setData(json.articles))

    }, []);


    const storyItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('UserDetails', { url: item.url })
                }>
                <View>
                    <Text>{item.title}</Text>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: item.urltoImage }}
                    />
                </View>
            </TouchableOpacity>

        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={newsData}
                renderItem={storyItem}></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
        width: '100%',
        padding: 20
    },
    title:
    {
        paddingBottom: 10,
        fontWeight: 'bold'
    }
})