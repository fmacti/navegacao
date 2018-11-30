import React, { Component } from 'react';
import { Text, View, StatusBar, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao';
import { StackNavigator } from 'react-navigation';

const imgDetalhe = require('../imgs/detalhe_contato.png');
const corDeFundo = '#61BD8C';

export default class CenaContatos extends Component {

    render() {
        const navigation = this.props.navigation;

        return (
            <View>
                <StatusBar
                    backgroundColor={corDeFundo}
                />

                <BarraNavegacao navigation={navigation} voltar corDeFundo={corDeFundo} />

                <View style={styles.cabecalho}>
                    <Image source={imgDetalhe} />
                    <Text style={styles.txtTitulo}>Contatos</Text>
                </View>

                <View style={styles.contatos}>
                    <Text style={styles.txtContatos}>Nome: Fernando</Text>
                    <Text style={styles.txtContatos}>Tel: (44) 0000-0000</Text>
                    <Text style={styles.txtContatos}>Cel: (44) 00000-0000</Text>
                    <Text style={styles.txtContatos}>Email: fer.aeq@gmail.com</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        marginTop: 20
    },
    txtTitulo: {
        fontSize: 30,
        color: corDeFundo,
        marginLeft: 10,
        marginTop: 40
    },
    contatos: {
        padding: 20,
        marginTop: 20
    },
    txtContatos:
    {
        fontSize: 18
    }
});