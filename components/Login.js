import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ToastAndroid
} from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Login extends Component {

    constructor(props) {
        super(props);

    }




    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.loginText}>Login</Text>


                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.forgotText}>Forgot Password ?</Text>
                </TouchableHighlight>
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.signUpText}>Login</Text>
                </TouchableHighlight>
                {/* <Image style={{ marginLeft: 10 }} source={require('../assets/GP.png')} />                  
                <Image style={{ marginLeft: 10 }} source={require('../assets/FB.png')} /> */}
               
                     <Row size={8}>
                        <Image style={{ marginLeft: 10 }} source={require('../assets/GP.png')} />

                       
                    
                    <Image style={{ marginLeft: 10 }} source={require('../assets/FB.png')} />
                    </Row>
                  <Text>-----------OR----------</Text>
                    <Row size={40}>
                        <Image style={{ marginLeft: 10 }} source={require('../assets/Finger.png')} />

                        <Image style={{ marginLeft: 10 }} source={require('../assets/Face.png')} />

                    </Row> 
              

                



            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00b5ec',
        paddingTop: 200
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: "#228B22",
    },
    signUpText: {
        color: 'white',
    },
    forgotText: {
        color: 'white',
        marginBottom: 10,
        fontSize: 18,
    },
    loginButton: {
        backgroundColor: "#228B22",
    },
    loginText: {
        fontSize: 48,
        marginBottom: 20
    }
});