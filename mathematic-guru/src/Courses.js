import React, {Component} from 'react';
import logo from './logo.svg';
import './style1.css';
import './style.css';
import Header, {Footer} from './components/Header';
import CourseListContainer from './components/CourseCom';

class Courses extends Component {
render(){
	return(
		<>
			<section id="content-wrapper" className="mainblock">
			        <div className="container">	
					<CourseListContainer />	
				</div>
			</section>
		</>
	);
}

}
export default Courses;
