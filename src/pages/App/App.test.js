import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ActionPrompt from "../ActionPrompt/ActionPrompt";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />,<ActionPrompt />, div);
  ReactDOM.unmountComponentAtNode(div);
});
