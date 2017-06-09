'use strict';

import {StyleSheet,} from 'react-native';

export var LeeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    text: {
        color: 'white',
        backgroundColor: '#527fe4',
        fontSize: 20,
        textAlign: 'center',
    },
    touchableHighlight: {
        borderColor: '#527fe4',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
    },
    textInput: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        textAlign: 'center',
        color: 'red',
    },
});