/**
 * BUSCARD
 * 
 * Autor: Gabriel Henrique Campos Scalici
 * 
 * Função Tela : Padronização das metricas utilizadas no aplicativo
 * 
**/

import { Platform } from 'react-native';

export default {

    padding: 15,
    half_padding: 7,
    double_padding: 30,
    btn_padding: 6,
    btn_rad: 10.5,
    radio: 20,

    text_button_radius: 20,
    text_button_padding: 4,


    ...Platform.select({
        ios: { headerHeight: 60, headerPadding: 0 },
        android: { headerHeight: 60, headerPadding: 0 },
    }),

    menuHeight: 100,
    menuWidth: 200,

};

//ios: { headerHeight: 75, headerPadding: 20 },