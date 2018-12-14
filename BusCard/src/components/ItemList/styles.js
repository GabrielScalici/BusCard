import { StyleSheet } from 'react-native';

import { metrics, font, colors } from '../../styles';

const styles = StyleSheet.create({

    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.padding,
        height: 60,
        backgroundColor: colors.primaria,
        marginVertical: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    titulo:{
        fontSize: font.item_list,
        fontFamily: 'System',
        color: colors.branco,
    }

});

export default styles;