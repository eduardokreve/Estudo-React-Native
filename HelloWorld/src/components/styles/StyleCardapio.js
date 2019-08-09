import { StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

export default StyleSheet.create({
    cardapio:{
        width:wp('100%'),
        height:hp('100%'),
        backgroundColor: '#f7f7f7',
    },
    flat: {
        paddingHorizontal: 20,
        marginTop:20,
        marginBottom:20
    },
    texto:{
        alignItems:'center',
        justifyContent: 'center',
        marginTop:5,
        color: '#7a7a7a',
        fontSize:22,
        textAlign:'left'
    }
})