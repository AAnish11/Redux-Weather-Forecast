import React, { Component } from 'react';

export default class GoogleMap extends Component{
    //this is a react life cycle method
    // for more life cycles https://facebook.github.io/react/docs/react-component.html
    componentDidMount(){        
        const latLng = {
                lat : this.props.lat,
                lng : this.props.lng
        };
        const map = new google.maps.Map(this.refs.map, {
            zoom : 12,
            center : latLng
        });
        new google.maps.Marker({
          position: latLng,
          map: map,
          title: this.props.cityName
        });
    }
    render(){
        return(
            <div ref="map"></div>
        )
    }
}