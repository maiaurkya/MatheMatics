import React from 'react';
import { Link, Route } from 'react-router-dom';
class NotFoundPage extends React.Component{
    render(){
        return (
	<>	
	  <section id="content-wrapper" className="mainblock page-not-found">
    	        <div className="container">
        	    <h1>Page Not Found!</h1>
		    <p style={{textAlign:"center"}}>
        	      <Link to="/">Go to Home </Link>
        	    </p>
          	</div>
	  </section>
	</>
	);
    }
}
export default NotFoundPage;
