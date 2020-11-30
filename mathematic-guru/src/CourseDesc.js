import React, {Component} from 'react';
import logo from './logo.svg';
import './style1.css';
import './style.css';
import Header, {Footer} from './components/Header';
import CourseDetails from './components/CourseDetailsCom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class CourseDesc extends Component {
constructor(props){
        super(props);
        this.state = {
                        apiResponse: []
                     };
        }
componentDidMount(){
	console.log(this.props.match.params.id);
        this.callAPI();
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
	let response =[{rating:
	[{type: 'full', val :'1'},{type: 'full', val :'2'},{type: 'full', val :'3'},{type: 'full', val :'4'},{type: 'half', val :'5'}],topicsList:[{title: 'Topic 1', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'topic 2', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'Topic 3', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'Topic 4', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'Topic 5', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]}], ratingDetails: [{ ratingVal : "4.5", ratingCount : "20"}],courseDetails: [{about: 'This Course is specially designed for giving an early advantage to the students currently in 10th class by starting preparation immediately after 10th Board Examination. Ultimate objective of this course is to help students prepare for , JEE (Main + Advanced) Examination. Initially, this course begins with the fundamental study for the syllabus and pattern of JEE (Main + Advanced). Students will also be guided to prepare 11th and 12th board exams ,competitive exams like KVPY, Olympiads ,etc', desc: 'Algebra of complex numbers, addition, multiplication, conjugation, polar representation, properties of modulus and principal argument, triangle inequality, cube roots of unity, geometric interpretations.' }], topic: 'Alzebra', title : "Algebra of complex numbers",  subsCount: "33", duration: "03h 00m", authorShortName : 'RK', authorName : 'Rajni Kant Srivastava', categories : 'Algebra' , level: 'Medium', modifiedAt: 'May 17, 2019'},
	{rating:
        [{type: 'full', val :'1'},{type: 'full', val :'2'},{type: 'full', val :'3'},{type: 'full', val :'4'},{type: 'full', val :'5'}], ratingDetails: [{ ratingVal : "5", ratingCount : "20"}],courseDetails: [{about: 'This Course is specially designed for giving an early advantage to the students currently in 10th class by starting preparation immediately after 10th Board Examination. Ultimate objective of this course is to help students prepare for , JEE (Main + Advanced) Examination. Initially, this course begins with the fundamental study for the syllabus and pattern of JEE (Main + Advanced). Students will also be guided to prepare 11th and 12th board exams ,competitive exams like KVPY, Olympiads ,etc', desc: 'Permutations and combinations, Binomial theorem for a positive integral index, properties of binomial coefficients.Matrices as a rectangular array of real numbers, equality of matrices, addition, multiplication by a scalar and product of matrices, transpose of a matrix, determinant of a square matrix of order up to three, inverse of a square matrix of order up to three, properties of these matrix operations, diagonal, symmetric and skew-symmetric matrices and their properties, solutions of simultaneous linear equations in two or three variables.Addition and multiplication rules of probability, conditional probability, Bayes Theorem, independence of events, computation of probability of events using permutations and combinations.' }], topic: 'Logarithms', title : "Logarithms and their properties",  subsCount: "33", duration: "03h 00m", authorShortName : 'RK', authorName : 'Rajni Kant Srivastava', categories : 'Logarithms' , level: 'Medium', modifiedAt: 'May 17, 2019'},
	{rating:
        [{type: 'full', val :'1'},{type: 'full', val :'2'},{type: 'full', val :'3'},{type: 'full', val :'4'},{type: 'half', val :'5'}],topicsList:[{title: 'Topic 1', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'topic 2', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'Topic 3', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'Topic 4', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]},{title: 'Topic 5', subtopic :[{title :'topic 1', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 2', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 3', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}, {title :'topic 4', type: 'video',link: 'https://www.youtube.com/embed/PfPneU9m9Ls'}]}], ratingDetails: [{ ratingVal : "4.5", ratingCount : "20"}],courseDetails: [{about: 'This Course is specially designed for giving an early advantage to the students currently in 10th class by starting preparation immediately after 10th Board Examination. Ultimate objective of this course is to help students prepare for , JEE (Main + Advanced) Examination. Initially, this course begins with the fundamental study for the syllabus and pattern of JEE (Main + Advanced). Students will also be guided to prepare 11th and 12th board exams ,competitive exams like KVPY, Olympiads ,etc', desc: 'Real valued functions of a real variable, into, onto and one-to-one functions, sum, difference, product and quotient of two functions, composite functions, absolute value, polynomial, rational, trigonometric, exponential and logarithmic functions.' }], topic: 'calculus', title : "Differential calculus",  subsCount: "33", duration: "03h 00m", authorShortName : 'RK', authorName : 'Rajni Kant Srivastava', categories : 'calculus', level: 'Medium', modifiedAt: 'May 17, 2019'}];
	if(response[this.props.match.params.id - 1 ]){
	this.setState(
		{
			apiResponse : response[this.props.match.params.id - 1]
		}
	);
	}else{
		this.props.history.push('/404');
	}
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
	console.log(this.state.apiResponse);
        return(
                <>
                      <CourseDetails response= {this.state.apiResponse} click={this.topicHandler}/>
                </>
        );
}

}
export default CourseDesc
