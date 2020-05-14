import React from 'react';
import '../App.css';
import UpdateRecipe from './UpdateRecipe';
import DeleteRecipe from './DeleteRecipe';


class ViewRecipes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: this.props.data ,
            isLoaded: true,
            error: null,
            isEdit: false,
            isDelete: false,
        }
    }

    handleClickEdit = () => {
        this.setState({ isEdit: true })
    }

    handleClickDelete = () => {
        let confirm1 = window.confirm("Are you sure you want to do this? This cannot be undone.");
        if(confirm1){
            let confirm2 = prompt("To delete this entry, please enter 'danger zone' into the text box below.")
            if(confirm2==='danger zone'){
                this.setState({ isDelete: true })
            }
        }

    }
    render(){
    console.log(this.props);

        const { error, isLoaded, data, isEdit, isDelete } = this.state;
        if (error) {
          return <div>Error: There was a problem with your fetch request. See console for more details. {console.log(error.message)}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else if(isEdit) {
            return <UpdateRecipe data = {data} />
        } else if(isDelete) {
            return <DeleteRecipe data = {data} />
        }  else {
          return (
            <div>
                <ul>
                    <button onClick={this.handleClickEdit}>EDIT</button>
                    <button onClick={this.handleClickDelete}>DELETE</button>
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