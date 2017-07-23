import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

require('./index.scss');

import { App } from './app/app';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));