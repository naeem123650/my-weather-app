import React from 'react';

function DisplayWeather(props){
    
    return(
        <div className="DisplayWeather">
             <footer id="footer" className="footer-area pt-50">
                 <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="subscribe-content mt-45">
                          

                    <div className="card weather-card subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s"> 

                 
                  <div className="card-body pb-3">

                   
                  <h4 className="card-title text-left font-weight-bold">{props.displayData.location}</h4>
                    
                    <p className="card-text text-left">{props.displayData.date}, {props.displayData.desc} <span className="text-right"><img src={props.displayData.img} alt="Loading.." /></span></p>
                    <div className="d-flex justify-content-right">
                    <p className="display-1 degree">{props.displayData.temp}</p>
                      <i className="fa fa-temperature-high fa-2x pt-3 amber-text" aria-hidden="true"></i>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between mb-4">
                      <p></p>   
                      <p><i className="fas fa-leaf fa-lg text-warning pr-2"></i>{props.displayData.pressure} Pressure</p>
                      <p><i className="fas fa-leaf fa-lg grey-text pr-2"></i>{props.displayData.wind_speed} km/h Winds</p>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <p><i className="fas fa-tint fa-lg text-secondary pr-2"></i>{props.displayData.humidity}% Humidity</p>
                      <p><i className="fas fa-wind fa-lg text-success pr-2"></i>{props.displayData.wind_dir} Wind Direction</p>
                      <p><i className="fas fa-snowflake fa-lg text-danger pr-2"></i>{props.displayData.visibility } Visibility</p>
                    </div>
                   

                    <div className="collapse-content">

                      <div className="collapse" id="collapseExample">

                        <table className="table table-borderless table-sm mb-0">
                          <tbody>
                            <tr>
                              <td className="font-weight-normal align-middle">Tuesday</td>
                              <td className="float-right font-weight-normal">
                                <p className="mb-1">24&deg;<span className="text-muted">/12&deg;</span></p>
                              </td>
                              <td className="float-right mr-3">
                                <i className="fas fa-sun fa-lg amber-text"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-weight-normal align-middle">Wednesday</td>
                              <td className="float-right font-weight-normal">
                                <p className="mb-1">19&deg;<span className="text-muted">/10&deg;</span></p>
                              </td>
                              <td className="float-right mr-3">
                                <i className="fas fa-cloud-sun-rain fa-lg text-info"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-weight-normal align-middle">Thursday</td>
                              <td className="float-right font-weight-normal">
                                <p className="mb-1">23&deg;<span className="text-muted">/15&deg;</span></p>
                              </td>
                              <td className="float-right mr-3">
                                <i className="fas fa-sun fa-lg amber-text"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-weight-normal align-middle">Friday</td>
                              <td className="float-right font-weight-normal">
                                <p className="mb-1">26&deg;<span className="text-muted">/19&deg;</span></p>
                              </td>
                              <td className="float-right mr-3">
                                <i className="fas fa-sun fa-lg amber-text"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-weight-normal align-middle">Saturday</td>
                              <td className="float-right font-weight-normal">
                                <p className="mb-1">20&deg;<span className="text-muted">/16&deg;</span></p>
                              </td>
                              <td className="float-right mr-3">
                                <i className="fas fa-cloud fa-lg text-info"></i>
                              </td>
                            </tr>
                            <tr>
                              <td className="font-weight-normal align-middle">Sunday</td>
                              <td className="float-right font-weight-normal">
                                <p className="mb-1">22&deg;<span className="text-muted">/13&deg;</span></p>
                              </td>
                              <td className="float-right mr-3">
                                <i className="fas fa-cloud-sun fa-lg text-info"></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                      </div>

                      <hr className="" />

                        <a className="btn btn-flat main-btn red-text pl-6 pr-6 my-1 mr-0 mml-1 deep-purple-text collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">More</a>

                    </div>

                  </div>

                </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="subscribe-form mt-50">
                           
                        </div>
                    </div>
                 </div> 
            <div className="footer-widget">
                <div className="row">
                  
                    
                   
                </div> 
            </div>
            <div className="footer-copyright">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright d-sm-flex justify-content-between">
                            <div className="copyright-content text-center">
                                <p className="text">Designed and Developed by <a href="https://uideck.com" rel="nofollow"><i className="fa fa-copyright fa-1px"></i> Naeem</a></p>
                            </div> 
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        <div id="particles-2"></div>
    </footer>
    
      <button className="back-to-top"><i className="lni lni-chevron-up"></i></button>
        </div>
    )
}

export default DisplayWeather