import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import AlbumDetails from './components/album/AlbumDetails';
import SignIn from "./components/authentification/SignIn";
import LogIn from  "./components/authentification/LogIn";
import Playlist from "./components/album/Playlist";


const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path={'/details/:id'} exact component={AlbumDetails}/>
            <Route path={'/myplaylist'} exact component={Playlist}/>
            {/*<Route path={'/compte'} exact component={SignIn}/>*/}
            {/*<Route path={'/connexion'} exact component={LogIn}/>*/}

        </Switch>
    );
}

export default Routes;
