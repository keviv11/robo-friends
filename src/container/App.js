import React, {Component} from 'react';
import CardList from './../components/CardList';
import SearchBox from "./../components/SearchBox";
import Scroll from './../components/Scroll';
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }
    onSearchChange = (event) => {
        //state change when searchfield change
        this.setState({searchfield: event.target.value});
    }
    componentDidMount() {
        //fetch usersJson from the api
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                return response.json();
            })
            .then(users => {
                this.setState({robots: users});
            });
    }
    render() {
        const filteredArray = this
            .state
            .robots
            .filter((robots) => {
                return robots
                    .name
                    .toLowerCase()
                    .includes(this.state.searchfield.toLowerCase());
            });
        return (
            <div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredArray}/>
                </Scroll>
            </div>
        );
    };
};

export default App;