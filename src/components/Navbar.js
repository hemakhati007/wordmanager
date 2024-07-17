import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';




export default function Navbar({ title = 'title here', about="about here",mode="light",toggleMode})//using javascript deafult values we assign default values to props
{
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme={mode}>
            <div className="container-fluid">

              {/* here we using link to as it wont reload any page */}
              {/* <Link className="navbar-brand" to="/">{title}</Link> */}/
              <a className="navbar-brand" href="/">{title}</a>
              
              {/* the prop values are directly getting assign to the proprties */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">

                  {/*  */}
                    {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                  </li>
                  <li className="nav-item">
                    {/* <Link className="nav-link" to="/about">{about}</Link> */}
                    <a className="nav-link" href="/about">{about}</a>
                  </li>
                  
                
                </ul>
                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

              </div>
              {/* text-light is a class in bootstrap that makes text light color similarly there text-black */}
              <div className={`form-check form-switch text-${mode==='light'?'dark':'light'}`} >
                {/* in js we use teplate literals to add varibles in a string  and we add ${} to add varibles*/}
                 <input className="form-check-input" type="checkbox" onClick={toggleMode} role="switch" id="flexSwitchCheckDefault" />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
           </div>
            </div>
          
     
            
      </nav>
    )
}

Navbar.propTypes={
                   title:PropTypes.string.isRequired,
                   about:PropTypes.string.isRequired
}
// its an object  //to check we dont send something else than we want//.isRequired to get error whne you dont sen dany prop
// Navbar.defaultProps={
//     title:'set title here',
//     about:'about here'
// };
// deafaut props is props not given it will by deafult  set these props //isRequired wont give error with deafaultProps



// the deafultprop is no longer  supported for function based components Instead, you should use JavaScript default parameters to set default values for your component props.
//In the updated version, you destructure the props object directly in the function parameters and assign a default value to the title prop and about prop.