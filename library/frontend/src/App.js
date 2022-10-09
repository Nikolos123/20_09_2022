import logo from './logo.svg';
import './App.css';
import React from "react";
import AuthorList from "./components/Author";
import BookList from "./components/Book";
import BooksAuthor from "./components/BooksAuthor";
import NotFound404 from "./components/NotFound404";
import axios from "axios";
import {BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'authors': [],
            'books': [],
        }
    }


    componentDidMount() {

        axios.get('http://127.0.0.1:8003/authors/').then(response => {
            this.setState({
                'authors': response.data
            })
        }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8003/books/').then(response => {
            this.setState({
                'books': response.data
            })
        }).catch(error => console.log(error))

    }


    render() {
        return (
            <div>
                <BrowserRouter>
                    <nav>
                        <li>
                            <Link to='/'>Authors</Link>
                        </li>
                        <li>
                            <Link to='/books'>Books</Link>
                        </li>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<Navigate to='/authors'/>}/>
                        <Route path ='/authors'>
                            <Route index element={<AuthorList authors={this.state.authors}/>}/>
                            <Route path=':authorId' element={<BooksAuthor books={this.state.books}/>}/>
                        </Route>
                        <Route exact path='/books' element={<BookList books={this.state.books}/>}/>

                        <Route path='*' element={<NotFound404/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
