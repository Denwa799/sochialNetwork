import React from 'react';
import ReactDOM from 'react-dom';
import DenwaApp from './App';

test('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DenwaApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
