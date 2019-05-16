import React, { Component } from 'react';

import { Platform, StyleSheet, View, Image, TouchableHighlight } from 'react-native';
//import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button, Text } from "native-base";
import CardView from 'react-native-cardview';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";


export default class Home extends Component {


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


                    <Grid>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C1.jpg')} />
                            </TouchableHighlight>
                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C2.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C3.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C4.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C10.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                        </Col>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C5.jpg')} />
                            </TouchableHighlight>
                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C6.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>

                                    <Image style={styles.cardView_InsideText} source={require('../assets/C7.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C8.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C10.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                        </Col>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C9.jpg')} />
                            </TouchableHighlight>
                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C10.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C11.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C1.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C8.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                        </Col>
                        <Col><CardView
                            style={styles.cardViewStyle}>
                            <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                <Image style={styles.cardView_InsideText} source={require('../assets/C5.jpg')} />
                            </TouchableHighlight>

                        </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C6.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C7.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                 <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C8.jpg')} />
                                </TouchableHighlight>
                            </CardView>
                            <CardView
                                style={styles.cardViewStyle}>
                                <TouchableHighlight onPress={() => this.props.navigation.navigate("ThreeD")}>
                                    <Image style={styles.cardView_InsideText} source={require('../assets/C11.jpg')} />
                                </TouchableHighlight>

                            </CardView>
                        </Col>
                    </Grid>

                </View>

            </Container>

        );
    }

}

const styles = StyleSheet.create({

    MainContainer: {

        // flex:1,
        //  backgroundColor: '#F5FCFF',
        //  justifyContent: 'center',
        // alignItems: 'center',

    },

    cardViewStyle: {

        width: 180,
        height: 150,
        marginTop: 10

    },

    cardView_InsideText: {

        fontSize: 20,
        color: '#000',
        width: 180,
        height: 150
        //  textAlign: 'center',
        //marginTop: 50

    }

});