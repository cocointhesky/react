import React, {Component} from 'react';
import Stacklist from './Stacklist';
import {Link} from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <div>
                <div><h2>Flashcard Pro</h2></div>
                <br />
                <Stacklist />
                <h4 />
                <hr />
                <Link to='stack_form'><h4>Create a new Stack</h4></Link>
            </div>
        )
    }
}

export default App;