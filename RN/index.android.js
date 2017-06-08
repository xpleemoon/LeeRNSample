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
    TextInput,
    DeviceEventEmitter,
} from 'react-native';
import {LeeToast, LeeDialog, LeeCommunication} from './js/LeeNative';

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
        LeeToast.show('我是原生Toast',LeeToast.SHORT);
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

    componentDidMount() {
        //注册事件监听
        DeviceEventEmitter.addListener('onReceiveEvent', this.onReceiveEvent);
    }

    componentWillMount() {
        DeviceEventEmitter.removeListener('onReceiveEvent', this.onReceiveEvent);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={() => this.showToast()}>
                    <Text style={styles.hello}>调用Toast</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.showDialog()}>
                    <Text style={styles.hello}>调用Dialog</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.callback()}>
                     <Text style={styles.hello}>Callback通信</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.promise()}>
                     <Text style={styles.hello}>Promise通信</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.showSendEvent()}>
                     <Text style={styles.hello}>Send Event通信</Text>
                </TouchableHighlight>
                <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}/>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        margin:10,
    },
    hello: {
        color: '#527fe4',
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

AppRegistry.registerComponent('LeeRNSample', () => LeeRNSample);