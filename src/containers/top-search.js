import React, { Component } from 'react';
import { SearchForecastForCity } from '../actions';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
class TopSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchText : ''
        }
        this.onChangeInputUpdateState = this.onChangeInputUpdateState.bind(this);
        this.submitSearchForm = this.submitSearchForm.bind(this);
    }

    onChangeInputUpdateState(event){        
        this.setState({
            searchText : event.target.value
        })
    }
    submitSearchForm(event){        
        event.preventDefault();
        this.props.SearchForecastForCity(this.state.searchText)
    }
    render(){
        return (
            <form className="input-group" onSubmit={this.submitSearchForm}>
                    <input 
                        value={this.state.searchText}
                        placeholder="Search Wheather forecast for favourite cities"
                        className="form-control"
                        onChange={this.onChangeInputUpdateState}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </span>
            </form>
        )
    }
}

const mapBindActionToState = (dispatch) =>{
    return bindActionCreators({SearchForecastForCity: SearchForecastForCity}, dispatch)
}

export default connect(null, mapBindActionToState)(TopSearch);