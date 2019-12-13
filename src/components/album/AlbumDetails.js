import React from 'react';
import * as ApiCall from '../apiCall/ApiCall';
import Header from '../widget/Header';
import './AlbumDetails.scss';


class AlbumDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            album: "",
            tracks: []
        }

    };

    //récupère l'album et les chansons associées
    componentDidMount() {
        ApiCall.getOneAlbum(this.props.match.params.id).then(album => {
            this.setState({
                album: album,
                tracks: album.tracks.data
            })
        })
    }

    renderTracks = () => {
        const {tracks} = this.state;
        return tracks && tracks.length ?
            tracks.map((track, index) => (
                <div className="track" key={index}>
                    <p>{track.title}</p>
                    <audio controls src={track.preview}>
                        Le navigateur ne supporte pas l'audio html
                    </audio>
                    <br/>
                    <hr/>
                </div>

            ))
            : null;
    }

    renderAlbum = () => {
        const {album} = this.state;
        return (
            <div className="container">
                <div className="col-md-4 mb-4">
                    <img className="card-img-top" src={album.cover_big} alt=""/>
                    <div className="card-body">
                         <span className="text-primary">
                            {album.release_date}
                             </span>
                        <div className="card-title">
                            {album.title}
                        </div>
                    </div>
                </div>
                <div className="tracks">
                    {this.renderTracks()}
                </div>
            </div>
        )
    }

    render() {

        return (
            <div className="">
                <Header/>
                <div className="container">
                    <div className="row">
                        {this.renderAlbum()}
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumDetails;