'use strict';

import React, {PropTypes}from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';
import {LeeStyles} from "../../res/style/GlobalStyles";

export default class LeeTextArea extends React.Component {
    static defaultProps = {
        placeholder: '',
        value: '',
    }

    render() {
        return (
            <TextInput
                style={LeeStyles.textInput}
                underlineColorAndroid='transparent'
                placeholder={this.props.placeholder}
                editable={false}
                value={this.props.value}/>
        )
    }
}