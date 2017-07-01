import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import loginStyles from '../styles/loginStyles.js';
import {settings} from '../config/data.js';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            socket: this.props.socket
        }
    }

    submitLogin() {
        let url = `http://${settings.serverIp}:${settings.port}/login`
        //TODO: Add timeout for request.
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            if(responseJSON.userFound){
                this.props.navigation.navigate('ChatScreen')
            } else {
                alert('No matching username/password');
            }
        })
        .catch((err)=> {
            alert(err);
        })
    }

    render() {

        return (
            <View style={loginStyles.container}>
                <TextInput
                    style={loginStyles.userInput}
                    onChangeText={(text) => this.setState({ username: text })}
                    value={this.state.username}
                />
                <TextInput
                    style={{ height: 30, borderWidth: 1, borderColor: 'gray' }}
                    onChangeText={(text) => this.setState({ password: text })}
                    value={this.state.password}
                />
                <TouchableOpacity
                    style={loginStyles.loginButton}
                    onPress={() => this.submitLogin()}
                >
                    <View>
                        <Text>Login</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}