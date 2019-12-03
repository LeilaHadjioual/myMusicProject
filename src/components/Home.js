import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from '../components/widget/Header';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchBar from '../components/searchBar/SearchBar';
import * as ApiCall from '../components/apiCall/ApiCall';
import {Link} from 'react-router-dom';
import './Home.scss'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: []
        }
    };

    componentDidMount() {
        ApiCall.getAlbums().then(item => this.setState({
            albums: item
        }));
    }

//recherche les albums de l'artiste inséré
    searchArtist = (myValue) => {
        ApiCall.getAlbums(myValue).then(item => this.setState({
            albums: item
        }))
    }

    renderAlbums = () => {
        const {albums} = this.state;
        return albums && albums.length ?
            albums.map((item, index) => (
                    <div key={index} className="col-md-4 mb-2">
                        <div className="card border-secondary">
                            <img className="card-img-top" src={item.album.cover_big} alt=""/>
                            <div className="card-body">
                                <span className="text-primary">
                                    {item.artist.name}
                                </span>
                                <div className="card-title">
                                    {item.album.title}
                                </div>
                            </div>
                            <div className="footer">
                                <div className="links">
                                    <Link to={`/details/${item.album.id}`} className="link" href="#">
                                        <AddOutlinedIcon/>
                                    </Link>
                                    <a className="link" href="#">
                                        <FavoriteIcon/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : null
    };

    render() {
        console.log(this.state)
        return (
            <div className="">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                            <SearchBar searchArtist={this.searchArtist}/>
                            <div className="row ">
                                {this.renderAlbums()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;
