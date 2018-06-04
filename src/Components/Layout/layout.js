import React, {Fragment} from 'react'
import './layout.css'
import {Link} from 'react-router-dom';
const Layout = (props) => {
  return(
    <Fragment>
    <div className='navb'> <Link to='/'>Builder</Link> <Link to='/orders'>Orders</Link> <Link to='/signup'>Sign Up</Link></div>
    <div className='laBody'>
    {props.children}
    </div>

    </Fragment>
  )

}

export default Layout;
