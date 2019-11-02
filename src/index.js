import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Internationalization
import { IntlProvider } from 'react-intl';
import locales from './locales';

const locale = 'es';
const messages = locales[`${locale}`];

ReactDOM.render(
    <IntlProvider locale={locale} messages={messages}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
