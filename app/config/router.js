import React from 'react';
import {StackNavigator} from 'react-navigation';

import Testing from '../components/main.js';
import LoginScreen from '../components/loginScreen.js';
import ChatScreen from '../components/chatScreen.js';

export const Root = StackNavigator({
    /*Main: {
        screen: Main,
        navigationOptions: {
            title: 'Main',
        },
    },*/
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            title: 'Login',
        },
    },
    ChatScreen: {
        screen: ChatScreen,
        navigationOptions: {
            title: 'Chat',
        },
    },
});


