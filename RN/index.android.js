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

class LeeRNSample extends React.Component {
    onReceiveEvent = (event) => {
        this.setState({
            text: event.result,
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            text: '请点击按钮，测试通信',
        };
    }

    showToast() {
        LeeToast.show('我是原生Toast', LeeToast.SHORT);
        this.setState({
            text: "点击Toast按钮",
        });
    }

    showDialog() {
        LeeDialog.show('Welcome to RN', '我是原生Dialog');
        this.setState({
            text: "点击Dialog按钮",
        });
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
                <TouchableHighlight onPress={() => this.showToast()}>
                    <Text style={LeeStyles.text}>调用Toastaaa</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.showDialog()}>
                    <Text style={LeeStyles.text}>调用Dialog</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.callback()}>
                    <Text style={LeeStyles.text}>Callback通信</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.promise()}>
                    <Text style={LeeStyles.text}>Promise通信</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.showSendEvent()}>
                    <Text style={LeeStyles.text}>Send Event通信</Text>
                </TouchableHighlight>
                <TextInput
                    style={LeeStyles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    underlineColorAndroid='transparent'
                    value={this.state.text}/>
            </View>
        )
    }
}

AppRegistry.registerComponent('LeeRNSample', () => LeeRNSample);