import React, {Component} from 'react';
import logo from './logo.svg';
import './style1.css';
import './style.css';
import Header, {Footer} from './components/Header';
import CourseDetails from './components/CourseDetailsCom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {getTopicList} from './actions/getCourseData';
import {connect} from 'react-redux';

class CourseDesc extends Component {
constructor(props){
        super(props);
        this.state = {
                        apiResponse: [],
			dataBaseResponse : []
                     };
        }
componentDidMount =() =>{
        //this.callAPI();
	this.props.topicList(this.props.match.params.id);
}

topicHandler = (event, link) =>{
	//event.target.classList.toggle('fa-minus');
	let ele = event.target;
	if(typeof link === 'undefined'){
		ele.children[0].classList.toggle('fa-minus');
		ele.parentElement.parentElement.classList.toggle('active');
	}else{
		if(document.getElementById("tub-iframe")){
			var ifrmeObj = document.getElementById("tub-iframe");
			ifrmeObj.remove();
		}
		
		ele.insertAdjacentHTML('afterend', "<iframe id='tub-iframe' src='"+link+"' frameborder='0'        allow='autoplay; encrypted-media' allowfullscreen title='video' width='100%' height='300px' />");	
	}
}

callAPI = () =>{
	const that = this;
	let dataResponse = "";
	fetch('http://192.168.253.128:4000/courses/course/'+this.props.match.params.id).then(
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
        {/*const that = this;
        fetch('http://192.168.253.128:9000/testAPI').then(
            function(response){
                return response.json();
            }
            ).then(function(jsonStr){
                that.setState({apiResponse: jsonStr});
            });*/}

}
render(){
	const course_id = this.props.match.params.id;
        return(
                <>
                      <CourseDetails response= {this.props.courseList} paramVal={this.props.match.params.id}  click={this.topicHandler} listTopic={this.props.listTopic} />
                </>
        );
}

}
const changePropsToState = (dispacth) =>{
        return{
                topicList: (topic_id)=>{
                        dispacth(getTopicList(topic_id))
                }
        }
}
const mapStateToProps = (state) =>{
        return{
		listTopic : state.topicList,
                courseList: state.courseList
        }
}
export default connect(mapStateToProps, changePropsToState)(CourseDesc)
