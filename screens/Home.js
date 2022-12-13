import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Input, Button } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={[styles.container, {
            flexDirection: "column"
        }]}>
            <View style={{ flex: 4, alignItems: "center", paddingTop: 40 }}>
                <Avatar
                    avatarStyle={styles.avatar}
                    size="xlarge"
                    rounded
                    source={{
                        uri:
                            'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png',
                    }}
                />
            </View>
            <View style={{ flex: 2, padding: 20 }}>
                <Input
                    placeholder='Login'
                />
                <Input
                    placeholder='Senha'
                    secureTextEntry
                />
            </View>
            <View style={{ flex: 4, padding: 60 }}>
                <Button
                    onPress={() => navigation.navigate('Listar')}
                    buttonStyle={styles.button}
                    title="Entrar"
                />
                <Button
                    onPress={() => navigation.navigate('Cadastro')}
                    buttonStyle={styles.button}
                    title="Cadastre-se"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    button: {
        borderRadius: 40,
        margin: 10,
        backgroundColor: "#a6d9ea"
    }
});

export default HomeScreen;