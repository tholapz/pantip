import React from 'react';
import ReactDOM from 'react-dom';
import BreadCrumb from './BreadCrumb';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BreadCrumb />, div);
    ReactDOM.unmountComponentAtNode(div);
});
