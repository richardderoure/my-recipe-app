import React from 'react';
import '../App.css';

class DeleteRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data,

        }
    }

    handleClick = () => {
        console.log(this.state.data.id);
        const url = `http://localhost:3001/recipes/delete`
        fetch(url, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: this.state.data.id})
          })
    }

    render(){

        return(
            <div>
                <p>DeleteRecipe Component</p>
                <p>Final chance</p>
                <button onClick={this.handleClick}>Delete</button>
            </div>

            
        )
    }
}

export default DeleteRecipe;