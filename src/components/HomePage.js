import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Link} from 'react-router-dom';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hidden: false,
        }
    }

    render(){
        return(
            
            <div className="components-container">
                    <div className="component-box">
                        <a href="/recipes">
                            <h2>View Recipes</h2>
                        </a>
                    </div>
                    <div className="component-box">
                        <a href='/recipes/add'>
                            <h2>Add Recipes</h2>
                        </a>
                    </div>
            </div>
        )
    }
}

export default Main;