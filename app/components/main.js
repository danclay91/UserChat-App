import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import styles from '../styles/main.js';
import io from 'socket.io-client';



export default class UserChat extends Component {

    serverIP = 'http://45.79.204.138/';

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            serverIP: this.serverIP,
            socket: null
        }
    }

    componentWillMount() {
        //Instantiate socket here. 
    }

    testClick() {
        // this.testREQUEST.bind(this);
        this.testSocketCreate();
    }

    testClick2() {
        this.testSocketConnection();
    }

    testSocketConnection() {
        alert(this.state.socket.connected);
    }

    testSocketCreate() {
        //let socket = this.state.socket; 
        let socket = io('http://45.79.204.138:3000')
        this.setState({ socket: socket });
        alert('Socket created');
    }

    testLogin() {
        alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
        fetch('http://45.79.204.138:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then((response) => response.json())
            .then((responseJSON) => {
                alert(responseJSON.userFound);
            })

            .catch((err) => {
                alert(err)
            })
    }

    testStackNavigator(){
        this.props.navigation.navigate('ChatScreen');
    }


    testREQUEST() {
        fetch('http://45.79.204.138/3000')
            .then((response) => {
                alert('promise complete');
                this.setState({ res: response });
            })

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    UserChat Playground
        </Text>
        <Text>Socket Testing</Text>
                <TouchableOpacity
                    style={{ height: 60, width: 80, backgroundColor: '#F5FCFF' }}
                    onPress={this.testClick.bind(this)}>
                    <View style={{ alignItems: 'center', backgroundColor: 'red' }}>
                        <Text>Test Socket Creation</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ height: 60, width: 80, backgroundColor: '#F5FCFF' }}
                    onPress={this.testClick2.bind(this)}>
                    <View style={{ alignItems: 'center', backgroundColor: 'red' }}>
                        <Text>Test Socket Connection</Text>
                    </View>
                </TouchableOpacity>
                <Text>Login Testing</Text>
                <TextInput
                    style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({ username: text })}
                />
                <TextInput
                    style={{ height: 50, borderColor: 'black', borderWidth: 1 }}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity
                    style={{ marginTop: 10, height: 60, width: 80, backgroundColor: '#F5FCFF' }}
                    onPress={this.testLogin.bind(this)}>
                    <View style={{ alignItems: 'center', backgroundColor: 'red' }}>
                        <Text>Test Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ marginTop: 10, height: 60, width: 80, backgroundColor: '#F5FCFF' }}
                    onPress={()=> this.testStackNavigator()}>
                    <View style={{ alignItems: 'center', backgroundColor: 'red' }}>
                        <Text>Test StackNavigator</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}