import {createStore} from 'redux';

function reducer(oldState = [], action) {
    switch (action.type) {
        case 'ADD_TO_PLAYLIST':
            const newAlbum = {
                artist: action.artist,
                title: action.title,
                picture: action.picture,
                id: action.id,
            };
            //      const newState = oldState.concat(newAlbum);
            const newState = [...oldState, newAlbum];
            return newState;

        default:
            return oldState;
    }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());