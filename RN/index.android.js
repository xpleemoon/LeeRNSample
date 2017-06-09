'use strict';

import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    DeviceEventEmitter,
} from 'react-native';
import {LeeStyles,}from './res/style/GlobalStyles';
import {LeeToast, LeeDialog, LeeCommunication,} from './js/LeeNative';
import LeeTouchable from './js/component/LeeTouchable';
import LeeTextArea from './js/component/LeeTextArea';

class LeeRNSample extends React.Component {
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
        this.setState({
            text: "点击Send Event通信按钮",
        });
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
                <Text>RN调用原生组件</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center',}}>
                    <LeeTouchable
                        onClick={() => LeeToast.show('我是原生Toast', LeeToast.SHORT)}
                        text='调用Toast'/>
                    <LeeTouchable
                        onClick={() => LeeDialog.show('Welcome to RN', '我是原生Dialog')}
                        text='调用Dialog'/>
                </View>
                <Text>RN调用原生组件</Text>
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

AppRegistry.registerComponent('LeeRNSample', () => LeeRNSample);