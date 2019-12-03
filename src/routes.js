import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import AlbumDetails from './components/album/AlbumDetails';


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path={'/details/:id'} exact component={AlbumDetails}/>
        </Switch>
    );
}

export default Routes;
