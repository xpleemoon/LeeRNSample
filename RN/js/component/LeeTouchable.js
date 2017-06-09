'use strict';

import React, {PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    TouchableHighlight,
} from 'react-native';
import {LeeStyles} from "../../res/style/GlobalStyles";

export default class LeeTouchable extends React.Component {
    static defaultProps = {
        onClick: null,
        text: '',
    }

    static propTypes = {
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
    }

    render() {
        return (
            <TouchableHighlight
                style={LeeStyles.touchableHighlight}
                activeOpacity={0.7}
                onPress={this.props.onClick}>
                <Text style={LeeStyles.text}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}