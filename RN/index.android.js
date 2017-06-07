/**
 * Created by xplee on 2017/5/31.
 */
'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import {LeeToast, LeeDialog} from './js/LeeNative';

class LeeRNSample extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={()=>{LeeToast.show('我是原生Toast',LeeToast.SHORT);}}>
                    <Text style={styles.hello}>RN调用原生Toast</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=>{LeeDialog.show('Welcome to RN', '我是原生Dialog');}}>
                                    <Text style={styles.hello}>RN调用原生Dialog</Text>
                </TouchableHighlight>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        color: '#527fe4',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('LeeRNSample', () => LeeRNSample);