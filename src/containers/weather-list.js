import React , {Component} from 'react'
import { connect } from 'react-redux';
import LineChart  from '../components/spark-chart/line-chart';
import GoogleMap  from '../components/google-map';


class WeatherList extends Component{
    getWeatherForecastDetail(cityData){
        const name = cityData.city.name;
        const latLng = cityData.city.coord;
        const pressure =  cityData.list.map(wheather =>  wheather.main.pressure );
        const temperatures =  cityData.list.map(wheather =>  wheather.main.temp );
        const humidities =  cityData.list.map(wheather =>  wheather.main.humidity );        
        return  (
        <tr key={name}>
            <td> <GoogleMap lat={latLng.lat} lng={latLng.lon} cityName={name} /></td>
            <td><LineChart data={pressure} color="blue" unit="hPa" /></td>
            <td><LineChart data={humidities} color="green" unit="%" /></td>
            <td><LineChart data={temperatures} color="orange" unit="C"/></td>            
        </tr>
    );
        
    }
    render()
    {
        return (
            <table className="table table-stripped">
                <thead>
                    <tr>
                        <th>City Name</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                        <th>Temperature (C)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weatherForecast.map(this.getWeatherForecastDetail)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weatherForecast  }) =>{
    return { weatherForecast }
}

export default connect( mapStateToProps)(WeatherList);