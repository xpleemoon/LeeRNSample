'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    DeviceEventEmitter,
} from 'react-native';
import {LeeStyles,}from '../res/style/GlobalStyles';
import {LeeCommunication,} from './LeeNative';
import LeeTouchable from './component/LeeTouchable';
import LeeTextArea from './component/LeeTextArea';

class LeeComm extends React.Component {
    onReceiveEvent = (event) => {
        this.setState({
            text: event.result,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };
    }

    callback() {
        LeeCommunication.callback(
            'Callback通信',
            (text) => this.setState({text}));
    }

    async promise() {
        let text = await LeeCommunication.promise("Promise通信");
        this.setState({text});
    }

    showSendEvent() {
        LeeCommunication.showSendEvent();
    }

    componentWillMount() {
        //注册事件监听
        DeviceEventEmitter.addListener('onReceiveEvent', this.onReceiveEvent);
    }

    componentWillUnmount() {
        //移除事件监听
        DeviceEventEmitter.removeListener('onReceiveEvent', this.onReceiveEvent);
    }

    render() {
        return (
            <View style={LeeStyles.container}>
                <LeeTouchable
                    onClick={() => this.callback()}
                    text='Callback通信'/>
                <LeeTouchable
                    onClick={() => this.promise()}
                    text='Promise通信'/>
                <LeeTouchable
                    onClick={() => this.showSendEvent()}
                    text='Send Event通信'/>
                <LeeTextArea
                    placeholder='请点击通信按钮，测试通信情况'
                    value={this.state.text}/>
            </View>
        )
    }
}

AppRegistry.registerComponent('LeeComm', () => LeeComm);
