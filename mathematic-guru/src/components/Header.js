import React from 'react';
import logo from '../matheMaticsGuru.png';
import App from '../App';
import Courses from '../Courses';
import  {NavLink, withRouter} from 'react-router-dom';
const Header = (props ) => {
	return(
		<header className={'tt-header  sticky '+props.position} >
			<div className="container">
				<div className="top-inner 2">
					<LogoContainer />
				</div>
				<button id="toggle-switch" className="cmn-toggle-switch" onClick={props.click}><span></span></button>
				<div className="toggle-block" id="toggle-block">
					<div className="nav-holder">	
						<Navigation click={props.click} />
					</div>
					<div className="top-line">
						<div className="container">
							<RightContent />			
						</div>
					</div>
				</div>
			</div>
		</header>

	);

}

export const RightContent = () =>{
	return (
		<div className="right-content">
			<ul id="menu-topbar" className="top-nav sup-nav">
				<li id="menu-item-922" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-922">
					<a href="https://demos.bolvo.com/eduwp4/student-registration/">Signup</a>
				</li>
				<li id="menu-item-888" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-888">
					<a href="https://demos.bolvo.com/eduwp4/dashboard/">Signin</a>
				</li>
			</ul>
			<div className="top-info">
				<a href={'mailto:'+ contactDetails['email']}><i className="fa fa-envelope-o"></i>{contactDetails['email']}</a>
			</div>
			<div className="top-info">
				<a href={'tel:' + contactDetails['mobilenumber']}><i className="fa fa-phone"></i>{contactDetails['mobilenumber']}</a>
			</div>
			<div className="social-icons">
				<ul>
					<li>
						<a href="#" className="twitter" title="Twitter"><i className="fa fa-twitter"></i></a>
					</li>
					<li>
						<a href="#" className="facebook" title="Facebook"><i className="fa fa-facebook"></i></a>
					</li>
					<li>
						<a href="#" className="youtube" title="YouTube"><i className="fa fa-youtube"></i></a>
					</li>
				</ul>
			</div>
		</div>
	);


}
export const Footer = () => {
	return (
		<footer className="bottom-footer">
			<div className="copyright">
				&copy; 2020  MatheMatics Guru
			</div>
                </footer>
	);
}
export const LogoContainer = ( ) => {
	return (
		<a className="logo">
			<LogoImg />
		</a>
	);
}

export const LogoImg = () => {
	return	(
		<img src='https://demos.bolvo.com/eduwp4/wp-content/themes/educationwp/images/logo.png' alt="logo" className="logo" />
	);

}
export const ContactCard = () => {
	return (
		<div className="contact-card">
			<i className="Call-icon fa fa-phone">&nbsp; </i>
			<span>Available @ {contactDetails['mobilenumber']}</span>
		</div>

	);
}
export const contactDetails = {
		mobilenumber : 9971624578,
		mobilenumber2 : 7011872292,
		email : 'chandan77patel77@gmail.com'
		}

		
export const Navigation = (props) => {
	return (
			<>
			<MenuWithTitle itemClass="main-nav clearfix" Title="" click={props.click} items = {[
                                { label: 'Home', link: '/', iconClass: 'test-icon', linkClass: 'menu-item' },
                        ]} />

                        <MenuWithTitle itemClass="main-nav clearfix" Title="" click={props.click}  items = {[
                                { label: 'About', link: '/about', iconClass: 'test-icon', linkClass: 'menu-item' },
                        ]} />
                        <MenuWithTitle itemClass="main-nav clearfix" Title="" click={props.click}  items = {[
                                { label: 'Timeline', link: '/timeline', iconClass: 'test-icon', linkClass: 'menu-item' }
                        ]} />

                        <MenuWithTitle itemClass="main-nav clearfix" Title="" click={props.click}  items = {[
                                { label: 'Courses', link: '/courses', iconClass: 'test-icon', linkClass: 'menu-item' },
                        ]} />
			</>
	);

}

export const  MenuWithTitle = (Props) => {
        return(
                <div className={Props.itemClass}>
			{Props.Title ? 
                        <h4>{Props.Title}</h4>
			: ''
			}
                        <ul id="menu-primary-menu" className="">
                                {Props.items.map((val,ind) =>(
                                <li className={val.linkClass} key={ind} onClick={Props.click}>
					 <NavLink to={val.link} exact={true} activeClassName="current-menu-item current_page_item">
						<i className={val.iconClass}>
							<span></span>
						</i>
						{val.label}
					</NavLink>
                                </li>
                                ))}
                        </ul>
                </div>
        );
}
export default withRouter(Header);
