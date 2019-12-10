import React from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import Header from "../widget/Header";
import './Playlist.scss';


class Playlist extends React.Component {

    render() {

        return (
            <div>
                <Header/>
                <div className="card container">
                    {this.props.albums.map((album, index) => (
                        <div className="row no-gutters" key={index}>
                            <div className="col-md-4">
                                <img src={album.picture} alt={album.artist} className="card-img"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{album.artist}</h5>
                                    <p className="card-text">{album.title}</p>
                                    <Link to={`/details/69348022`} className="card-text">Ecouter</Link>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>


        )
    }

}

function mapStateToProps(state) {
    const props = {
        albums: state
    }
    return props;

}

export default connect(mapStateToProps)(Playlist);


