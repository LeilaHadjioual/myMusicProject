import React from 'react';
import ReactDom from 'react-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ApiCall from 'ApiCall';
import mockAxios from 'axios';


it('calls axios and returns images', async () => {
    mockAxios.get.mockImplementationOnce(() =>Promise.resolve({
        data: {
            results: ['Eminem']
        }
    }));
    const images = ApiCall("photo");

    expect(images).toEqual(["Eminem"]);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalldWith()

})