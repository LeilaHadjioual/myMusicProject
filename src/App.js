import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import {addAlbumToPLaylist} from "./store/Action";
import connect from "react-redux/es/connect/connect";



class App extends React.Component {



    render() {
        return (
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        );
    }
}



export default (App);




