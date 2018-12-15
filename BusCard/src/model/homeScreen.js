/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

import { metrics, font, colors } from '../styles';

//COMPONENTES
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import ButtonDefault from '../components/ButtonDefault';

type Props = {};
export default class homeScreen extends Component<Props> {
  constructor(props) {
    super(props);

    //ESTADOS PARA ARMAZENAR OS VALORES DIGITADOS PELO USUARIO
    this.state = {
      valor: '32,00',
    };
  }
  render() {
    return (
      <View style={styles.container}>

        <Header> BusCard </Header>
        <ScrollView>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('valorScreen');
            }}
            style={styles.container_valor}>
            <Text style={styles.txt_ds_valor}> Valor </Text>
            <Text style={styles.txt_valor}> R$ {this.state.valor} </Text>
            <Text style={styles.txt_ds_valor}> Clique para recarregar </Text>
          </TouchableOpacity>

          <Text style={styles.txt_ds_valor}> Usar passagem </Text>
          <View style={styles.btn_default}>
            <ButtonDefault
              onPress={() => {
                Alert.alert(
                  'Voltar uma passagem?',
                  'Você irá voltar o valor de uma passagem',
                  [
                    {
                      text: 'Cancelar', onPress: () => {

                      }, style: 'cancel'
                    },
                    {
                      text: 'OK', onPress: () => {

                      }
                    },
                  ],
                  { cancelable: false }
                )
              }
              }
            > Voltar </ButtonDefault>
            <ButtonDefault
              onPress={() => Alert.alert(
                'Usar uma passagem?',
                'Você irá gastar o valor de uma passagem',
                [
                  { text: 'Cancelar', onPress: () => { }, style: 'cancel' },
                  {
                    text: 'OK', onPress: () => {

                    }
                  },
                ],
                { cancelable: false }
              )
              }
            > Usar </ButtonDefault>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  container_valor: {
    margin: metrics.padding,
    padding: metrics.padding,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.cinza_mais_escuro,
    height: 200,
    borderRadius: 20,

  },
  txt_ds_valor: {
    fontSize: font.ds_label,
    color: colors.primaria,
  },
  txt_valor: {
    fontSize: 60,
    color: colors.primaria,
  },
  btn_default: {
    flexDirection: "row",
    paddingVertical: metrics.padding,
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  configuracoes: {

  }

});
