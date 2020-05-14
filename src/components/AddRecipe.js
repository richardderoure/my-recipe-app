import React from 'react';
import '../App.css';

class AddRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: {
                name: null,
                description: null,
                difficulty: null,
            }
        }
    }

    handleChange = (e) => {
            let info = e.target.value;
            let field = e.target.name;
            console.log(field);
            if(field === 'name'){ 
                this.setState({ data: { ...this.state.data, name : info} })
            } else if(field === 'description'){
                this.setState({ data: { ...this.state.data, description : info} })
            } else if(field === 'difficulty'){
                this.setState({ data: { ...this.state.data, difficulty : info} })
            }
    }
    handleSubmit = () => {
        const url = `http://localhost:3001/recipes`
        fetch(url, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name: this.state.data.name, description: this.state.data.description, difficulty: this.state.data.difficulty})
          })
    }

    render(){

        return(
            <div>
                <p>AddRecipe Component</p>
                <form>
                    Name:
                    <input type="text" value={this.state.data.name} name='name' onChange={this.handleChange}/>
                    Description:
                    <input type="text" value={this.state.data.description} name='description' onChange={this.handleChange}/>
                    Difficulty
                    <input type="text" value={this.state.data.difficulty} name='difficulty' onChange={this.handleChange}/>
                    <button type="submit" onClick = {this.handleSubmit}>Add Recipe</button>
                </form>
            </div>
        )
    }
}

export default AddRecipe;