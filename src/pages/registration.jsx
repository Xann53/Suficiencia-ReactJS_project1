import React, { Component } from 'react';
import './homePage.css';
import BasicExample from '../components/Form';
import RegisHead from './registrationHeader';

class RegistrationPage extends Component {
    render() { 
        return (
            <>
                <div>
                    <header className="App-header">
                        <RegisHead />
                    </header>
                </div>
                <div class='b'></div>
                <div class='c'></div>
                <BasicExample />
            </>
        );
    }
}
 
export default RegistrationPage;