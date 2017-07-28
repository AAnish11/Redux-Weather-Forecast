import React , {Component} from 'react'
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component{
    getWeatherForecastDetail(cityData){
        const name = cityData.city.name;
        const pressure =  cityData.list.map((pressure)=>{
                    return pressure.main.pressure;
            })
        const humidity = cityData.list.map((humidity)=>{
            return humidity.main.humidity;
        })
        const temperature = cityData.list.map((temperature)=>{
            return temperature.main.temp;
        })
        return  (
        <tr key={name}>
            <td>{ name }</td>
            <td><Sparklines data={pressure}>
					<SparklinesLine color="blue" />
				</Sparklines></td>
            <td><Sparklines data={humidity}>
					<SparklinesLine color="green" />
				</Sparklines></td>
            <td><Sparklines data={temperature}>
					<SparklinesLine color="orange" />
				</Sparklines></td>
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
                        <th>Pressure</th>
                        <th>Humidity</th>
                        <th>Temperature</th>
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