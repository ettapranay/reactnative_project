import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as RootNavigation from './RootNavigation';

export default function Footer() {
    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate("dashboard")}>
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate("about")}>
                <Text>About</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate("Signup")}>
                <Text>Signup</Text>
            </TouchableOpacity>

            
            <TouchableOpacity
                style={styles.button}
                onPress={() => RootNavigation.navigate("Login")}>
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button} onPress={() => RootNavigation.navigate("terms")}>
                
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        height: 80,
        flexDirection: 'row',
        alignItems: 'flext-start',
        justifyContent: 'center'
    },
    button: {
        padding: 20
    }
})