import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from './Highlight';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Highlight />, div);
    ReactDOM.unmountComponentAtNode(div);
});
