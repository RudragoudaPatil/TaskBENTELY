import React, { Component } from 'react';

import { Platform, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import CardView from 'react-native-cardview';
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";

export default class Interier extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <Header>
                    <Right>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("Home")}>

                            <Icon name="menu" />
                        </Button>
                    </Right>
                </Header>

                <View style={styles.MainContainer}>


                    <Row style={styles.rowStyle} >
                        <Col><Text  onPress={() => this.props.navigation.navigate('Home')} >Car Model</Text></Col>
                        <Col>
                            <Text  onPress={() => this.props.navigation.navigate('Exterier')} >Exterier</Text>
                        </Col>

                        <Col>
                            <Text onPress={() => this.props.navigation.navigate('Interier')}>Interier</Text>
                       </Col>
                        <Col>
                            <Text onPress={() => this.props.navigation.navigate('ThreeD')} >3D View</Text>
                       </Col>
                    </Row>

                    <CardView
                        style={styles.cardViewStyle}>

                        <Image style={styles.cardView_InsideText} source={require('../assets/carint.jpg')} />

                    </CardView>

                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {


        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',


    },

    cardViewStyle: {

        // width: 550,
        // height: 550,
        marginTop: 150,

    },

    cardView_InsideText: {

        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        // marginTop: 10,
        width: 500,
        height: 333

    },
    rowStyle: {
        marginTop: 10,
        marginLeft: 20

    }

});