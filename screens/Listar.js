import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card, Button, Header } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";

export default function ListaScreen({ navigation }) {

    const [list, setList] = useState([]);
    const refresh = useIsFocused();

    useEffect(() => {
        function consultarDados() {

            axios.get('http://192.168.37.107:5000/produtos')

                .then(function (response) {
                    setList(response.data);
                }).catch(function (error) {
                    console.log(error);

                });

        }
        consultarDados();
    }, [refresh])

    return (
        <View>
            <Header
            
                centerComponent={{ text: 'Lista', style: { color: '#fff' } }}
                rightComponent={
                <Button buttonStyle={{marginRight:15}} title="+"
                onPress={() => navigation.navigate('Inserir')} />}
            />

            <ScrollView>
                <Card>
                    <Card.Divider />
                    {
                        list.map((u, i) => {
                            return (
                                <View key={i} >
                                    <Card.Image source={require('../assets/images/cll.jpg')} onPress={() => navigation.navigate('Alterar',{
                                    nomeProduto: u.nomeProduto,
                                    capacidade: u.capacidade,
                                    preco: u.preco,
                                    id: u.id
                                })}></Card.Image>
                                    <Text>Nome: {u.nomeProduto}</Text>
                                    <Text>Capacidade: {u.capacidade}</Text>
                                    <Text>Preço: {u.preco}</Text>
                                </View>
                            
                            )
                        }

                        )}
                </Card>
            </ScrollView>
        </View>
    )
}