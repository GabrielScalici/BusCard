/**
 * FRM
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Image,
    Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

//MEDIDAS
import { colors, font, metrics } from '../styles';
let widthS = Dimensions.get('window').width;

//IMAGENS
const logo = require('../../img/logo.png');

type Props = {};
export default class splashScreen extends Component<Props> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden />
                <View style={{ justifyContent: 'center', flex: 7 }}>
                    <Animatable.View animation="zoomIn" interationCount={1} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 150, marginBottom: 100 }}>
                            <Image style={{ width: widthS - 14, height: widthS - 14, padding: 7, borderRadius: 50 }} source={logo} />
                        </View>
                    </Animatable.View>
                </View>

                <Animatable.View animation="bounceInUp" interationCount={1} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ justifyContent: 'flex-end', flex: 1 }}>
                        <Text style={styles.subtitle_big}> Gabriel Henrique Campos Scalici </Text>
                        <Text style={styles.subtitle}> Versão 1.0.0 </Text>
                    </View>
                </Animatable.View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
    },
    welcome: {
        fontFamily: 'roboto',
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    },
    subtitle: {
        fontSize: 10,
        textAlign: 'center',
        margin: 5,
        color: colors.primaria,
    },
    subtitle_big: {
        fontSize: 20,
        textAlign: 'center',
        margin: 5,
        color: colors.primaria,
    }
});
