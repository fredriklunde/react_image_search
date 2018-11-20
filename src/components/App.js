import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
    onSearchSubmit(term){
        Axios.get('https://api.unsplash.com/search/photos', {
        params: {query: term },
        headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
            }
        });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    };
}

export default App;