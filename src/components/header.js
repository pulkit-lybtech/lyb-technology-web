import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../assets/img/logo.png'

const Header = ({ siteTitle }) => (
  <header className="header sticky-top py-3">
    <div className="container justify-content-between align-items-center" >
      <div className="logo">
        <Link to="/">
          <img className="img-fluid" src={logo} alt={siteTitle} />
        </Link>
      </div>

      <nav className="nav d-flex ">
          <Link className="nav-link" to="/">About</Link>
          <Link className="nav-link" to="/">Services</Link>
          <Link className="nav-link" to="/">Pricing</Link>
          <Link className="nav-link" to="/">Careers</Link>
      </nav>

      <div className="contact-btn">
        <Link className="btn rounded btn-light">
          Contact 
          <svg className="ml-2" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="17">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666656 0.500305H16.9158V16.7495H0.666656V0.500305Z" fill="white"/>
            </mask>
            <g mask="url(#mask0)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00408 10.3481L11.0516 15.2923C11.1849 15.509 11.3932 15.5065 11.4774 15.4948C11.5616 15.4831 11.7641 15.4315 11.8374 15.1856L15.6482 2.31479C15.7149 2.08729 15.5924 1.93229 15.5374 1.87729C15.4841 1.82229 15.3316 1.70479 15.1107 1.76729L2.23075 5.53895C1.98658 5.61062 1.93325 5.81562 1.92158 5.89979C1.90991 5.98562 1.90658 6.19812 2.12241 6.33395L7.12325 9.46145L11.5416 4.99645C11.7841 4.75145 12.1799 4.74895 12.4257 4.99145C12.6716 5.23395 12.6732 5.63062 12.4307 5.87562L8.00408 10.3481ZM11.4124 16.7498C10.8324 16.7498 10.3007 16.4548 9.98741 15.9481L6.75658 10.7056L1.45991 7.39312C0.88908 7.03562 0.590747 6.39896 0.683247 5.72979C0.774913 5.06062 1.23408 4.52896 1.87908 4.33979L14.7591 0.568123C15.3516 0.394789 15.9866 0.558956 16.4232 0.993956C16.8599 1.43312 17.0224 2.07479 16.8457 2.66979L13.0349 15.5398C12.8441 16.1873 12.3107 16.6448 11.6432 16.734C11.5649 16.744 11.4891 16.7498 11.4124 16.7498Z" fill="#130F26"/>
            </g>
          </svg>    
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
