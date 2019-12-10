import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Slider.scss';

class Slider extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            indice: 0
        }
        this.prevSlide = this.prevSlide.bind(this)
        this.nextSlide = this.nextSlide.bind(this)
        this.goSlide = this.goSlide.bind(this)
    }

    goSlide(index) {
        this.setState({
            indice: index
        })
    }

    prevSlide() {
        let index = this.state.indice
        let array = this.props.genres
        let arrayLength = array.length

        if (index < 1) {
            index = arrayLength
        }
        --index;

        this.setState({
            indice: index
        })
    }

    nextSlide() {
        let index = this.state.indice
        let array = this.props.genres
        let arrayLength = array.length - 1

        if (index === arrayLength) {
            index = -1
        }
        ++index;

        this.setState({
            indice: index
        })
    }

    render() {
        const genres = this.props.genres;
        const listItem = genres.map((item, index) =>
           <li>
                {genres[this.state.indice].name}
                <img src={genres[this.state.indice].img}/>
            </li>
        )
        return (
            <div className="container">
                <div className="row">

                <ArrowBackIosIcon className="arrow arrow-left" onClick={this.prevSlide}/>
                <ul className="slides">
                    {listItem}
                </ul>
                <ArrowForwardIosIcon className="arrow arrow-right" onClick={this.nextSlide}/>
              
            </div>
            </div>
        );

    }
}

export default Slider;