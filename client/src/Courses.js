import React, {Component} from 'react';
import logo from './logo.svg';
import './style1.css';
import './style.css';
import Header, {Footer} from './components/Header';
import CourseListContainer from './components/CourseCom';
import {connect} from 'react-redux';

class Courses extends Component {
constructor(props){
        super(props);
        this.state = {
                        apiResponse: [],
                        dataBaseResponse : []
                     };
        }
componentDidMount =() =>{
        //this.callAPI();
}
callAPI = () =>{
        const that = this;
        let dataResponse = "";
        fetch('http://192.168.253.128:4000/courses/course-list').then(
            function(response){
                return response.json();
            }
            ).then(function(jsonStr){
                dataResponse = jsonStr;
                if(jsonStr.statusType == 'error'){
                        that.props.history.push('/404');
                }else{
                        that.setState(
                                {
                                apiResponse : dataResponse
                                }
                        );
                }
            });
}
render(){
	return(
		<>
			<section id="content-wrapper" className="mainblock">
			        <div className="container">	
					<CourseListContainer  response = {this.props.courseList} />	
				</div>
			</section>
		</>
	);
}

}
const mapStateToProps = (state) =>{
        return{
                courseList: state.courseList
        }
}
export default connect(mapStateToProps, null)(Courses);
