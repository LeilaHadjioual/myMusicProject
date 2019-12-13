import React from 'react';
import SearchIcon from '@material-ui/icons/Search';


class SearchBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myValue: ''
        }
    };

//récupère la valeur tapée
    onChangedInput = (event) => {
        this.setState({myValue: event.target.value})
    };

    submitSearch = (event) => {
        event.preventDefault();
        let {myValue} = this.state;
        this.props.searchArtist(myValue);

    };

    render() {
       // console.log(this.state);
        return (
            <div className="search mb-2 mt-4">
                <form onSubmit={(event) => this.submitSearch(event)}>
                    <div className="row">
                        <div className="col-md-10">
                            <div className="form-group">
                               
                                <input value={this.state.myValue}
                                       onChange={(event) => this.onChangedInput(event)}
                                       type="text" placeholder="Rechercher..."
                                       className="form-control"/>
                                        {/*<h3 data-test-id='search'>Rechercher</h3>*/}
                            </div>
                        </div>
                        <div className="col-mt-2">
                            <div className="form-group">
                                <button data-testid="button" type='submit' className="btn btn-secondary">
                                    <SearchIcon/>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;