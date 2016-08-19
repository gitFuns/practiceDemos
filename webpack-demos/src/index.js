import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
    render() {
        return (
            <div>
                <h1>欢迎参加珠峰培训</h1>
            </div>
        )
    }
}

var rootElement = document.getElementById('app');
render(<App />, rootElement);