import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

import Input from './Input';


export default class TodoForm extends React.Component{
    render() {
        return (
            <View>
                <View>
                    <Input/>
                </View>
                <View>
                    <Button 
                        onPress={() => console.log('Fui pressionado')}
                        title="Add"/>
                </View>
            </View>
        );
    }
}