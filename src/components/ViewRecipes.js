import React from 'react';
import '../App.css';
import ViewSingleRecipe from '../components/ViewSingleRecipe';


class ViewRecipes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            isLoaded: false,
            error: null,
            viewSingle: false,
            currentData: null
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

      handleClick = (e) => {
        let id = e.target.value;
        let count = 0;
        this.state.data.map((element => {
          if(element.id === id){
            this.setState({ currentData: this.state.data[count]})
            this.setState({ viewSingle: true })
          } else {
            count++
          };
        }))
      }

    render(){
        const { error, isLoaded, data, viewSingle, currentData } = this.state;
        if (error) {
          return <div>Error: There was a problem with your fetch request. See console for more details. {console.log(error.message)}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else if (viewSingle) {
          return <ViewSingleRecipe data = {currentData}/>
        }else {
          return (
            <div>
                <ul>
                    <p>ViewRecipe Component</p>
                    { data.map(data => ( 
                      <li key={data.id} onClick={this.handleClick} value={data.id}> {data.name} </li> 
                    )) }
                </ul>
            </div>
          );
        }
      }
}

export default ViewRecipes;