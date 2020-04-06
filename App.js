import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './src/store'; //Import the store
import Router from './src/components/index' //Import the component file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        );
    }
}


//Sample.jsomn data as follw
/*
        {
            "id":1,
            "title": "manav",
            "text": "my name is manav"
        }
 */