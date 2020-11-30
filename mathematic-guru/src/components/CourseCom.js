import React from 'react';
import {TitleSubtitle} from './BodyCom.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const CourseList = (props) => {
        let ratingDetails = [];
        return (
                <>
                        <div className="tutor-course-col-3">
                                <div className="tutor-course tutor-course-loop tutor-course-loop-725">
                                        <CourseHeader link={props.link}  width={props.width} height={props.height} source={props.source} altText={props.altText} sourceSet= {props.sourceSet} sizes={props.sizes} />
                                        <div className="tutor-loop-course-container">
                                                <div className="tutor-loop-rating-wrap">
                                                        <div className="tutor-star-rating-group">
                                                                <RatingCom items={props.items} />
                                                                <div className="tutor-rating-gen-input">
                                                                        <input type="hidden" name="tutor_rating_gen_input" value={props.ratingVal} />
                                                                </div>
                                                        </div>
                                                        <span className="tutor-rating-count"> {props.ratingVal}<i>({props.ratingCount})</i> </span>
                                                </div>
                                                <div className="tutor-course-loop-title">
                                                        <h2>
                                                                <a href={props.link}>{props.title}</a>
                                                        </h2>
                                                </div>
                                                <div className="tutor-course-loop-meta">
                                                        <div className="tutor-single-loop-meta">
                                                                <i className="fa fa-user"></i><span>{props.subsCount}</span>
                                                        </div>
                                                        <div className="tutor-single-loop-meta">
                                                                <i className="fa fa-clock-o"></i> <span>{props.duration} </span>
                                                        </div>
                                                </div>{/*<div className="tutor-loop-author">
                                                        <div className="tutor-single-course-avatar">
                                                                <a href="https://demos.bolvo.com/eduwp4/profile/dinesh">
                                                                        <span className="tutor-text-avatar avtar-bak">TE</span>
                                                                </a>
                                                        </div>
                                                        <div className="tutor-single-course-author-name">
                                                                <span>by</span>
                                                                <a href="https://demos.bolvo.com/eduwp4/profile/dinesh">templatation</a>
                                                        </div>
                                                        <div className="tutor-course-lising-category">
                                                                <span>In</span>
                                                                <a href="https://demos.bolvo.com/eduwp4/course-category/business/">Business </a>
                                                                <a href="https://demos.bolvo.com/eduwp4/course-category/design/">Design </a>
                                                                <a href="https://demos.bolvo.com/eduwp4/course-category/heath-fitness/">Heath &amp; Fitness </a>
                                                                <a href="https://demos.bolvo.com/eduwp4/course-category/sales/">Sales </a>
                                                        </div>
                                                </div>*/}
                                        </div>
                                        {/*<div className="tutor-loop-course-footer">
                                                <div className="tutor-course-loop-price">
                                                        <div className="price"> Free
                                                                <div className="tutor-loop-cart-btn-wrap">
                                                                        <a href="https://demos.bolvo.com/eduwp4/courses/sales-training-practical-sales-techniques/">Get Enrolled</a>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>*/}
                                </div>
                        </div>

                </>
        );
}

 const CourseListContainer = () =>{
	return (
		<>
			<div className="vc_row-full-width vc_clearfix"></div>
                        <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                        <div className="vc_column-inner">
                                                <div className="wpb_wrapper">
                                                        <div className="vc_empty_space height40">
                                                                <span className="vc_empty_space_inner"></span>
                                                        </div>
                                                        <TitleSubtitle title="OUR FEATURED COURSES" subTitle="Choose Your Courses"/>
                                                        <div className="vc_empty_space height40">
                                                                <span className="vc_empty_space_inner"></span>
                                                        </div>
                                                        <div className="wpb_raw_code wpb_content_element wpb_raw_html">
                                                                <div className="wpb_wrapper">
                                                                        <div className="tutor-courses tutor-courses-loop-wrap tutor-courses-layout-3">
									<CourseList link="/course-desc/1"  width="1400" height="860" source="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1.jpg" altText="" sourceSet="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1.jpg 1400w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1-300x184.jpg 300w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1-768x472.jpg 768w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1-1024x629.jpg 1024w" sizes="(max-width: 1400px) 100vw, 1400px" items={[{type: 'full', val :'1'},{type: 'full', val :'2'},{type: 'full', val :'3'},{type: 'full', val :'4'},{type: 'half', val :'5'}]} ratingVal="4.5" ratingCount="20" title="Alzebra of complex numbers"  subsCount="33" duration="03h 00m" />

                                                                                <CourseList link="/course-desc/2"  width="1400" height="860" source="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course10-1.jpg" altText="" sourceSet="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course10-1.jpg 1400w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course10-1-300x184.jpg 300w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course10-1-768x472.jpg 768w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course10-1-1024x629.jpg 1024w" sizes="(max-width: 1400px) 100vw, 1400px" items={[{type: 'full', val :'1'},{type: 'full', val :'2'},{type: 'full', val :'3'},{type: 'full', val :'4'},{type: 'full', val :'5'}]} ratingVal="5" ratingCount="29" title="Quadratic Equations"  subsCount="30" duration="01h 40m" />

                                                                                <CourseList link="/course-desc/3"  width="1400" height="860" source="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/1_0002_18-2.jpg" altText="" sourceSet="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/1_0002_18-2.jpg 1400w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/1_0002_18-2-300x184.jpg 300w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/1_0002_18-2-768x472.jpg 768w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/1_0002_18-2-1024x629.jpg 1024w" sizes="(max-widwth: 1400px) 100vw, 1400px" ratingVal="3" ratingCount="30" title="Logarithms & their Properties" subsCount="10" duration="02h 30m" items={
        [{type: 'full', val :'1'},
        {type: 'full', val :'2'},
        {type: 'full', val :'3'}]
}/>

									</div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="vc_empty_space height60">
                                                        <span className="vc_empty_space_inner"></span>
                                                </div>

                                        </div>
                                </div>
                        </div>
		</>
	);

}

export const CourseHeader = (props) =>{
        return (
        <>
                <div className="tutor-course-header">
                        <Link to={props.link}>
                                <img width={props.width} height={props.height} src={props.source} className="attachment-post-thumbnail size-post-thumbnail" alt={props.altText} srcSet={props.sourceSet} sizes={props.sizes} />
                        </Link>
                        <div className="tutor-course-loop-header-meta">
                                <span className="tutor-course-loop-level">Expert</span>
                                <span className="tutor-course-wishlist">
                                        <a href="" className="tutor-icon-fav-line tutor-course-wishlist-btn fa fa-bookmark-o " data-course-id="725"></a>
                                </span>
                        </div>
                </div>
        </>
);


}

export const RatingCom = (props) => {
        console.log(RatingCom);
	return (
                <>
                        {props.items.map((val,ind) =>(

                                <i className={'fa ' + (val.type == 'full' ? 'fa fa-star' : 'fa fa-star-half-o')} data-rating-value={props.val} key={ind}> </i>
                        ))}

                </>
        );

}
export default CourseListContainer;
