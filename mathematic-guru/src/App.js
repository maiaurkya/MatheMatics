import React, {Component} from 'react';
import Courses from './Courses';
import Home from './Home';
import About from './About';
import Timeline from './Timeline';
import CourseDesc from './CourseDesc';
import NotFoundPage from './NotFoundPage';
import Header  from './components/Header';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


class App extends Component {
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { position: '',
                style : 'defaultScroll',
                slideCount: 1,
                intervalId : 0,
                currentCount: 0,
                slideList : '',
                iMobile : 0
         };
}
componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
}
componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
}
toggleMenu = (event) => {
	let tiggleEle =  document.getElementById('toggle-switch');
        tiggleEle.classList.toggle('active');
        let navEle = document.getElementById("toggle-block");
        navEle.classList.toggle('show');
}
render(){
  return (
    <>
   	<Router>
            <div>
              <Header position={this.state.position} click = {this.toggleMenu} />
		<Switch>
                <Route exact path="/" component={Home}  />
                <Route exact path="/courses" component={Courses} />
		<Route exact path="/course-desc/:id" component={CourseDesc} />
		<Route exact path="/about" component={About} />
                <Route exact path="/timeline" component={Timeline} />
		<Route path="*" component={NotFoundPage} />
                <Redirect to="/404" />
              </Switch>
            </div>
          </Router> 
    </>
  );
}
}
export default App;
