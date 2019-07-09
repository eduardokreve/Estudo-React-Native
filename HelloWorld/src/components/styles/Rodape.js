import { StyleSheet, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
    rodape:{
        width:wp('100%'),
        height:hp('12%'),
        backgroundColor:'#519387',
        flexDirection: 'row',
        justifyContent:'center', 
        alignItems:'center'
    },
    icone:{
        resizeMode: 'contain', 
        ...Platform.select({
            ios:{
                height:hp('13%'),
                width:wp('13%'),
                bottom:hp('1%'),
            },
            android:{
                height:hp('15%'),
                width:wp('15%'),
                bottom:hp('1.75%'),
            }
        }),
    }
});