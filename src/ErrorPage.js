import React from 'react';

class ErrorPage extends React.Component{

    render(){
        setTimeout(() => {
            window.location.reload();    
        }, 3000);

        return(
            <div className="ErrorPage">
                    <footer id="footer" className="footer-area pt-50">
                     <div className="container">
    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="subscribe-content mt-45">
                              
                    <a href="true">
                        <div className="card weather-card subscribe-area wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s"> 
    
                     
                         <div className="card-body pt-1 pb-1 mt-5">
    
                            <p>Oops! This obviously isn't a page you were looking for.</p>
                            
                            <img src="https://mdbootstrap.com/img/Others/404_mdb.png" alt="Error 404" className="img-fluid mb-4" />
    
                             <h3 className="font-weight-bold">Oops!.. Please Search The Valid City</h3>
    
                            
                        </div>
    
                    </div>
                    </a>
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
            
        </footer>
            </div>
        )
    }
    
}
export default ErrorPage