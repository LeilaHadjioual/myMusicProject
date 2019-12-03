import axios from 'axios';

const API_KEY = '9b464eb55emshefcd24297097760p112ac6jsnc03d0193f17f';

const request = axios.create({
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
    timeout: 30000,
    headers: {'x-rapidapi-key': API_KEY}
});

export function getAlbums(search='') {
    const albums = request.get(`search?q=${search}`)
        .then(response => response.data.data)
        .catch(error => console.log(error))
    return albums
}

export function getOneAlbum(id) {
    const album = request.get(`album/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error))
    return album
}