import React from 'react';
import './App.css';
import DisplayWeather from './DisplayWeather';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';
import ErrorPage from './ErrorPage'


class App extends React.Component {
  state = {
    loader:false,
    coords:{
      longitude:72.900, 
      latitude:20.367
    },
    weatherData:{
      location:"",
      temp:"",
      desc:"",
      region:"",
      country:"",
      wind_speed:"",
      pressure:"",
      precip:"",
      humidity:"",
      img:"",
      wind_dir:"",
      date:"",
      visibility:""
    },
    inputData:"",
    err:""
  }
  componentDidMount(){
    this.setState({loader:true})
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
          this.setState({
            longitude:position.coords.longitude,
            latitude:position.coords.latitude
          })
          fetch(`http://api.weatherstack.com/current?access_key=4b19c6a9b63a3f21772bf354dff3a576&query=${this.state.latitude},${this.state.longitude}`)
              .then(res => res.json())
              .then(data =>{
                let weatherDatas = {
                  location:data.location.name,
                  temp:data.current.temperature,
                  desc:data.current.weather_descriptions[0],
                  region:data.location.region,
                  country:data.location.country,
                  wind_speed:data.current.wind_speed,
                  wind_dir:data.current.wind_dir,
                  pressure:data.current.pressure,
                  precip:data.current.precip,
                  humidity:data.current.humidity,
                  img:data.current.weather_icons[0],
                  date:data.location.localtime,
                  visibility:data.current.visibility
                }
                this.setState({
                  loader:false,
                  weatherData:weatherDatas
                })
              })
        })
      }
      else{
        console.log('not supported')
      }
  }
  changeRegion = (e) => {

      this.setState({
        inputData:e.target.value
      })
  }
  changeWeather = (e) => {
    e.preventDefault();
    this.setState({loader:true})
    fetch(`http://api.weatherstack.com/current?access_key=4b19c6a9b63a3f21772bf354dff3a576&query=${this.state.inputData}`)
        .then(res => res.json())
        .then(data => {
            if(data?.success===false){
              this.setState({
                err:"error"
              })
            }else{

              console.log(data);
            
            
            let weatherDatas = {
              location:data.location.name,
              temp:data.current.temperature,
              desc:data.current.weather_descriptions[0],
              region:data.location.region,
              country:data.location.country,
              wind_speed:data.current.wind_speed,
              wind_dir:data.current.wind_dir,
              pressure:data.current.pressure,
              precip:data.current.precip,
              humidity:data.current.humidity,
              img:data.current.weather_icons[0],
              date:data.location.localtime,
              visibility:data.current.visibility
            }
            this.setState({
              loader:false,
              weatherData:weatherDatas
            })
          }
          
        })
  } 
  render(){
    let display;
    if(this.state.err === "error")
    {
      display = <ErrorPage />

     
    }
    else{
       
        display = this.state.loader ?  
      <Loader
          
          type="Circles"
          color="black"
          height={100}
          width={100}
          timeout={3000} //3 secs
         />:
         <DisplayWeather displayData={this.state.weatherData}/>

    }
    return (
      <div className="App">
    
      <header className="header-area">
      
              <div className="container">
  
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="header-hero-image text-center wow fadeIn" data-wow-duration="1.3s" data-wow-delay="1.4s">
                               <div className="subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="subscribe-form mt-20 mb-0">
                                              <form action="#" onSubmit={this.changeWeather}>
                                                  <input type="text" placeholder="Enter City" onChange={this.changeRegion}/>
                                                  <button className="main-btn">Check Weather</button>
                                              </form>
                                          </div>
                                      </div>
                                  </div> 
                              </div>
                          </div> 
                      </div>
                  </div> 
              </div> 
           
      </header>
      
      {
        display
      }
     
  
  </div>
    )}
  }
  
export default App;
