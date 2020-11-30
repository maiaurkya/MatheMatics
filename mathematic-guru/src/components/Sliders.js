import React from 'react';
import slider1 from '../rk_srivastava.jpeg';

const Slider = () => {
	return (
		<div className="Slider-container">
			<SliderImges />	
		</div>
	);

}
export const SliderImges = () => {
		return(
		<>
                        <CreateSlides itemClass="slide active" Title="World Book Of Record London" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" items = {[
                                {src: slider1, altText : 'Award1' }
                        ]} />

			 <CreateSlides itemClass="slide hide" Title="World Book Of Record United Kindom" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" items = {[
                                {src: slider1, altText : 'Award2' }
                        ]} />

			 <CreateSlides itemClass="slide hide" Title="World book of America" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" items = {[
                                {src: slider1, altText : 'Award3' }
                        ]} />

			 <CreateSlides itemClass="slide hide" Title="Wolrd Book of India" Desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" items = {[
                                {src: slider1, altText : 'Award4' }
                        ]} />
                       
                 </>
	);
};

export const Slider2 = () => {
	return (
		<>
		<div className="swiper-slide slide-to-slide swiper-slide-visible swiper-slide-active inline-wid1">
			<div className="tt-mslide inline-back">
		     		<div className="container-fluid">
				       <div className="tt-mslide-table">
				       		<div className="tt-mslide-cell">
			    				<div className="row">
							      <div className="col-md-6 col-md-offset-6 col-lg-5 col-lg-offset-7">
									<h1 className="tt-mslide-title c-h1 txt-uppercase text-animation animated fadeInUp" data-animation="fadeInUp">
										Online Learning	<span>The easier way</span>
									</h1>
									<div className="simple-text size-2 color-2 text-animation animated fadeInDown" data-animation="fadeInDown">
								  		<p>
											<i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</i>                                                                                                 
								  		</p>

									</div>  
		                                                	<div className="tt-mslide-btn">
										 <a className="c-btn type-1 text-animation animated fadeInLeft" data-animation="fadeInLeft" href="#">
				   							<span>Get FreeQuote
												 <i className="fa fa-arrow-right" aria-hidden="true"></i>
											</span>
								        	 </a>
								
                                                                	         <a className="c-btn type-1 color-2 text-animation animated fadeInRight" data-animation="fadeInRight" href="#">
							                	       <span>View Services                                                                                                                 <i className="fa fa-arrow-right" aria-hidden="true"></i>                                                                      </span>
							 	   	 	</a>
				 					</div>
			       					</div>
			    				</div>
						</div>
		    			</div>
		 		</div>
			</div>
		</div>
		<div className="swiper-slide slide-to-slide  inline-wid1">
			<div className="tt-mslide inline-back2">
		     		<div className="container-fluid">
				       <div className="tt-mslide-table">
				       		<div className="tt-mslide-cell">
			    				<div className="row">
							      <div className="col-md-6 col-md-offset-6 col-lg-5 col-lg-offset-7">
									<h1 className="tt-mslide-title c-h1 txt-uppercase text-animation animated fadeInUp" data-animation="fadeInUp">
										Online Learning	<span>The easier way</span>
									</h1>
									<div className="simple-text size-2 color-2 text-animation animated fadeInDown" data-animation="fadeInDown">
								  		<p>
											<i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</i>                                                                                                 
								  		</p>

									</div>  
		                                                	<div className="tt-mslide-btn">
										 <a className="c-btn type-1 text-animation animated fadeInLeft" data-animation="fadeInLeft" href="#">
				   							<span>Get FreeQuote
												 <i className="fa fa-arrow-right" aria-hidden="true"></i>
											</span>
								        	 </a>
								
                                                                	         <a className="c-btn type-1 color-2 text-animation animated fadeInRight" data-animation="fadeInRight" href="#">
							                	       <span>View Services                                                                                                                 <i className="fa fa-arrow-right" aria-hidden="true"></i>                                                                      </span>
							 	   	 	</a>
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
export const CreateSlides = (props) => {
		return(
			<div className={props.itemClass}>
				{props.Title ?
        	                <h4>{props.Title}</h4>
                	        : ''
                        	}
				{props.Desc ?
                                <p>{props.Desc}</p>
                                : ''
                                }
				<ul>
                             	   {props.items.map((val,ind) =>(
                                	<li className="slide-img-container" key={ind}>
                                        	<img src={val.src} alt={val.altText} />
                                	</li>
                                  ))}
                        	</ul>
			</div>
		);
}
export default Slider;
