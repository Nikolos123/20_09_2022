import logo from './logo.svg';
import './App.css';
import React from "react";
import AuthorList from "./components/Author";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': []
        }
    }


    componentDidMount() {

        // const authors = [
        //     {
        //         'first_name': 'Александр',
        //         'last_name': 'Пушкин',
        //         'birthday_year': 1799
        //     }
        //
        // ]
        axios.get('http://127.0.0.1:8003/authors/').then(response => {
            this.setState({
                'authors': response.data
            })
        }).catch(error => console.log(error))

    }


    render() {
        return (
            <div>
                <AuthorList authors={this.state.authors}/>
            </div>
        )
    }
}

export default App;
