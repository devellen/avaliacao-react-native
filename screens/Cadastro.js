import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Button } from 'react-native-elements';
import axios from 'axios';
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function CadastroScreen({ navigation }) {
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    async function inserirCadastro() {

        await axios.post('http://192.168.37.107:5000/cadastro',
            {
                nome: nome,
                email: email,
                senha: senha
            }).then(function (response) {
                showMessage({
                    message: "Registro cadastrado com sucesso",
                    type: "success",
                });
            }).catch(function (error) {
                console.log(error);

            });
    }

    return (
        <View style={[styles.container]}>
            <View style={{padding: 20 }}>
            <FlashMessage position="top" />
            <TextInput
                    placeholder="digite seu nome"
                    style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 10, margin: 15, marginTop:100 }}
                    onChangeText={text => setNome(text)}
                    value={nome} />
                <TextInput
                    placeholder="digite seu email"
                    style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 10, margin: 15 }}
                    onChangeText={text => setEmail(text)}
                    value={email} />
                <TextInput
                    placeholder="digite sua senha"
                    style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 10, margin: 15 }}
                    secureTextEntry
                    onChangeText={text => setSenha(text)}
                    value={senha} />
            </View>
            <View style={{ padding:20, alignItems:'center' }}>
                <Button
                    onPress={() => inserirCadastro()}
                    buttonStyle={styles.button}
                    title="Salvar"
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
        borderRadius: 30,
        backgroundColor: "#a6d9ea",
        width:200
    }
});
