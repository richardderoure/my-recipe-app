import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


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
        const url = `http://localhost:3001/recipes`;
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
                    <p>ViewRecipe Component</p>
                    { data.map(data => ( 
                    <li key={data.id}> 
                      <Link to={{
                        pathname: `/recipes/id/${data.id}`,
                        state: {
                          data: data
                        }
                      }}> {data.name} 
                      </Link> 
                    </li> )) }
                </ul>
            </div>
          );
        }
      }
}

export default ViewRecipes;