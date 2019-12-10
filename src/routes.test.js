import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom'
import { act } from 'react-dom/test-utils';
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from 'history';
import Home from './components/Home';
import App from './routes';


let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

 it('Home test', () => {
     act(() => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>,
            container
        );
    })
    expect(container.querySelector("[data-test-id=search]").innerHTML).toBe("Rechercher");
});


it('Test playlist', () => {
    act(() => {
        render(
            <MemoryRouter initialEntries={['/myplaylist']}>
                <App/>
            </MemoryRouter>,
            container
        );
    })
    expect (container.querySelector("[ data-test-id2 = text2]").innerHTML).toBe("NOM artiste");
})





