import React , {Component} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchCityByName } from '../actions';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.setInputSearchCity = this.setInputSearchCity.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);

        this.state = {
            cityName : ''
        };
    }

    setInputSearchCity(event){
        let val =  event.target.value;
        this.setState({
            cityName :val
        })
    }
    handleSubmitForm(event){
        event.preventDefault();
        this.props.SearchCityByName(this.state.cityName);
        this.setState({
            cityName :''
        })
    }
    render()
    {
        return (
        <form className = "input-group" onSubmit={this.handleSubmitForm}> 
            <input 
            value ={this.state.cityName}
            onChange={this.setInputSearchCity}
            placeholder="Search wheather cast"
            className = "form-control"/>
            <span className = "input-group-btn">
                <input className = "btn btn-primary" value = "Submit" type = "submit"/>
            </span>
        </form>);
    }
}

const mapSearchEventBind = (dispatch) =>{
    return bindActionCreators({SearchCityByName : SearchCityByName}, dispatch);
}

export default connect(null, mapSearchEventBind)(SearchBar);