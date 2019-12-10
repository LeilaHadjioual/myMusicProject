
let nextAlbumId = 0;

export function addAlbumToPLaylist(album) {
    const action = {
        type: 'ADD_TO_PLAYLIST',
        artist: album.artist,
        title: album.title,
        picture: album.picture,
        id: nextAlbumId++
    }
    return action;
}
