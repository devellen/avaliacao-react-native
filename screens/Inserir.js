import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Button, Input } from 'react-native-elements';
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function InserirScreen({navigation}) {

    const [nomeProduto, setNomeProduto] = useState();
    const [capacidade, setCapacidade] = useState();
    const [preco, setPreco] = useState();

    async function inserirDados() {

        await axios.post('http://192.168.37.107:5000/produto',
            {
                nomeProduto: nomeProduto,
                capacidade: capacidade,
                preco: preco
            }).then(function (response) {
                showMessage({
                    message: "Produto cadastrado com sucesso",
                    type: "success",
                });
            }).catch(function (error) {
                console.log(error);

            });
    }

    return (
        <View style={{ alignItems: 'center'}}>

            <FlashMessage position="top" />

            <Text
                style={{ marginTop: 50, fontSize:20, marginRight:15, color:'#a6d9ea'}}
            > Insira os dados do produto</Text>

            <TextInput
                placeholder="digite o nome do produto"
                style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 20, margin: 15, marginTop: 80 }}
                onChangeText={text => setNomeProduto(text)}
                value={nomeProduto} />


            <TextInput
                placeholder="digite a capacidade do produto"
                style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 20, margin: 15 }}
                onChangeText={text => setCapacidade(text)}
                value={capacidade} />


            <TextInput
                placeholder="digite o preço"
                style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 20, margin: 15 }}
                onChangeText={text => setPreco(text)}
                value={preco} />

            <Button title="salvar dados"
                buttonStyle={{ width: 300, marginTop: 15, borderRadius: 20, backgroundColor: "#a6d9ea" }}
                onPress={() => inserirDados()}>
            </Button>
        </View>
    )
}