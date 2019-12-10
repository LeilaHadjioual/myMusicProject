import React from 'react';
import Header from '../components/widget/Header';
import Slider from '../components/widget/Slider';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchBar from '../components/searchBar/SearchBar';
import * as ApiCall from '../components/apiCall/ApiCall';
import {Link} from 'react-router-dom';
import './Home.scss';


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            albums: [],
            //myPlaylist: [],
        };
    };

    componentDidMount() {
        ApiCall.getAlbums().then(item => this.setState({
            albums: item
        }));
    }

//recherche albums/artist/chanson contenant la valeur insérée
    searchArtist = (myValue) => {
        ApiCall.getAlbums(myValue).then(item => this.setState({
            albums: item
        }))
    };

    addPlaylist () {
        console.log("ajouter  à la playlist");



    };

    renderAlbums = () => {
        const {albums} = this.state;
        //ternaire: si pas d'albums ou album contient rien return null
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
                                    {item.title}
                                </div>
                            </div>
                            <div className="footer">
                                <div className="links">
                                    <Link to={`/details/${item.album.id}`} className="link">
                                        <AddOutlinedIcon/>
                                    </Link>

                                    <a className="link" onClick={this.addPlaylist} href="#">
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
         let genres = [
         {img: '/img/banner1.jpg'},
         {img: '/img/banner2.jpg'},
         {img: '/img/banner3.jpg'}
     ];

        return (
            <div className="">
                {<Header/>}
                 <Slider genres={genres}/>
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
