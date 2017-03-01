/**
 * Created by lucas on 3/1/17.
 */
import React, {Component} from 'react';

export default class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};
    }

    onInputChange = event => this.setState({term: event.target.value});

    onFormSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <form
                className="input-group"
                onSubmit={this.onFormSubmit}>
                <input
                    type="text"
                    value={this.state.term}
                    className="form-control"
                    placeholder="Get a five-day forecast in your favorite cities"
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">
                        Submit
                    </button>
                </span>
            </form>
        )
    }
}
