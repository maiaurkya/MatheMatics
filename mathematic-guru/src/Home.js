import React, {Component} from 'react';
import './style1.css';
import './style.css';
import Courses from './Courses';
import Header from './components/Header';
import BodyCom from './components/BodyCom.js';

class Home extends Component{
constructor(props) {
  super(props);
  // Don't call this.setState() here!
  this.state = { position: '',
                slideCount: 1,
                intervalId : 0,
                currentCount: 0,
                slideList : '',
                iMobile : 0
         };
}
componentDidMount = () => {
    var intervalId = setInterval(this.timer, 10000);
    let tt = this.slideHandler;
    window.addEventListener("resize", this.resize);
    this.setState({
      slideCount : document.getElementsByClassName("slide-to-slide").length - 1,
      slideList : document.getElementsByClassName("slide-to-slide"),
      intervalId : intervalId
    });
}

componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
}
resize = () =>{
  if(window.innerWidth <= 768){
        this.setState({ iMobile: 1 });
  }else{
        this.setState({ iMobile : 0 });
  }

}
timer = () => {
   if(this.state.currentCount == 0){
        this.setState({ currentCount: this.state.slideCount });
   }else{
        this.setState({ currentCount: this.state.currentCount - 1 });
   }
        var allEle =  document.getElementsByClassName("slide-to-slide");
        [].forEach.call(allEle, function(el) {
                el.classList.remove("swiper-slide-visible");
                el.classList.remove("swiper-slide-active");
        });
        var ele = document.getElementsByClassName("slide-to-slide")[this.state.currentCount];
        ele.classList.add('swiper-slide-visible');
        ele.classList.add('swiper-slide-active');
}
handleScroll = (event) => {
 if(!this.state.iMobile){
   if(window.pageYOffset){
    this.setState({
      position: 'stick',
      style : 'afterScroll'
    });
    this.setState({
      position: '',
      style : 'defaultScroll'
    });
   }
}
}

slideHandler = (event) =>{
        this.timer();
}
render(){
	return (
		<>
      			<BodyCom click={this.slideHandler} />
    		</>
	);

}
}

export default Home;
