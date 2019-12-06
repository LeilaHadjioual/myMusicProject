import React from 'react';
import ReactDom from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import SearchBar from './SearchBar';


let container = null;

beforeEach( () => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach( () => {
    unmountComponentAtNode(container);
    container.remove();
});

it('renders without crashing', () => {
    act( () => {
        render(<SearchBar><button></button></SearchBar>, container);
    });
    expect(document.querySelector("[data-testid='button']").textContent).toMatch(
        "S"
    );

});