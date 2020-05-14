import React from 'react';
import '../App.css';

class UpdateRecipe extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data,
            newData: this.props.data,
        }
    }

    handleChange = (e) => {
        let obj = e.target.value;
        console.log(obj);
        console.log(this.state.newData.name);
        this.setState({ newData: { ...this.state.newData, name : obj} })
    }

    handleSubmit = () => {
        const url = `http://localhost:3001/recipes/update`
        fetch(url, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({newName: this.state.newData.name, id: this.state.newData.id})
          })
    }

    render(){

        return(
            <div>
                <p>Edit the name</p>
                <form>
                    <input type="text" value={this.state.newData.name} onChange={this.handleChange}/>
                    <button type="submit" onClick = {this.handleSubmit}>Save</button>
                </form>
            </div>
        )
    }
}

export default UpdateRecipe;