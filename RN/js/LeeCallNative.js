'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';
import {LeeToast, LeeDialog,} from './LeeNative';
import {LeeStyles} from '../res/style/GlobalStyles';
import LeeTouchable from './component/LeeTouchable';

class LeeCallNative extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    render() {
        return (
            <View style={LeeStyles.container}>
                <LeeTouchable
                    onClick={() => LeeToast.show('我是原生Toast', LeeToast.SHORT)}
                    text='调用Toast'/>
                <LeeTouchable
                    onClick={() => LeeDialog.show('Welcome to RN', '我是原生Dialog')}
                    text='调用Dialog'/>
            </View>
        )
    }
}

AppRegistry.registerComponent('LeeCallNative', () => LeeCallNative);