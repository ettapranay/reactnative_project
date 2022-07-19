import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';

export default function Contactpage() {
    // name, email, phone, message, submit button

    const [name, nameChange] = useState("Ram"); // default value is empty
    const [email, emailChange] = useState("");
    const [phone, phoneChange] = useState("");
    const [message, messageChange] = useState("");

    postMessage = () => {
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.label}>Name *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => nameChange(text)}
                    value={name}
                />

                <Text style={styles.label}>Email *</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => emailChange(text)}
                    value={email}
                />

                <Text style={styles.label}>Phone number</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={text => phoneChange(text)}
                    value={phone}
                />

                <Text style={styles.label}>Message *</Text>
                <TextInput
                    style={styles.multi}
                    onChangeText={text => messageChange(text)}
                    value={message}
                    multiline
                    numberOfLines={6}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => postMessage()}
                >
                    <Text>Submit</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 26,
        width: 250
    },
    label: {
        fontSize: 18,
        paddingTop: 20
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 10
    },
    multi: {
        borderColor: 'black',
        borderWidth: 1,
        fontSize: 16,
        width: 300
    }
})