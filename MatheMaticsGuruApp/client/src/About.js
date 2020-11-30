import React, {Component} from 'react';
import './style1.css';
import './style.css';
import rkAward from './images/rk_srivastava.jpeg';
class About extends Component{

render(){
	return(
		<>
			<div className="tt-header-margin"></div>
			<div className="tt-topheading background-block" style={{'backgroundImage': 'url(https://cdn.bolvo.com/images/eduhero.jpeg)'}}>
				<div className="overlay-clr" style={{'backgroundColor': 'rgba(0,0,0,0.38)'}}></div>
			    <div className="container">
				<h2 className="tt-topheading-title c-h3"><span>About</span></h2>
				</div>
			</div>
			<section id="content-wrapper" className="mainblock">
		<div className="container">
			<div className="vc_row wpb_row vc_row-fluid vc_column-gap-35">
				<div className="wpb_column vc_column_container vc_col-sm-4">
					<div className="vc_column-inner">
						<div className="wpb_wrapper">
							<div className="tt-simple-image ">
								<a className="tt-simple-image custom-hover" href="#">
									<img className="img-responsive" src={rkAward} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="wpb_column vc_column_container vc_col-sm-8">
					<div className="vc_column-inner"><div className="wpb_wrapper">
						<div className="tt-heading  ">
							<h2 className="tt-heading-title c-h2 txt-uppercase">
								<span className="uppercase" style={{'fontSize': '26px'}}>
									OUR MISSION</span>
							</h2>
							<div className="tt-heading-desc">About Us</div>
						</div>
						<div className="vc_empty_space"   style={{'height': '24px'}}>
							<span className="vc_empty_space_inner"></span>
						</div>
						<div className="wpb_text_column wpb_content_element " >
							<div className="wpb_wrapper">
								<p><strong>Mathematics Guru RK Srivastava</strong>, who gave wings to the dreams of poor children, created history by proving the Pythagoras theorem in more than 50 different ways in the classroom program. For this, his name has also been recorded in the <strong>World Book of Records London</strong>. RK Srivastava, a resident of <strong>Bikramganj</strong>, a small village in Rohtas district of Bihar, is a role model for thousands of students. People are searching on Google these days about RK Srivastava, who brought glory to the country including Bihar.</p>
							</div>
						</div>
						<div className="wpb_text_column wpb_content_element " >
							<div className="wpb_wrapper">
								<p>
									<strong>RK Srivastava</strong> has given free education to the students for 12 consecutive hours throughout the night, more than <strong>450</strong> classes. For this, his name has also been recorded in <strong>India Book Records and Asia Book of Records</strong>.

Apart from free education, every year free books are distributed to 50 poor students by their mother.s hands. Born in a poor family, RK Srivastava.s life went through many struggles. RK Srivastava also runs the .Economically poor people will not study. campaign. Under this campaign, only <strong>1 rupee of Guru Dakshina</strong> is given to students and they are educated. <strong>Guru Dakshina</strong> increases by only 1 rupee each year.

Under this campaign, hundreds of poor students, including <strong>IITs</strong>, <strong>NITs</strong>, <strong>BCECE</strong>, reached many reputed institutions of the country and were spreading their dreams.

								</p>
							</div>
						</div>
						<div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_grey" >
							<span className="vc_sep_holder vc_sep_holder_l">
								<span  className="vc_sep_line"></span>
							</span>
							<span className="vc_sep_holder vc_sep_holder_r">
								<span  className="vc_sep_line"></span>
							</span>
						</div>
						<div className="wpb_text_column wpb_content_element " >
							<div className="wpb_wrapper">
								<p><em>Do you know? President Ram Nath Kovind is also admirer of Mathematics Guru. RK Srivastava said, .Even today, those words are heard in my ears. When I first met President Ramnath Kovind Ji. As soon as my step reached his door, respected Ramnath Kovid ji said, come come the Mathematics Guru. How are you. I met Him for the first time, but I didn.t feel this from his words..

While returning after the meeting, President said that you are doing very good work in education for better future of poor children. In the future, you continued to contribute to better nation building. We wish you all the best.</em></p>
							</div>
						</div>
						<div className="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_grey" >
							<span className="vc_sep_holder vc_sep_holder_l">
								<span  className="vc_sep_line"></span>
							</span>
							<span className="vc_sep_holder vc_sep_holder_r">
								<span  className="vc_sep_line"></span>
							</span>
						</div>
						<div className="vc_row wpb_row vc_inner vc_row-fluid">
							<div className="wpb_column vc_column_container vc_col-sm-6">
								<div className="vc_column-inner">
									<div className="wpb_wrapper">
										<ul className="tt-custom-list  ">
											<li>
												<i className="fa fa-check-square-o" style={{'color': '#f8d24b'}}></i>Online Training
											</li>
											<li>
												<i className="fa fa-check-square-o" style={{'color': '#f8d24b'}}></i>We Are Global
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="wpb_column vc_column_container vc_col-sm-6">
								<div className="vc_column-inner">
									<div className="wpb_wrapper">
										<ul className="tt-custom-list  ">
											<li>
												<i className="fa fa-check-square-o" style={{'color': '#f8d24b'}}></i>Skilled Faculities
											</li>
											<li>
												<i className="fa fa-check-square-o" style={{'color': '#f8d24b'}}></i>Higest Rated
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="vc_empty_space"   style={{'height': '80px'}}>
							<span className="vc_empty_space_inner"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
		</>
	);

}

}
export default About
