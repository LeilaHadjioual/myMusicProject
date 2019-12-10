import React from 'react';
import Header from "../widget/Header";
import './Playlist.scss';
import {Link} from "react-router-dom";


class Playlist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };

    render() {
        return (
            <div>
                <Header/>
                <div className="card container">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="..." className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title" data-test-id2 = "text2">NOM artiste</h5>
                                <p className="card-text">nom album</p>
                                <Link to={`/details/69348022`} className="card-text">Ecouter</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Playlist;