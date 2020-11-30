import React, {Component} from 'react';
import './style1.css';
import './style.css';
import rkAward from './images/rk_srivastava.jpeg';
import lalkr from './images/lalkrishan-advani-rk-srivastav.jpg';
import Laungi from './images/Laungi-Bhuiyan-4.jpg';
import {BlogList} from './components/CourseDetailsCom';
class Timeline extends Component{

constructor(props) {
  super(props);
  this.state= {
		blogList : []		
	}
}
componentDidMount = () => {
	const blogList = [
		{link:'https://english.newstrack.com/education-career/son-of-security-guard-succeeded-in-jee-advance-after-reading-from-avasar-trust-344360.html', img : rkAward, shortDesc: 'The results of the Joint Entrance Examination, JEE Advanced 2020 or IIT JEE have been released today. The results were announced by the Indian Institute of Technology, IIT Delhi and published online at jeeadv.ac.in. A total of 1,50,838 candidates took part in this examination. Meanwhile, the son of a guard from Sonpur has earned a big name by bringing the rank of 1847 in JEE Advance', title : 'Know the Success Story of a boy who cleared JEE Advanced through \'Avasar Trust\''},{link:'https://english.newstrack.com/india-news/babri-verdict-mathematician-rk-srivastava-welcomes-decision-343675.html', img : lalkr, shortDesc: 'Bihar: The court has pronounced its verdict in the Babri demolition case. All the 32 accused, including Bharatiya Janata Party (BJP) leader Lal Krishna Advani and Murali Manohar Joshi, have been acquitted by the special CBI court.', title : 'Babri Verdict: Mathematician RK Srivastava says \'Jai Shri Ram\''},{link:'https://english.newstrack.com/india-news/bihar_news/mathematics-guru-rk-srivastava-praises-laungi-bhaiya-calls-him-real-hero-342646.html', img : Laungi, shortDesc: 'RK Srivastava, who teach mathematics for one rupee and engineered hundreds of economically poor students, describes the Laungi Bhaiya, who built the 5 km canal, as a real hero. RK Srivastava from Rohtas district of Bihar, is famous as the Mathematics Guru in the country.', title : 'Mathematics Guru RK Srivastava praises \'Laungi Bhaiya\', calls him real hero'}
		];
	this.setState( {blogList : blogList});
}

render(){
	console.log(this.state.blogList);
	return(
		<>
			<div className="tt-header-margin"></div>
                        <div className="tt-topheading background-block" style={{'backgroundImage': 'url(https://cdn.bolvo.com/images/eduhero.jpeg)'}}>
                                <div className="overlay-clr" style={{'backgroundColor': 'rgba(0,0,0,0.38)'}}></div>
                            	<div className="container">
                                	<h2 className="tt-topheading-title c-h3"><span>Timeline</span></h2>
                                </div>
                        </div>
			<div className="mainblock clearfix">
				<div className="bg-1 tt-sidebar-right  tt-overflow ">
					<div className="container">
						<div className="row">
							<div className="col-md-9">
								<div className="tt-two-colors pright20">
									<BlogList items={this.state.blogList} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

}
export default Timeline; 
