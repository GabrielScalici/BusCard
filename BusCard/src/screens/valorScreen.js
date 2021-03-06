/**
 * Tela inicial
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Alert, TextInput, AsyncStorage, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import renderIf from 'render-if';

//MEDIDAS
import { metrics, font, colors } from '../styles';
let widthS = Dimensions.get('window').width;

//COMPONENTES
import Header from '../components/Header';
import ItemList from '../components/ItemList';
import ButtonText from '../components/ButtonText';
import ButtonDefault from '../components/ButtonDefault';

type Props = {};
export default class valorScreen extends Component<Props> {
    constructor(props) {
        super(props);

        //ESTADOS PARA ARMAZENAR OS VALORES DIGITADOS PELO USUARIO
        this.state = {
            valor: 0,
            valor_digitado: 0,
            meia: false,
            outro: false,
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('@SALDO').then((value) => {
            if (value) {
                this.setState({ valor: parseFloat(value) });
            } else {
                this.setState({ valor: 0 });
            }
        });
    }

    saveValue = async (value) => {
        var total = parseFloat(this.state.valor) + parseFloat(value);
        this.setState({ valor: total });
        Alert.alert(
            'Recarga efetuada!',
            'Você acabou de recarregar seu cartão',
            [
                {
                    text: 'OK', onPress: () => {
                        try {
                            AsyncStorage.setItem('@SALDO', JSON.stringify(this.state.valor));
                        } catch (error) {
                            console.log(error)
                        }
                    }
                },
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={styles.container}>

                <Header
                    back
                    onPress={() => {
                        //this.props.navigation.goBack(null);
                        this.props.navigation.state.params.onGoBack();
                        this.props.navigation.goBack();
                    }}
                > Recarregar </Header>
                <ScrollView>

                    <View style={styles.vw_valor}>
                        <Text style={styles.txt_ds}> Total </Text>
                        <Text style={styles.txt_valor}> R$ {parseFloat(this.state.valor).toFixed(2)}  </Text>
                    </View>

                    <Text style={styles.txt_ds}> Valor para recarregar </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{ marginVertical: metrics.padding }}
                    >
                        <ButtonDefault
                            onPress={() => this.saveValue('10')}
                        > R$ 10</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('15')}
                        > R$ 15</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('20')}
                        > R$ 20</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('25')}
                        > R$ 25</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('30')}
                        > R$ 30</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('40')}
                        > R$ 40</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('50')}
                        > R$ 50</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('60')}
                        > R$ 60</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('70')}
                        > R$ 70</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('80')}
                        > R$ 80</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('90')}
                        > R$ 90</ButtonDefault>
                        <ButtonDefault
                            onPress={() => this.saveValue('100')}
                        > R$ 100</ButtonDefault>
                    </ScrollView>

                    <View
                        style={styles.container_outro}>
                        <Text style={styles.txt_ds_zerar}> Outros valores?</Text>
                        {renderIf(!this.state.outro)(
                            <ButtonText
                                outline
                                color={'white'}
                                onPress={() => {
                                    this.setState({ outro: true });
                                }}>
                                DIGITAR OUTRO VALOR
                            </ButtonText>
                        )}
                        {renderIf(this.state.outro)(
                            <View>
                                <View style={{ flexDirection: "row", justifyContent: 'center' }}>

                                    <TextInput
                                        placeholder="Digite o valor a ser recarregado"
                                        placeholderTextColor= {colors.primaria}
                                        style={styles.txt_placeholder}
                                        underlineColorAndroid={colors.branco}
                                        keyboardType="default"
                                        autoFocus
                                        onChangeText={aux => {
                                            if (isNaN(aux)) {
                                                Alert.alert('Ops...', "Digite somente números e ponto");
                                            } else {
                                                aux = parseFloat(aux.replace(',', '.'))
                                                this.setState({ valor_digitado: aux })
                                            }
                                        }
                                        }

                                    />

                                </View>

                                <ButtonText
                                    outline
                                    color={colors.branco}
                                    onPress={() => {
                                        if (this.state.valor_digitado > 0) {
                                            var total = parseFloat(this.state.valor) + parseFloat(this.state.valor_digitado);
                                            this.setState({ valor: total });
                                            this.setState({ outro: false })
                                            AsyncStorage.setItem('@SALDO', JSON.stringify(this.state.valor));

                                            Alert.alert(
                                                'Recarga efetuada!',
                                                'Você acabou de recarregar seu cartão',
                                                [
                                                    {
                                                        text: 'OK', onPress: () => {

                                                        }
                                                    },
                                                ],
                                                { cancelable: false }
                                            )
                                        } else {
                                            Alert.alert(
                                                'Digite um valor para ser recarregado!',
                                                'Pode usar também os centavos',
                                                [
                                                    {
                                                        text: 'OK', onPress: () => {

                                                        }
                                                    },
                                                ],
                                                { cancelable: false }
                                            )
                                        }
                                    }}
                                >
                                    SALVAR RECARGA
                            </ButtonText>
                            </View>
                        )}
                    </View>
                    <View
                        style={styles.container_zerar}>
                        <Text style={styles.txt_ds_zerar}> Zerar seu saldo?</Text>
                        <ButtonText
                            outline
                            color={'white'}
                            onPress={() => {
                                Alert.alert(
                                    'Deseja zerar o saldo do seu cartão?',
                                    'Esta operação não poderá ser desfeita depois de confirmada.',
                                    [
                                        { text: 'Cancelar', onPress: () => { }, style: 'cancel' },
                                        {
                                            text: 'OK', onPress: () => {
                                                this.setState({ valor: 0 });
                                                AsyncStorage.setItem('@SALDO', JSON.stringify(this.state.valor));
                                            }
                                        },
                                    ],
                                    { cancelable: false }
                                )
                            }}>
                            ZERAR O SALDO DO CARTÃO
                            </ButtonText>
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
    container_outro_valor: {
        margin: metrics.padding,
        backgroundColor: colors.cinza,
        borderRadius: 20,
        padding: metrics.padding,
    },
    container_zerar: {
        margin: metrics.padding,
        padding: metrics.padding,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.secundaria,
        height: 200,
        borderRadius: 20,
    },
    container_outro: {
        margin: metrics.padding,
        padding: metrics.padding,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaria,
        height: 200,
        borderRadius: 20,
    },
    vw_recarregar: {
        flexDirection: "row",
        padding: metrics.padding,
        margin: metrics.padding,
    },
    vw_valor: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: metrics.padding,
    },
    txt_ds: {
        fontSize: font.ds_label,
        fontFamily: 'System',
        margin: metrics.half_padding,
    },
    txt_valor: {
        fontSize: 70,
        fontFamily: 'System',
        color: colors.primaria,
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'System',
        fontWeight: 'normal',
        textAlign: 'center',
        margin: 10,
        color: '#8093A5',
    },
    txt_placeholder: {
        fontFamily: 'System',
        fontWeight: '100',
        fontStyle: 'normal',
        fontSize: 15,
        padding: 5,
        borderWidth: 0,
        height: 50,
        borderRadius: 10.5,
        marginVertical: 5,
        width: widthS - (2*metrics.double_padding),
        justifyContent: 'center',
        backgroundColor: colors.cinza,
        color: colors.secundaria
    },
    icon: {
        fontSize: font.icon_list,
        padding: metrics.padding,
    },
    txt_ds_zerar: {
        fontFamily: 'System',
        fontSize: 25,
        color: 'white',
    },
});
