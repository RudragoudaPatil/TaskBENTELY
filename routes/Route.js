import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';

import Login from '../components/Login';
import Home from '../components/Home';
import Exterier from '../components/Exterier';
import Interier from '../components/Interier';
import ThreeD from '../components/ThreeD';


const Route = createStackNavigator(
    {
        Login:{
            screen: Login,
            navigationOptions: {
            header: null,
            },
            } ,
      
      Home:{
        screen: Home,
        navigationOptions: {
        header: null,
        },
        } ,
        Exterier:{
            screen: Exterier,
            navigationOptions: {
            header: null,
            },
            },
        ThreeD:{
            screen: ThreeD,
            navigationOptions: {
            header: null,
            },
            } ,
        Interier:{
            screen: Interier,
            navigationOptions: {
            header: null,
            },
            } ,
      
    },
    {
        initialRouteName:'Login'
    },
    
);

const RouterConfig = createAppContainer(Route);

export default RouterConfig;