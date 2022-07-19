import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function UserDetails({route}) {
    const [dataLoading, finishLoading] = useState(true);
    const [allPostData, setAllPostData] = useState([]);
    const { url } = route.params;
    const selectedPost = allPostData.find(post => post.url === url);

    useEffect(() => {
        fetch("")
            .then((response) => response.json())
            .then((json) => setAllPostData(json.articles))
            .catch((error) => console.error(error))
            .finally(() => finishLoading(false))

    });
    return (
        <View>
            {dataLoading ? <ActivityIndicator /> : (
                <ScrollView>
                    <Text>
                        {selectedPost.title}
                        </Text>
                        <Image
                            style={styles.storyImage}
                            source={{ uri: selectedPost.urltoImage }}

                        />
                        <Text>{selectedPost.description}</Text>
                        <Text>{selectedPost.content}</Text>
                    
                </ScrollView>
            )}
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center"
    },
    title: {
        fontWeight: 'bold',
        padding: 20
    },
    storyImage: {
        height: 300,
        width: "100%"
    }
})