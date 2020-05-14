import React from 'react';
import '../App.css';


class ViewRecipes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            isLoaded: false,
            error: null
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

    render(){
        const { error, isLoaded, data } = this.state;
        if (error) {
          return <div>Error: There was a problem with your fetch request. See console for more details. {console.log(error.message)}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
                <ul>
                    <a href="/recipes/id/1/update">EDIT</a>
                    <p>ViewSingleRecipe Component</p>
                    <p>{this.state.data.name}</p>
                    <p>{this.state.data.description}</p>
                    <p>{this.state.data.difficulty}</p>
                </ul>
            </div>
          );
        }
      }
}

export default ViewRecipes;