import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onInputChange(event) {
        this.setState({inputText: event.target.value });
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                    <label>Image Search</label>
                        <input
                             type="text"
                             value={this.state.term}
                             onChange={e => this.setState({ term: e.target.value })} 
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default SearchBar;