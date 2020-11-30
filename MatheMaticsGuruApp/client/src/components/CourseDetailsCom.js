import React from 'react';
import {RatingCom} from '../components/CourseCom';
const CourseDetails = (props) =>{
	console.log(props.response[props.paramVal], typeof props.response[props.paramVal], props.listTopic);
	return (
		<>
		<div className="tt-header-margin"></div>
		<div className="tutor-wrap tutor-full-width-course-top tutor-course-top-info tutor-page-wrap post-725 courses type-courses status-publish has-post-thumbnail hentry course-category-business course-category-design course-category-heath-fitness course-category-sales">
    <div className="tutor-container">
        <div className="tutor-row">
            <div className="tutor-col-9 tutor-col-md-100">
				<div className="tutor-single-course-segment tutor-single-course-lead-info">
					<div className="tutor-leadinfo-top-meta">
						<span className="tutor-single-course-rating">
							<div className="tutor-star-rating-group">
								{props.response[props.paramVal] ? <RatingCom items={props.response[props.paramVal].ratingVal} /> : null}
								<div className="tutor-rating-gen-input">
									<input type="hidden" name="tutor_rating_gen_input" values={props.response[props.paramVal] ? props.response[props.paramVal].ratingVal : null} /> 
								</div>
							</div>            
							<span className="tutor-single-rating-count">
								{props.response[props.paramVal] ? (props.response[props.paramVal].ratingVal  > 5 ? 5 : props.response[props.paramVal].ratingVal) : null}<i>({props.response[props.paramVal] ? props.response[props.paramVal].rattingCount : null})</i>            
							</span>
						</span>
					</div>
					<h1 className="tutor-course-header-h1">{props.response[props.paramVal] ? props.response[props.paramVal].topic : null} : {props.response[props.paramVal] ? props.response[props.paramVal].title : null} </h1>
				</div>
				<div className="tutor-course-lesson">
					<div className="tutor-single-course-meta tutor-meta-top">
						<ul>
							<li className="tutor-single-course-author-meta">
								<div className="tutor-single-course-avatar">
									<a href="https://demos.bolvo.com/eduwp4/profile/dinesh"> 
										<span className="tutor-text-avatar">{props.response[props.paramVal] ? props.response[props.paramVal].authorShortName : null}</span>
									</a>
								</div>
								<div className="tutor-single-course-author-name">
									<span>by</span>
									<a href="#">{props.response[props.paramVal] ? props.response[props.paramVal].authorName : null}</a>
								</div>
							</li>
							<li className="tutor-course-level">
								<strong>Course level:</strong>
										{props.response[props.paramVal] ? props.response[props.paramVal].level : null}
							</li>
							<li className="tutor-social-share">
									<span>Share:</span>
									
								<div className="tutor-social-share-wrap" data-social-share-config="{&quot;title&quot;:&quot;Sales Training: Practical Sales Techniques&quot;,&quot;text&quot;:&quot;Sales is all about listening to people and prescribing a solution. In every job you'll come across sales moments, whether you're selling yourself in a job interview or selling products to customers - it's an essential skill in all career paths. Sales needn't be slimy, immoral, or complicated - it's simply about getting the best solution for the customer so they are thrilled to buy from you.&quot;,&quot;image&quot;:&quot;https:\/\/demos.bolvo.com\/eduwp4\/wp-content\/uploads\/sites\/90\/2019\/05\/course5-1-1.jpg&quot;}">
								
									<button className="tutor_share s_facebook" href="https://www.facebook.com/sharer.php?s=100&amp;p[title]=Sales%20Training%3A%20Practical%20Sales%20Techniques&amp;u=https%3A%2F%2Fdemos.bolvo.com%2Feduwp4%2Fcourses%2Fsales-training-practical-sales-techniques%2F&amp;t=Sales%20Training%3A%20Practical%20Sales%20Techniques&amp;p[summary]=Sales%20is%20all%20about%20listening%20to%20people%20and%20prescribing%20a%20solution.%20In%20every%20job%20you'll%20come%20across%20sales%20moments%2C%20whether%20you're%20selling%20yourself%20in%20a%20job%20interview%20or%20selling%20products%20to%20customers%20-%20it's%20an%20essential%20skill%20in%20all%20career%20paths.%20Sales%20needn't%20be%20slimy%2C%20immoral%2C%20or%20complicated%20-%20it's%20simply%20about%20getting%20the%20best%20solution%20for%20the%20customer%20so%20they%20are%20thrilled%20to%20buy%20from%20you.&amp;p[url]=https%3A%2F%2Fdemos.bolvo.com%2Feduwp4%2Fcourses%2Fsales-training-practical-sales-techniques%2F"> <i className="tutor-icon-facebook"></i> </button><button className="tutor_share s_twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdemos.bolvo.com%2Feduwp4%2Fcourses%2Fsales-training-practical-sales-techniques%2F&amp;text=Sales%20is%20all%20about%20listening%20to%20people%20and%20prescribing%20a%20solution.%20In%20every%20job%20you'll%20come%20across%20sales%20moments%2C%20whether%20you're%20selling%20yourself%20in%20a%20job%20interview%20or%20selling%20products%20to%20customers%20-%20it's%20an%20essential%20skill%20in%20all%20career%20paths.%20Sales%20needn't%20be%20slimy%2C%20immoral%2C%20or%20complicated%20-%20it's%20simply%20about%20getting%20the%20best%20solution%20for%20the%20customer%20so%20they%20are%20thrilled%20to%20buy%20from%20you."> <i className="tutor-icon-twitter"></i> </button><button className="tutor_share s_linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fdemos.bolvo.com%2Feduwp4%2Fcourses%2Fsales-training-practical-sales-techniques%2F&amp;title=Sales%20Training%3A%20Practical%20Sales%20Techniques&amp;summary=Sales%20is%20all%20about%20listening%20to%20people%20and%20prescribing%20a%20solution.%20In%20every%20job%20you'll%20come%20across%20sales%20moments%2C%20whether%20you're%20selling%20yourself%20in%20a%20job%20interview%20or%20selling%20products%20to%20customers%20-%20it's%20an%20essential%20skill%20in%20all%20career%20paths.%20Sales%20needn't%20be%20slimy%2C%20immoral%2C%20or%20complicated%20-%20it's%20simply%20about%20getting%20the%20best%20solution%20for%20the%20customer%20so%20they%20are%20thrilled%20to%20buy%20from%20you.&amp;source=https%3A%2F%2Fdemos.bolvo.com%2Feduwp4%2Fcourses%2Fsales-training-practical-sales-techniques%2F"> <i className="tutor-icon-linkedin"></i> </button><button className="tutor_share s_tumblr" href="https://tumblr.com/share?s=&amp;v=3&amp;t=Sales%20Training%3A%20Practical%20Sales%20Techniques&amp;u=https%3A%2F%2Fdemos.bolvo.com%2Feduwp4%2Fcourses%2Fsales-training-practical-sales-techniques%2F"> <i className="tutor-icon-tumblr"></i> </button>
								</div>
							</li>
						</ul>
					</div>
					<div className="tutor-single-course-meta tutor-lead-meta">
						<ul>
							<li>
								<span>Categories</span>
								<a href="#">{props.response[props.paramVal] ? props.response[props.paramVal].categories : null}</a>
							</li>
							<li>
								<span>Total Hour</span>
									<i className="fa fa-clock-o">&nbsp;{props.response[props.paramVal] ? props.response[props.paramVal].duration : null}</i>                 
							</li>
							<li>
								<span>Total Enrolled</span>
									<i className="fa fa-user">&nbsp; {props.response[props.paramVal] ? props.response[props.paramVal].enrolled : null} </i>            
							</li>
							<li>
									<span>Last Update</span>
									{props.response[props.paramVal] ? props.response[props.paramVal].modifiedAt : null} 
							</li>
						</ul>
					</div>
					<div className="tutor-course-summery">
							<h4 className="tutor-segment-title">About Course</h4>
							{props.response[props.paramVal] ? props.response[props.paramVal].short_desc : null}
					</div>
				</div>	            
				<div className="tutor-single-course-segment  tutor-course-content-wrap">
					<div className="course-content-title">
						<h4 className="tutor-segment-title">Description</h4>
					</div>
					<div className="tutor-course-content-content">
						<p>{props.response[props.paramVal] ? props.response[props.paramVal].desc : null}</p>						
					</div>
				</div>
				{/*<div className="tutor-single-course-segment tutor-course-benefits-wrap">
					<div className="course-benefits-title">
						<h4 className="tutor-segment-title">What Will I Learn?</h4>
					</div>
					<div className="tutor-course-benefits-content">
						<ul className="tutor-course-benefits-items tutor-custom-list-style">
							<li>Enjoy selling by befriending customers</li><li>Close deals with confidence</li>
							<li>Be organised and efficient</li>
							<li>Understand the selling process and how to master it</li>
							<li>Feel confident preparing for a sales meeting</li>
							<li>Know different selling styles and their uses</li>
						</ul>
					</div>
				</div>*/}
				{props.listTopic ? 
				<div className="tutor-single-course-segment  tutor-course-topics-wrap">
					<div className="tutor-course-topics-header">
						<div className="tutor-course-topics-header-left">
							<h4 className="tutor-segment-title">Topics for this course</h4>
						</div>
						<div className="tutor-course-topics-header-right">
							<span> 21 Lessons</span><span>02h 20m </span>            
						</div>
					</div>
					<TotpicList items={props.listTopic} click={props.click} />
				</div>
				: null}
				<h4 className="tutor-segment-title">About the instructors</h4>
				<div className="tutor-course-instructors-wrap tutor-single-course-segment" id="single-course-ratings">
					<div className="single-instructor-wrap">
						<div className="single-instructor-top">
							<div className="tutor-instructor-left">
								<div className="instructor-avatar">
									<a href="https://demos.bolvo.com/eduwp4/profile/dinesh">
										<span className="tutor-text-avatar">TE</span>
									</a>
								</div>
								<div className="instructor-name">
									<h3>
										<a href="https://demos.bolvo.com/eduwp4/profile/dinesh">templatation</a> 
									</h3>
								</div>
							</div>
							<div className="instructor-bio"></div>
						</div>
						<div className="single-instructor-bottom">
							<div className="ratings">
								<span className="rating-generated">
									<div className="tutor-star-rating-group">
										<i className="tutor-icon-star-full" data-rating-value="1"></i>
										<i className=	"tutor-icon-star-full" data-rating-value="2"></i>
										<i className="tutor-icon-star-full" data-rating-value="3"></i>
										<i className="tutor-icon-star-full" data-rating-value="4"></i>
										<i className="tutor-icon-star-line" data-rating-value="5"></i>
										<div className="tutor-rating-gen-input">
											<input type="hidden" name="tutor_rating_gen_input" values="4.32" /> 
										</div>
									</div>	
								</span>
								<span className="rating-digits">4.32</span>  
								<span className="rating-total-meta">(19 ratings)</span> 		
							</div>
							<div className="courses">
								<p>
									<i className="tutor-icon-mortarboard"></i>
									11 <span className="tutor-text-mute"> Courses</span>
								</p>
							</div>
							<div className="students">
								<p>
									<i className="tutor-icon-user"></i>
									39<span className="tutor-text-mute">  students</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</div>
	</>
);

}

export const TotpicList = (props) =>{
	console.log(props);
	return (
		<>
		<div className="tutor-course-topics-contents">
			{props.items.map((val,ind) =>(
			<div className="tutor-course-topic" key={ind}>
				<div className="tutor-course-title">
					<h4 onClick={props.click}> <i className="fa fa-plus"></i> {val.title}</h4>
				</div>
				<div className="tutor-course-lessons">
				{/*val.subtopic.map((val2, ind2) =>(	
					<div className="tutor-course-lesson" key={ind2}>
						<h5 onClick={(e) => props.click(e , val2.link)}>
							<i className={'fa ' + (val2.type == 'video' ? 'fa fa-youtube-play' : 'fa-file-pdf-o')}></i>{val2.title}<span className="tutor-lesson-duration">00:02:50</span>
						</h5>
					</div>
			
				))*/}
				</div>
			</div>
			))}
		</div>
		</>
	);

}
export const BlogList = (props) =>{
	return(
		<>	
			{props.items.map((val,ind) =>(
				<BlogBlock link={val.link} img={val.img} title={val.title} desc={val.shortDesc} keyv={ind}/>
			))}
		</>
	);

}
export const BlogBlock = (props) =>{
	return(
		<>
			<div className="tt-post post-238 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized tag-books tag-coading tag-education tag-graphic-design tag-library" key={props.keyv}>
				<a className="tt-post-img custom-hover" href={props.link} title={props.title} target="_blank">
					<img width="850" height="372" src={props.img} className="img-responsive wp-post-image" alt=""  sizes="(max-width: 850px) 100vw, 850px" />
				 </a>
				<div className="tt-post-date">21 July 2016</div>
				<div className="tt-post-label">
					<span>
						<i className="fa fa-user" aria-hidden="true"></i>
						By: templatation                                                                                                       </span>
					<span>
						<i className="fa fa-comments-o" aria-hidden="true"></i>
						Comments:  0
					</span>
				</div>
				<a className="tt-post-title c-h5" target="_blank"  href={props.link}>
					{props.title}
				</a>
				<div className="simple-text size-5 color-3">
					<p>{props.desc}</p>
				</div>
				<a className="c-btn type-1 color-4" target="_blank"  href={props.link}>
					<span>Read More<i className="fa fa-arrow-right" aria-hidden="true"></i></span>
				</a>
			</div>
			<div className="empty-space marg-lg-b80 marg-sm-b60"></div>	
		</>
	);

}
export default CourseDetails;
