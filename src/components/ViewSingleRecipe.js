import React from 'react';
import '../App.css';
import UpdateRecipe from './UpdateRecipe';


class ViewRecipes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            isLoaded: false,
            error: null,
            isEdit: false
        }
    }

    componentDidMount() {
        this.getAll();
       
    }

    getAll = async () => {
        const url = `http://localhost:3001/recipes/1`;
        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ isLoaded: true, data: data }))
        .catch(error => this.setState({ isLoaded: true, error: error }))
    }

    handleClick = () => {
        this.setState({ isEdit: true })
    }
    render(){
        const { error, isLoaded, data, isEdit } = this.state;
        if (error) {
          return <div>Error: There was a problem with your fetch request. See console for more details. {console.log(error.message)}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else if(isEdit) {
            return <UpdateRecipe data = {data} />
        } else {
          return (
            <div>
                <ul>
                    <button onClick={this.handleClick}>EDIT</button>
                    <p>ViewSingleRecipe Component</p>
                    <p>{data.name}</p>
                    <p>{data.description}</p>
                    <p>{data.difficulty}</p>
                </ul>
            </div>
          );
        }
      }
}

export default ViewRecipes;