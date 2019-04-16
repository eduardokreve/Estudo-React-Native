import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {connect} from 'react-redux'

import {addTodo} from '../actions';

import Input from './Input';

class TodoForm extends React.Component{
    constructor(props) { //gerenciar o estado
        super(props);

        this.state = {
            text: ' '
        }
    }
    //funcao
    onChangeText(text) {
        this.setState({
            text
        });
    }
    //funcao
    onPress() {
        this.props.dispatchAddTodo(this.state.text)
    }

    render() {
        const { text } = this.state;

        return (
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Input
                        onChangeText={text => this.onChangeText(text)}
                        value={text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={() => this.onPress()}
                        title="Add"/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex:4
    },
    buttonContainer: {
        flex:1
    }
});


export default connect(null, {
    dispatchAddTodo: addTodo
})(TodoForm);