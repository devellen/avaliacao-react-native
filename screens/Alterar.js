import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Button, Header } from 'react-native-elements';
import axios from "axios";
import FlashMessage, { showMessage } from "react-native-flash-message";

export default function AlterarScreen({ route }) {

    const [getNomeProduto, setNomeProduto] = useState();
    const [getCapacidade, setCapacidade] = useState();
    const [getPreco, setPreco] = useState();
    const [getId, setId] = useState();

    useEffect(() => {
        if (route.params) {
            const { nomeProduto } = route.params;
            const { capacidade } = route.params;
            const { preco } = route.params;
            const { id } = route.params;

            setNomeProduto(nomeProduto);
            setCapacidade(capacidade);
            setPreco(preco);
            setId(id);
        }
    }, [])

    function alterarDados() {

        axios.put('http://192.168.37.107:5000/produtos/' + getId,
            {
                nomeProduto: getNomeProduto,
                capacidade: getCapacidade,
                preco: getPreco
            }).then(function (response) {
                showMessage({
                    message: "Produto alterado com sucesso",
                    type: "success",
                });
            }).catch(function (error) {
                console.log(error);

            });
    }

    function excluirDados() {

        axios.delete('http://192.168.37.107:5000/produtos/' + getId)
            .then(function (response) {
                showMessage({
                    message: "Produto excluído com sucesso",
                    type: "danger",
                });
                setNome(null);
                setTelefone(null);
                setEmail(null);
                setId(null);
            }).catch(function (error) {
                console.log(error);

            });
    }

    return (
        <View style={{ alignItems: 'center' }}>

            <FlashMessage position="top" />


            <TextInput
                style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 20, margin: 15, marginTop: 80, color: "#a6d9ea" }}
                onChangeText={text => setNomeProduto(text)}
                value={getNomeProduto} />


            <TextInput
                style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 20, margin: 15, color: "#a6d9ea" }}
                onChangeText={text => setCapacidade(text)}
                value={getCapacidade} />

            <TextInput
                style={{ height: 40, width: 300, borderColor: '#a6d9ea', borderWidth: 3, borderRadius: 20, margin: 15, color: "#a6d9ea" }}
                onChangeText={text => setPreco(text)}
                value={getPreco} />

            <Button title="alterar"
                buttonStyle={{ width: 300, marginTop: 20, borderRadius: 20, backgroundColor: "#a6d9ea" }}
                onPress={() => alterarDados()} />
            <Button title="excluir"
                buttonStyle={{ width: 300, marginTop: 20, borderRadius: 20, backgroundColor: "#a6d9ea" }}
                onPress={() => excluirDados()} />
        </View>
    )

}