import React from 'react';
import {TitleSubtitle} from './BodyCom.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import {getCourseList, resetCourseData, updateSliderCount} from '../actions/getCourseData';

export const CourseList = (props) => {
        let ratingDetails = [];
        return (
                <>
                        <div className="tutor-course-col-3" key={props.keys}>
                                <div className="tutor-course tutor-course-loop tutor-course-loop-725">
                                        <CourseHeader link={props.link}  width={props.width} height={props.height} source={props.source} altText={props.altText} sourceSet= {props.sourceSet} sizes={props.sizes}  level = {props.level}/>
                                        <div className="tutor-loop-course-container">
                                                <div className="tutor-loop-rating-wrap">
                                                        <div className="tutor-star-rating-group">
								{props.items ? <RatingCom items={props.items} /> : null}
                                                                <div className="tutor-rating-gen-input">
                                                                        <input type="hidden" name="tutor_rating_gen_input" value={props.ratingVal} />
                                                                </div>
                                                        </div>
                                                        <span className="tutor-rating-count"> {props.ratingVal}<i>({props.rattingCount})</i> </span>
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

 const CourseListContainer = (props) =>{
	const courseList = props.getCourseList;
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
									{ courseList ? 			
										courseList.map((val, ind) =>(	
										<CourseList link = {'/course-desc/'+val.id} width="1400" height="860" source="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1.jpg" altText="" sourceSet="https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1.jpg 1400w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1-300x184.jpg 300w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1-768x472.jpg 768w, https://demos.bolvo.com/eduwp4/wp-content/uploads/sites/90/2019/05/course5-1-1-1024x629.jpg 1024w" sizes="(max-width: 1400px) 100vw, 1400px" items = {(val.ratingVal > 5 ? 5 : val.ratingVal )} ratingVal = {(val.ratingVal > 5 ? 5 : val.ratingVal )} rattingCount={val.rattingCount} title = {val.title } subsCount = {val.enrolled} duration = {val.duration}  keys= {ind} level = {val.level}/>
										))
									 : null
									}
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
                                <span className="tutor-course-loop-level">{props.level}</span>
                                <span className="tutor-course-wishlist">
                                        <a href="" className="tutor-icon-fav-line tutor-course-wishlist-btn fa fa-bookmark-o " data-course-id="725"></a>
                                </span>
                        </div>
                </div>
        </>
);


}

export const RatingCom = (props) => {
	let rattingObject = [];
        let item_value = "";
	 let ratting_val = 0;
	if(props.items % 1 != 0){	
		item_value  = props.items.split('.');
		ratting_val = (item_value[0] > 5 ? 5 : item_value[0] );
	}else{
		item_value = props.items;
		ratting_val = (item_value > 5 ? 5 : item_value );
	}
	for(var i = 0; i < ratting_val ; i++ ){
		rattingObject.push({type:'full', val : i});
	}
	if(ratting_val < 5 && props.items % 1 != 0){
		rattingObject.push({type:'half', val : item_value[0]+1});
	}
	return (
                <>
                        {rattingObject.map((val,ind) =>(

                                <i className={'fa ' + (val.type == 'full' ? 'fa fa-star' : 'fa fa-star-half-o')} data-rating-value={props.val} key={ind}> </i>
                        ))}

                </>
        );

}
const mapStateToProps = (state) =>{
        return{
                getCourseList: state.courseList
        }
}
export default connect(mapStateToProps, null)(CourseListContainer);
