import { Main } from './Main';

import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from './dom/App';

document.addEventListener('DOMContentLoaded', () => {
    const main = new Main();
});

const appElement = document.getElementById('root');

if(appElement !== null){
    appElement.innerHTML = renderToString(React.createElement(App));
}
