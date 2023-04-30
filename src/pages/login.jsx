import React, { Component } from 'react';
import './allPageStyle.css';
import BasicExample from '../components/Form';
import LoginHead from './loginHeader';

class LoginPage extends Component {
    render() { 
        return (
            <>
                <div>
                    <header className="App-header">
                        <LoginHead />
                    </header>
                </div>
                <div class='b'></div>
                <div class='c'></div>
                <BasicExample />
            </>
        );
    }
}
 
export default LoginPage;