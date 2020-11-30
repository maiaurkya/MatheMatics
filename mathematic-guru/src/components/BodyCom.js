import React from 'react';
import Slider, {Slider2} from './Sliders';
import CourseListContainer   from './CourseCom'
const BodyCom = (props) => {
	return (
<section id="content-wrapper" className="mainblock">
	<div className="container">
		<SliderContainer />
		<div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1572464697893 vc_row-has-fill inline-rel-box">
			<div className="wpb_column vc_column_container vc_col-sm-12">
				<div className="vc_column-inner">
					<div className="wpb_wrapper">
						<div className="vc_empty_space height50">
							<span className="vc_empty_space_inner"></span>
						</div>
						<IntroCom />	
						<div className="vc_row wpb_row vc_inner vc_row-fluid">
							<CoursePallet title ="Trending Courses"	desc = "Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec"/>
							<CoursePallet title ="Online Courses" desc = "Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec"/>
							<CoursePallet title ="Books & Library" desc = "Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec"/>
						</div>
						<div className="vc_empty_space height90">
							<span className="vc_empty_space_inner"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="vc_row-full-width vc_clearfix"></div>
		<CourseListContainer />	
			{/*
<div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_column-gap-35 inline-rel-box-32"><div className="wpb_column vc_column_container vc_col-sm-6">
	<div className="vc_column-inner">
		<div className="wpb_wrapper">
			<div className="vc_empty_space height35">
				<span className="vc_empty_space_inner"></span>
			</div>
			<div className="tt-heading  ">
				<h2 className="tt-heading-title c-h2 txt-uppercase"><span className="uppercase uppercase-inline">
				    OUR CORE VALUES</span>
				</h2>
				<div className="tt-heading-desc">Short About Us</div>
			</div>
			<div className="vc_empty_space height1">
				<span className="vc_empty_space_inner"></span>
			</div>
			<div className="tt-accordion   type-1">
				<div className="tt-accordion-panel">
					<div className="tt-accordion-title active">Our Mission 
						<div className="tt-accordion-icon"></div>
					</div>
					<div className="tt-accordion-body active">
						<div className="tt-commercial">
							<div className="tt-commercial">
								<div className="row">
									<div className="col-sm-4">
										<a className="tt-commercial-img custom-hover">
											<img className="img-responsive" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/commercial.jpg" height="166" width="200" alt="" />
										</a>
									</div>
									<div className="col-sm-8">
										<a className="tt-commercial-title c-h5" href="#">
											<small>Our Delivery is all our our country</small>
										</a>
										<div className="simple-text size-3 color-3">
											<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
										</div>
										<div className="tt-commercial-links">
											<a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Adipis civelit</a>
											<a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>  Adipis civelit</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tt-accordion-panel">
					<div className="tt-accordion-title ">Our Vision 
						<div className="tt-accordion-icon"></div>
					</div>
					<div className="tt-accordion-body ">
						<div className="tt-commercial">
							<div className="tt-commercial">
								<div className="row">
									<div className="col-sm-4">
										<a className="tt-commercial-img custom-hover">
											<img className="img-responsive" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/commercial.jpg" height="166" width="200" alt="" />
										</a>
									</div>
									<div className="col-sm-8">
										<a className="tt-commercial-title c-h5" href="#"><small>Our Delivery is all our our country</small></a>
										<div className="simple-text size-3 color-3">
											<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
										</div>
										<div className="tt-commercial-links">
											<a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Adipis civelit</a>
											<a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>  Adipis civelit</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="tt-accordion-panel">
					<div className="tt-accordion-title ">
						About us <div className="tt-accordion-icon"></div>
					</div>
					<div className="tt-accordion-body ">
						<div className="tt-commercial">
							<div className="tt-commercial">
								<div className="row">
									<div className="col-sm-4">
										<a className="tt-commercial-img custom-hover">
											<img className="img-responsive" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/commercial.jpg" height="166" width="200" alt="" />
										</a>
									</div>
									<div className="col-sm-8">
										<a className="tt-commercial-title c-h5" href="#"><small>Our Delivery is all our our country</small></a>
										<div className="simple-text size-3 color-3">
											<p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
										</div>
										<div className="tt-commercial-links">
											<a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i> Adipis civelit</a>
											<a href="#"><i className="fa fa-long-arrow-right" aria-hidden="true"></i>  Adipis civelit</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="vc_empty_space  hidden-xs height100">
				<span className="vc_empty_space_inner"></span>
			</div>
		</div>
	</div>
</div>
<div className="wpb_column vc_column_container vc_col-sm-6">
	<div className="vc_column-inner">
		<div className="wpb_wrapper">
			<div className="vc_empty_space height35">
				<span className="vc_empty_space_inner"></span>
			</div>
			<div className="tt-heading  ">
				<h2 className="tt-heading-title c-h2 txt-uppercase">
					<span className="uppercase uppercase-inline">WHAT CUSTOMER SAYS</span>
				</h2>
				<div className="tt-heading-desc">Some Golden Words</div>
			</div>
			<div className="vc_empty_space height1"><span className="vc_empty_space_inner"></span></div>
				<div className="tt-testimonal-slider slider-wth-thumbs">
					<div className="swiper-container thumbnails-preview swiper-swiper-unique-id-1 initialized" data-autoplay="0" data-loop="1" data-speed="500" data-center="1" data-slides-per-view="1" id="swiper-unique-id-1">
						<div className="swiper-wrapper clearfix inline-wid-trans-2185">
							<div className="swiper-slide swiper-slide-duplicate wid437-he313" data-val="2">
								<div className="tt-testimonal-slider-wrapper">
									<div className="simple-text size-4">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no strud exercitation ullamco laboris nisi ut aliquip ex ea commodo.  incididunt ut labore </p>
									</div>
									<div className="tt-testimonal-slider-name">- Michale John</div>
								</div>
							</div>
							<div className="swiper-slide active swiper-slide-visible swiper-slide-active wid437-he313" data-val="0" >
								<div className="tt-testimonal-slider-wrapper">
									<div className="simple-text size-4">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no strud exercitation ullamco laboris nisi ut aliquip ex ea commodo.  incididunt ut labore </p>
									</div>
									<div className="tt-testimonal-slider-name">- Michale John</div>
								</div>
							</div>
							<div className="swiper-slide wid437-he313" data-val="1">
								<div className="tt-testimonal-slider-wrapper">
									<div className="simple-text size-4">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no strud exercitation ullamco laboris nisi ut aliquip ex ea commodo.  incididunt ut labore </p>
									</div>
									<div className="tt-testimonal-slider-name">- Michale John</div>
								</div>
							</div>
							<div className="swiper-slide wid437-he313" data-val="2">
								<div className="tt-testimonal-slider-wrapper">
									<div className="simple-text size-4">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no strud exercitation ullamco laboris nisi ut aliquip ex ea commodo.  incididunt ut labore </p>
									</div>
									<div className="tt-testimonal-slider-name">- Michale John</div>
								</div>
							</div>
							<div className="swiper-slide active swiper-slide-duplicate wid437-he313" data-val="0" >
								<div className="tt-testimonal-slider-wrapper">
									<div className="simple-text size-4">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis no strud exercitation ullamco laboris nisi ut aliquip ex ea commodo.  incididunt ut labore </p>
									</div>
									<div className="tt-testimonal-slider-name">- Michale John</div>
								</div>
							</div>
						</div>
						<div className="pagination pagination-swiper-unique-id-1">
							<span className="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
							<span className="swiper-pagination-switch"></span><span className="swiper-pagination-switch"></span>
						</div>
					</div>
					<div className="swiper-container thumbnails swiper-swiper-unique-id-2 initialized" data-autoplay="0" data-loop="0" data-speed="500" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="3" data-md-slides="3" data-lg-slides="3" data-add-slides="3" id="swiper-unique-id-2">
						<div className="swiper-wrapper clearfix wid1140-he100">
							<div className="swiper-slide swiper-slide-visible swiper-slide-active width-height" data-val="0" >
								<div className="tt-testimonal-slider-nav">
									<div className="tt-testimonal-slider-user">
                                        <img src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/testimonal-user-1.jpg" alt="" />
									</div>
								</div>
							</div>
							<div className="swiper-slide current active width-height" data-val="1">
								<div className="tt-testimonal-slider-nav">
									<div className="tt-testimonal-slider-user">
										<img src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/testimonal-user-2.jpg" alt="" />
									</div>
								</div>
							</div>
							<div className="swiper-slide width-height" data-val="2">
								<div className="tt-testimonal-slider-nav">
									<div className="tt-testimonal-slider-user">
                                        <img src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/testimonal-user-3.jpg" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="pagination type-1 visible-xs-block pagination-swiper-unique-id-2">
							<span className="swiper-pagination-switch swiper-visible-switch swiper-active-switch display-inline-block"></span>
							<span className="swiper-pagination-switch display-inline-block"></span>
							<span className="swiper-pagination-switch display-inline-block"></span>
						</div>
					</div>
				</div>  
				<div className="vc_empty_space height32">
					<span className="vc_empty_space_inner"></span>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="vc_row-full-width vc_clearfix"></div>*/}
{/*<div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid vc_custom_1572464672546 vc_row-has-fill inline-rel-box">
	<div className="wpb_column vc_column_container vc_col-sm-12">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				<div className="vc_empty_space height40">
					<span className="vc_empty_space_inner"></span>
				</div>
				<div className="tt-heading  ">
					<h2 className="tt-heading-title c-h2 txt-uppercase">
						<span className="uppercase uppercase-inline">OUR DEDICATED TEACHER</span>
					</h2>
					<div className="tt-heading-desc">Learn form best</div>
				</div>
				<div className="vc_empty_space height50">
					<span className="vc_empty_space_inner"></span>
				</div>
				<div className="vc_row wpb_row vc_inner vc_row-fluid">
					<div className="wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-teacher  ">
									<div className="tt-teacher-img">
										<div className="tt-teacher-pic">
											<a href="#">
												<img className="img-responsive" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/teacher_1.jpg" height="170" width="249" alt="" />
											</a>
											<ul className="tt-teacher-social">
                                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="tt-teacher-info">
										<a className="tt-teacher-title" href="#">John Martin</a>
										<div className="tt-teacher-cat">Photography</div>
										<div className="simple-text size-3 color-4">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor ipsum dolor sit</p>
										</div>
									</div>
								</div>
								<div className="vc_empty_space  spm height32">
									<span className="vc_empty_space_inner"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-teacher  ">
									<div className="tt-teacher-img">
										<div className="tt-teacher-pic">
											<a href="#">
												<img className="img-responsive" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/teacher_2.jpg" height="170" width="249" alt="" />
											</a> 
											<ul className="tt-teacher-social">
												<li><a href="#"><i className="fa fa-facebook"></i></a></li>
												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
												<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
												<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="tt-teacher-info">
										<a className="tt-teacher-title" href="#">John Martin</a>
										<div className="tt-teacher-cat">Photography</div>
										<div className="simple-text size-3 color-4">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor ipsum dolor sit</p>
										</div>
									</div>
								</div>
								<div className="vc_empty_space  spm height32">
									<span className="vc_empty_space_inner"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-teacher  ">
									<div className="tt-teacher-img">
										<div className="tt-teacher-pic">
											<a href="#">
												<img className="img-responsive" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/teacher_3.jpg" height="170" width="249" alt="" />
											</a>
											<ul className="tt-teacher-social">
												<li><a href="#"><i className="fa fa-facebook"></i></a></li>
												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
												<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
												<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="tt-teacher-info">
										<a className="tt-teacher-title" href="#">John Martin</a>
										<div className="tt-teacher-cat">Photography</div>
										<div className="simple-text size-3 color-4">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor ipsum dolor sit</p>
										</div>
									</div>
								</div>
								<div className="vc_empty_space  spm heiht32">
									<span className="vc_empty_space_inner"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-teacher  ">
									<div className="tt-teacher-img">
										<div className="tt-teacher-pic">
											<a href="#">
												<img className="img-responsive" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/teacher_4.jpg" height="170" width="249" alt="" />
											</a>
											<ul className="tt-teacher-social">
												<li><a href="#"><i className="fa fa-facebook"></i></a></li>
												<li><a href="#"><i className="fa fa-twitter"></i></a></li>
												<li><a href="#"><i className="fa fa-linkedin"></i></a></li>
												<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
											</ul>
										</div>
									</div>
									<div className="tt-teacher-info">
										<a className="tt-teacher-title" href="#">John Martin</a>
										<div className="tt-teacher-cat">Photography</div>
										<div className="simple-text size-3 color-4">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor ipsum dolor sit</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vc_empty_space height85">
					<span className="vc_empty_space_inner"></span>
				</div>
				<div className="vc_row wpb_row vc_inner vc_row-fluid">
					<div className="wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-facts tt-counter clearfix visible full-visible">
									<span className="tt-fact-number tt-counter-number" data-to="12" data-speed="3000">12</span>
									<h4 className="tt-fact-title">Years of Experiences</h4>
									<div className="tt-facts-divider"></div>
								</div>
								<div className="vc_empty_space  spm height32" >
									<span className="vc_empty_space_inner"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-facts tt-counter clearfix visible full-visible">
									<span className="tt-fact-number tt-counter-number" data-to="12" data-speed="3000">12</span>
									<h4 className="tt-fact-title">Years of Experiences</h4>
									<div className="tt-facts-divider"></div>
								</div>
								<div className="vc_empty_space  spm height32">
									<span className="vc_empty_space_inner"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-facts tt-counter clearfix visible full-visible">
									<span className="tt-fact-number tt-counter-number" data-to="60" data-speed="3000">60</span>
									<h4 className="tt-fact-title">news courses every years</h4>
									<div className="tt-facts-divider"></div>
								</div>
								<div className="vc_empty_space  spm height32">
									<span className="vc_empty_space_inner"></span>
								</div>
							</div>
						</div>
					</div>
					<div className="remove-devider wpb_column vc_column_container vc_col-sm-3">
						<div className="vc_column-inner">
							<div className="wpb_wrapper">
								<div className="tt-facts tt-counter clearfix visible full-visible">
									<span className="tt-fact-number tt-counter-number" data-to="89" data-speed="3000">89</span>
									<h4 className="tt-fact-title">Registered students</h4>
									<div className="tt-facts-divider"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vc_empty_space height95">
					<span className="vc_empty_space_inner"></span>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="vc_row-full-width vc_clearfix"></div>
*/}
<div data-vc-full-width="true" data-vc-full-width-init="true" className="vc_row wpb_row vc_row-fluid inline-rel-box">
	<div className="wpb_column vc_column_container vc_col-sm-12">
		<div className="vc_column-inner">
			<div className="wpb_wrapper">
				<div className="vc_empty_space height1">
					<span className="vc_empty_space_inner"></span>
				</div>
				<div className="tt-heading">
					<h2 className="tt-heading-title c-h2 txt-uppercase">
						<span className="uppercase">Latest Posts</span>
					</h2>
					<div className="tt-heading-desc" >From our blog</div>
				</div>
				<div className="vc_empty_space height1" >
					<span className="vc_empty_space_inner"></span>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-sm-4">
							<div className="tt-news">
								<div className="tt-news-top">
									<a className="tt-news-img custom-hover" href="#">
										<img width="360" height="158" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_1.jpg" className="img-responsive wp-post-image" alt="" srcSet="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_1.jpg 850w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_1-300x131.jpg 300w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_1-768x336.jpg 768w" sizes="(max-width: 360px) 100vw, 360px" />                        
									</a>
									<div className="tt-news-date">
										<span>21</span>
										Jul                        
									</div>
								</div>
								<div className="tt-news-label">
									<span>By: <a>templatation</a></span>
									<span>Comments: <a>0</a></span>                    
								</div>
								<a className="tt-news-title c-h6" href="#">
									The Surprising Reason College Tuition Is Crazy Expensive
								</a>
								<div className="simple-text size-4">
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ...                    
								</div>
							</div>
						</div>
						<div className="tt-30px-mob"></div>
                        <div className="col-sm-4">
							<div className="tt-news">
								<div className="tt-news-top">
									<a className="tt-news-img custom-hover" href="#">
										<img width="360" height="158" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_2.jpg" className="img-responsive wp-post-image" alt="" srcSet="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_2.jpg 850w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_2-300x131.jpg 300w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_2-768x336.jpg 768w" sizes="(max-width: 360px) 100vw, 360px" />                        
									</a>
									<div className="tt-news-date">
										<span>21</span>
										Jul                        
									</div>
								</div>
								<div className="tt-news-label">
									<span>By: <a>templatation</a></span>
									<span>Comments: <a>0</a></span>                    
								</div>
								<a className="tt-news-title c-h6" href="#">
									The Surprising Reason College Tuition Is Crazy Expensive
								</a>
								<div className="simple-text size-4">
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ...                    
								</div>
							</div>
						</div>
						<div className="tt-30px-mob"></div>
						<div className="col-sm-4">
							<div className="tt-news">
								<div className="tt-news-top">
									<a className="tt-news-img custom-hover" href="#">
										<img width="360" height="158" src="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_3.jpg" className="img-responsive wp-post-image" alt="" srcSet="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_3.jpg 850w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_3-300x131.jpg 300w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2016/07/post_3-768x336.jpg 768w" sizes="(max-width: 360px) 100vw, 360px" />                        
									</a>
									<div className="tt-news-date">
										<span>21</span>
										Jul                        
									</div>
								</div>
								<div className="tt-news-label">
									<span>By: <a>templatation</a></span>
									<span>Comments: <a>0</a></span>                    
								</div>
								<a className="tt-news-title c-h6" href="#">
									The Surprising Reason College Tuition Is Crazy Expensive
								</a>
								<div className="simple-text size-4">
									Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ...                    
								</div>
							</div>
						</div>
						<div className="tt-30px-mob"></div>
					</div>
				</div>
				<div className="vc_empty_space height60">
					<span className="vc_empty_space_inner"></span>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="vc_row-full-width vc_clearfix"></div>
</div>
</section>
	);

}

export const IntroCom = (props) => {
	return (
		<>
		<TitleSubtitle title="Welcome to Education" subTitle="We are Expert in Education"/>
		<div className="vc_empty_space height33">
			<span className="vc_empty_space_inner"></span>
		</div>
		<div className="wpb_text_column wpb_content_element ">
			<div className="wpb_wrapper">
				<p>Lorem ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal suada faci lisis. Lorem ipsum dolor sit ametion consectetur elit. Vesti bulum nec odio ipsum ons ectetur elit. Vestibulum nec odios Suspe ipsum dolor sit amet, cons ectetur elit. Vestibulum nec odios Suspe ndisse cursus mal ipsum dolor sit amet, cons ectetur elit.</p>
			</div>
		</div>			
		</>
	);

}

export const CoursePallet = (props) => {
	return (
		<>
			<div className="wpb_column vc_column_container vc_col-sm-4">
				<div className="vc_column-inner">
					<div className="wpb_wrapper">
						<a className="tt-service clearix  " href="#">
							<div className="tt-service-icon">
								<i className="fa fa-graduation-cap" aria-hidden="true"></i>
							</div>
							<div className="tt-service-info">
								<h6 className="tt-service-title c-h6 txt-uppercase">{props.title}</h6>
								<div className="simple-text size-3">
									<p>{props.desc}</p>
								</div>
							</div>
						</a>
						<div className="vc_empty_space  spm height30">
							<span className="vc_empty_space_inner"></span>
						</div>
					</div>
				</div>
			</div>			
		</>
	);
	
}

export const SliderContainer = (props) =>{
	return (
		<>
		<div data-vc-full-width="true" data-vc-full-width-init="true" data-vc-stretch-content="true" className="vc_row wpb_row vc_row-fluid vc_row-no-padding inline-rel-left-width">
                        <div className="wpb_column vc_column_container vc_col-sm-12">
                                <div className="vc_column-inner">
                                        <div className="wpb_wrapper">
                                                <div className="swiper-container   swiper-swiper-unique-id-0 initialized" data-autoplay="7000" data-loop="1" data-speed="1000" data-center="0" data-slides-per-view="1" data-add-slides="2" id="swiper-unique-id-0">
                                                        <div className="swiper-wrapper clearfix inline-wid-trans">
                                                                <Slider2 />
                                                        </div>
                                                        {/*<div className="pagination type-1 pos-1 visible-xs-block pagination-swiper-unique-id-0">
                                                                <span className="swiper-pagination-switch swiper-visible-switch swiper-active-switch"></span>
                                                                <span className="swiper-pagination-switch"></span>
                                                        </div>*/}

                                                        <div className="swiper-arrow-left tt-arrow-left type-2 pos-2 hidden-xs" onClick={props.click}>
                                                                <i className="fa fa-angle-left" aria-hidden="true"></i>
                                                        </div>
                                                        <div className="swiper-arrow-right tt-arrow-right type-2 pos-2 hidden-xs" onClick={props.click}>
                                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
		<div className="vc_row-full-width vc_clearfix"></div>
		</>
	);

}

export const TitleSubtitle = (props) =>{
	return(
		<>
		<div className="tt-heading">
                        <h2 className="tt-heading-title c-h2 txt-uppercase">
                                <span className="uppercase">{props.title}</span>
                        </h2>
                        <div className="tt-heading-desc">{props.subTitle}</div>
                </div>			
		</>
	);

}

export default BodyCom; 
