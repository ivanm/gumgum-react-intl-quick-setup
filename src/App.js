import React from 'react';
import { FormattedMessage } from 'react-intl';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    <FormattedMessage id="helloWorld" defaultMessage="Hello World!" />
                </p>
            </header>
        </div>
    );
}

export default App;
