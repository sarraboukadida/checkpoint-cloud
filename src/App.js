
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';
import {Component} from 'react'



class App extends Component {
render() {
  return (
    <div className="App">
      <header className="App-header">
    
      <h1>hello this is a checkpoint</h1>

      <frame  className='map'>
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
      </frame>
      </header>
      
    </div>
  );
}
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyCdRuKwphJjIiUSoHuAkQVIdLm3Q31lYSQ")
})(App)


